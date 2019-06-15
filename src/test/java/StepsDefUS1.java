import Helper.*;
import Model.Contact;
import Model.ContactConstants;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.google.gson.Gson;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.AfterClass;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class StepsDefUS1 {
    private static WebDriver driver;

    private static Contact[] contacts = null;

    @Before
    public void setUp()
    {
        //Is the driver initializing for for first time?
        if(driver == null) {
            //System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
        }

        //Are contacts null? Then populate.
        if(contacts == null) {
            try {
                contacts = Helper.getInstance().getHTML("http://contactsqs2.apphb.com/Service.svc/rest/contacts");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        //Create the Chrome Process
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        driver = new ChromeDriver(options);
    }

    @After
    public void tearDown() throws Exception {
        //Destroy the Chrome Process after the test is done
        driver.close();
    }

    @Given("^I access the landing page of COS$")
    public void iAccessTheLandingPageOfCOS() throws Throwable {
        //Access the COS, and then assert if we are on the correct page
        driver.get("http://35.246.92.202/");
        assertEquals ("Contacts Landing Page",driver.getTitle());
    }

    @Then("^the title of the page should be \"([^\"]*)\"$")
    public void theTitleOfThePageShouldBe(String title) throws Throwable {
        //Wait for the "title" to match the PageTitle
        Helper.getInstance().waitForSomething(driver, 3, HelperConstants.WaitCondition_TitleContains, title);
    }

    @And("^I should see the same name as in the database position$")
    public void iShouldSeeTheSameNameAsInTheDatabasePosition() throws InterruptedException {
        //XPath to the correct position
        String xpath = ".//table[@id='contactsTable']/tbody/tr[2]/td";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, 10, HelperConstants.WaitCondition_ElementToBeClickable, xpath);

        //Click on the "5" on the pagination.
        driver.findElements(By.xpath(".//div[@id='contactsTable_paginate']/span/a")).get(4).click();

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(xpath));

        //Need to remove the first position (ID). This is because of the function.
        int id = Integer.parseInt(valuesFromTable.get(0).getText());
        valuesFromTable.remove(0);

        //Get list of Constants to Verify... These need to be ordered
        LinkedList<Integer> constantToVerify = new LinkedList<Integer>();
        constantToVerify.add(ContactConstants.GIVEN_NAME);
        constantToVerify.add(ContactConstants.SURNAME);
        constantToVerify.add(ContactConstants.PHONE);
        constantToVerify.add(ContactConstants.SOURCE);
        constantToVerify.add(ContactConstants.CITY);

        //Is this value correct?
        Helper.getInstance().checkIntegrityOfContact(id - 1, valuesFromTable, constantToVerify, contacts);
    }

    @Then("^I should see exactly the same amount of contacts that exist in the database$")
    public void iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase() {

        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_info']";

        //Wait for the position related to the XPath to be clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, 10, HelperConstants.WaitCondition_ElementToBeClickable, xpath);

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromDiv = driver.findElements(By.xpath(xpath));

        //Did the div returned an empty List?
        if(!valuesFromDiv.isEmpty()){
            //Split the gotten string into several sub-strings, were we only get the Integers from the string (And the first Letter, for some reason).
            List<String> chunks = new LinkedList<String>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(valuesFromDiv.get(0).getText());
            while (matcher.find()) {
                chunks.add( matcher.group() );
            }

            if(chunks.isEmpty()){
                fail("chunks came empty. Verify if the XPath is correct");
            }else{
                //Get last position -- Thats where the size is!
                assertEquals(contacts.length, Integer.parseInt(chunks.get(chunks.size() - 1)));
            }
        }else{
            //Error!
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }
}