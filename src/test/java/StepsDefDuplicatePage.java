import Helper.*;
import Model.Contact;
import Model.ContactConstants;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.implementation.bytecode.Throw;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

import java.lang.reflect.Array;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class StepsDefDuplicatePage {
    private static WebDriver driver;

    private static Contact[] contacts = null;

    //Get possible list of Constants to Verify
    private static LinkedList<Integer> constantToVerify = new LinkedList<>();

    //List Of Duplicates
    private HashMap<Integer, LinkedList<Contact>> listOfDuplicates = new HashMap<Integer, LinkedList<Contact>>();

    @Before
    public void setUp() {
        //Is the driver initializing for for first time?
        if(!System.getProperty("user.dir").contains("jenkins") && driver == null) {
            System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
        }

        //Are contacts null? Then populate.
        if(contacts == null) {
            //Is the list of what is on the table empty?
            if(constantToVerify.isEmpty()){
                constantToVerify.add(ContactConstants.GIVEN_NAME);
                constantToVerify.add(ContactConstants.SURNAME);
                constantToVerify.add(ContactConstants.EMAIL);
                constantToVerify.add(ContactConstants.PHONE);
                constantToVerify.add(ContactConstants.CITY);
                constantToVerify.add(ContactConstants.STREET_ADDRESS);
                constantToVerify.add(ContactConstants.SOURCE);
                constantToVerify.add(ContactConstants.OCCUPATION);
                constantToVerify.add(ContactConstants.SOURCE);
            }

            //Get the list of Contacts
            try {
                contacts = Helper.getInstance().getHTML("http://contactsqs2.apphb.com/Service.svc/rest/contacts");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        if( contacts != null && listOfDuplicates.isEmpty()){
            listOfDuplicates = Helper.getInstance().getPossibleDuplicates(contacts);
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

    @Given("^I access the landing page of COS and want to go to duplicates$")
    public void iAccessTheLandingPageOfCOSAndWantToGoToDuplicates() throws Throwable {
        //Access the COS, and then assert if we are on the correct page
        driver.get(HelperConstants.IP.Address_Index);
        assertEquals ("Contacts Landing Page",driver.getTitle());

        //XPath to the table
        String xpath = ".//table[@id='contactsTable']/tbody/tr[2]/td";

        //Wait for the position related to the XPath to be clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Get the elements that are related to the XPath (related to the button)
        xpath = ".//a[@id='duplicateButton']";

        List<WebElement> button = driver.findElements(By.xpath(xpath));
        if(!button.isEmpty()){
            button.get(0).click();
        }else{
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }

    @Then("^I should be able to see the number of duplicate contacts possible$")
    public void iShouldBeAbleToSeeTheNumberOfDuplicateContactsPossible() throws Throwable {

        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']";

        String string = xpath + "--0";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, string, HelperConstants.IP.Address_Duplicates);

        Thread.sleep(1000);

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromDiv = driver.findElements(By.xpath(xpath));
        if (!valuesFromDiv.isEmpty()) {
            assertEquals(valuesFromDiv.get(0).findElements(By.xpath("section")).size(), listOfDuplicates.size());
        } else {
            fail("Wrong XPATh");
        }

    }

    @Then("^I should be able to see the contact as is in the database \\(\"([^\"]*)\"\\)$")
    public void iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String relativePosition) throws Throwable {

        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']";
        String string = xpath + "--0";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, string, HelperConstants.IP.Address_Duplicates);

        Thread.sleep(1000);

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromDiv = driver.findElements(By.xpath(xpath));
        if (!valuesFromDiv.isEmpty()) {
            List<WebElement> valuesFromSection = valuesFromDiv.get(0).findElements(By.xpath("section"));
            if(!valuesFromSection.isEmpty()){
                int position;
                switch (relativePosition){
                    case "first":
                        position = 1;
                        break;
                    case "half-middle1":
                        position = (int) Math.floor(1 + valuesFromSection.size() / 4);
                        break;
                    case "middle":
                        position = (int) Math.floor(valuesFromSection.size() / 2);
                        break;
                    case "half-middle2":
                        position = (int) Math.floor((valuesFromSection.size() / 2) + (valuesFromSection.size() / 4));
                        break;
                    case "last":
                        position = valuesFromSection.size() - 1;
                        break;
                    default:
                        fail("relativePosition seems incorrect.");
                        return;
                }
                List<WebElement> valuesFromTBody = valuesFromSection.get(position - 1).findElements(By.xpath("table/tbody/tr"));
                if (!valuesFromTBody.isEmpty()) {
                    //Assert size
                    assertEquals(valuesFromTBody.size(), listOfDuplicates.get(position).size());

                    //Get tables header
                    xpath = ".//form[@id='FormTableArea']/section[ "+ position +"]/table/thead/tr/th";

                    List<WebElement> valuesFromTHead = driver.findElements(By.xpath(xpath));

                    if(!valuesFromTHead.isEmpty()){
                        valuesFromTHead.remove(0);
                        ArrayList<Integer> columns = Helper.getInstance().retrieveColumns(valuesFromTHead);
                        for(int contact = 0; contact < valuesFromTBody.size(); contact++){
                            Helper.getInstance().checkIntegrityOfContact(valuesFromTBody.get(contact).findElements(By.xpath("td")), columns, listOfDuplicates.get(position).get(contact));
                        }
                    }else{
                        fail("Wrong XPath");
                    }
                } else {
                    fail("Wrong XPath");
                }
            } else {
                fail("Wrong XPath!");
            }
        } else {
            fail("Wrong XPath");
        }
    }

    @When("^I click on the Back to index button$")
    public void iClickOnTheBackToIndexButton() {
        //XPath to the table
        String xpath = ".//a[@id='backButton']";

        List<WebElement> listOfElements = driver.findElements(By.xpath(xpath));
        if( !listOfElements.isEmpty() ){
            listOfElements.get(0).click();
        }else{
            fail("Wrong XPath");
        }
    }

    @Then("^I should be on the index page$")
    public void iShouldBeOnTheIndexPage() {
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Contacts Landing Page", HelperConstants.IP.Address_Duplicates);

    }
}
