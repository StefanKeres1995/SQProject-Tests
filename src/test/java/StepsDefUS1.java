import Model.Contact;
import com.google.gson.Gson;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.TestCase.assertEquals;

public class StepsDefUS1 {
    private static WebDriver driver;
    private static Contact[] contacts = null;
    private static final String NULL_STRING = "--------------";
    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.chrome.driver", "drivers/chromedriver");
        System.setProperty("phantomjs.binary.path", "drivers/phantomjs.exe");
        if (driver == null) {
            driver = new ChromeDriver();
            // driver = new PhantomJSDriver();
            // driver = new HtmlUnitDriver();
        }
        try {
            getHTML("http://contactsqs2.apphb.com/Service.svc/rest/contacts");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Given("^I access the landing page of COS$")
    public void iAccessTheLandingPageOfCOS() throws Throwable {
        driver.get("http://35.246.92.202/");
        assertEquals ("Contacts Landing Page",driver.getTitle());
    }
    @Then("^the title of the page should be \"([^\"]*)\"$")
    public void theTitleOfThePageShouldBe(String title) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleContains(title));
    }
    @And("^I can see the text \"([^\"]*)\"$")
    public void iCanSeeTheText(String text) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(
                driver.findElement(By.tagName("body")),text));
    }

    @After
    public void tearDown() throws Exception {
        driver.close();
    }

    private static void getHTML(String urlToRead) throws Exception {
        StringBuilder result = new StringBuilder();
        URL url = new URL(urlToRead);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Accept", "application/json");
        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String line;
        while ((line = rd.readLine()) != null) {
            result.append(line);
        }
        rd.close();

        String jsonStr = result.toString();
        Gson gson = new Gson();
        contacts = gson.fromJson(jsonStr, Contact[].class);
    }

    @And("^I should see the same name as in the database position$")
    public void iShouldSeeTheSameNameAsInTheDatabasePosition() {
        //Wait till he gets up;
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until((ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(".//table[@id='contactsTable']/thead"),0)));

        //Click on the paginator
        driver.findElements(By.xpath(".//div[@id='contactsTable_paginate']/span/a[3]")).get(0).click();

        //Get value
        //Select select = new Select(driver.findElements(By.xpath(".//select[@name='contactsTable_length']")).get(0));
        //int pagination = Integer.parseInt(select.getFirstSelectedOption().getText());

        List<WebElement> strings = driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr[2]/td"));
        checkIntegrityOfContact(Integer.parseInt(strings.get(0).getText()) - 1, strings);
    }

    private void checkIntegrityOfContact(int id, List<WebElement> strings){

        //Given Name
        if(contacts[id].getGivenName() == null){
            assertEquals(NULL_STRING, strings.get(1).getText());
        }else{
            assertEquals(contacts[id].getGivenName(), strings.get(1).getText());
        }

        //Surname
        if(contacts[id].getSurname() == null){
            assertEquals(NULL_STRING, strings.get(2).getText());
        }else {
            assertEquals(contacts[id].getSurname(), strings.get(2).getText());
        }

        //Phone
        assertEquals(contacts[id].getPhone().toString(), strings.get(3).getText());

        //Sources
        if(contacts[id].getSource() == null){
            assertEquals(NULL_STRING, strings.get(4).getText());
        }else{
            assertEquals(contacts[id].getSource(), strings.get(4).getText());
        }

        //City
        if(contacts[id].getCity() == null){
            assertEquals(NULL_STRING, strings.get(5).getText());
        }else{
            assertEquals(contacts[id].getCity(), strings.get(5).getText());
        }
    }
}