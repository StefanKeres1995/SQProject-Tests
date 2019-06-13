import Model.Contact;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.google.gson.Gson;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import static junit.framework.TestCase.assertEquals;

//import org.openqa.selenium.phantomjs.PhantomJSDriver;
//import org.openqa.selenium.phantomjs.PhantomJSDriverService;

public class StepsDefUS1 {
    private static WebDriver driver;

    private static WebClient webClient;
    private static HtmlPage htmlPage;

    private static Contact[] contacts = null;
    private static final String NULL_STRING = "--------------";

    @Before
    public void setUp()
    {
        if(driver == null) {
            //System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
            //System.setProperty("phantomjs.binary.path", "drivers/phantomjs.exe");
            //System.setProperty("webdriver.gecko.driver", "drivers/geckodriverx.exe");
            //String path = "/home/glnaceg/firefox/geckodriverx";
            System.setProperty("webdriver.gecko.driver", "/home/glnaceg/drivers/geckodriverx");


            /*ChromeOptions options = new ChromeOptions();
            options.setBinary("/home/glnaceg/chromedrivers/chromedriver76");
            options.addArguments("--no-sandbox"); // Bypass OS security model, MUST BE THE VERY FIRST OPTION
            options.addArguments("--headless");
            options.addArguments("disable-infobars"); // disabling infobars
            options.addArguments("--disable-extensions"); // disabling extensions
            options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
            //options.addArguments("--marionette-port");
            //options.addArguments("2828");
            options.addArguments("--ignore-certificate-errors");
            options.addArguments("--disable-popup-blocking");
            options.addArguments("--incognito");

            driver = new ChromeDriver(options);*/



            //driver = new ChromeDriver();
            //driver = new HtmlUnitDriver();

            //webClient = new WebClient();

            //driver = new PhantomJSDriver();

            driver = new FirefoxDriver(getDefaultFirefoxOptions());

            //System.setProperty("webdriver.gecko.driver", "/home/glnaceg/firefox/geckodriverx");
            //DesiredCapabilities dc = new DesiredCapabilities();
            //dc.setCapability("marionatte", false);
            /*FirefoxOptions opt = new FirefoxOptions();
            opt.setBinary("/home/glnaceg/firefox/geckodriverx");
            opt.setLogLevel(FirefoxDriverLogLevel.ERROR);
            opt.setHeadless(true);
            //opt.merge(dc);
            FirefoxDriver driver =  new FirefoxDriver(opt);*/

            try {
                getHTML("http://contactsqs2.apphb.com/Service.svc/rest/contacts");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @After
    public void tearDown() throws Exception {
        //System.clearProperty("webdriver.gecko.driver");
        //driver.close();
        //We won't close up here. These two commands shall be used in Jenkins, after the automaticCode runs.
        //ps -ef | grep firefox | awk '{print $2}' | xargs kill -9
        //ps -ef | grep geckodriverx | awk '{print $2}' | xargs kill -9
    }

    @Given("^I access the landing page of COS$")
    public void iAccessTheLandingPageOfCOS() throws Throwable {
        driver.get("http://35.246.92.202/");

        /*htmlPage = webClient.getPage("http://35.246.92.202/");
        webClient.setAjaxController(new NicelyResynchronizingAjaxController());
        webClient.waitForBackgroundJavaScript(30 * 1000);
        webClient.waitForBackgroundJavaScriptStartingBefore(30 * 1000);
        webClient.getOptions().setJavaScriptEnabled(true);
        for (int i = 0; i < 20; i++){
            List<?> strings = htmlPage.getByXPath(".//table[@id='contactsTable']/tbody/tr");
            if(strings.size() != 0){
                break;
            }
            synchronized (htmlPage){
                htmlPage.wait(500);
            }
        }*/
        assertEquals ("Contacts Landing Page",driver.getTitle());
        //assertEquals ("Contacts Landing Page", htmlPage.getTitleText());
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
    public void iShouldSeeTheSameNameAsInTheDatabasePosition() throws InterruptedException {
        //Wait till he gets up;
        boolean asd = true;
        //do {
            try {
                WebDriverWait wait = new WebDriverWait(driver, 10);
                wait.until((ExpectedConditions.elementToBeClickable(By.xpath(".//table[@id='contactsTable']/thead"))));
                asd = true;
            } catch (TimeoutException ex) {
                asd = false;
                //driver = new FirefoxDriver(getDefaultFirefoxOptions());
                driver = new PhantomJSDriver();
                driver.get("http://35.246.92.202/");
                System.out.println("Something ");
            }
        //}while(!asd);
        //wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath(".//table[@id='contactsTable']/tbody/tr"), 10));
        //wait.until(ExpectedConditions.);

        //Click on the paginator
        //driver.findElements(By.xpath(".//div[@id='contactsTable_paginate']/span/a[3]")).get(0).click();

        //Get value
        //Select select = new Select(driver.findElements(By.xpath(".//select[@name='contactsTable_length']")).get(0));
        //int pagination = Integer.parseInt(select.getFirstSelectedOption().getText());

        List<WebElement> strings = driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr[2]/td"));
        //List<?> strings = htmlPage.getByXPath(".//table[@id='contactsTable']/tbody/tr[2]/td");
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

    static FirefoxOptions getDefaultFirefoxOptions() {
        return new FirefoxOptions()
                .setLegacy(false)
                .setBinary("/home/glnaceg/firefox32/firefox/firefox")
                .setHeadless(true)
                .addArguments("--marionette-port")
                .addArguments("2828");
                //.addArguments("--headless");
                //.addPreference("devtools.selfxss.count", 100) //this helps to use console and evaluate xpath, e.g. $x(".//xpath")
                //.setLogLevel(TRACE);
    }
}