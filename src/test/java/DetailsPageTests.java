import Helper.Helper;
import Helper.HelperConstants;
import Model.Contact;
import Model.ContactConstants;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.TestCase;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Pattern;

import static junit.framework.TestCase.fail;

public class DetailsPageTests {
    private static WebDriver driver;

    //List of contacts
    private static Contact[] contacts = null;

    //Details of the specific contact
    private Contact detailedContact = null;

    //correct link to the contact
    private String detailURL = "";

    private Alert alert = null;

    //Get list of Constants to Verify
    private static LinkedList<Integer> constantToVerify = new LinkedList<>();

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
                constantToVerify.add(ContactConstants.ID);
                constantToVerify.add(ContactConstants.GIVEN_NAME);
                constantToVerify.add(ContactConstants.SURNAME);
                constantToVerify.add(ContactConstants.PHONE);
                constantToVerify.add(ContactConstants.SOURCE);
                constantToVerify.add(ContactConstants.CITY);
                constantToVerify.add(ContactConstants.GUID);
            }

            //Get the list of Contacts
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
    public void tearDown() {
        //Destroy the Chrome Process after the test is done
        driver.close();
    }

    @When("^I click on the Details button on row with id \"([^\"]*)\"$")
    public void iClickOnTheDetailsButtonOnRowWithId(String contactId) throws Throwable {

        //wait for data for the table, check if select of pagination appeared
        String xpath = ".//div[@id='contactsTable_length']/label/select";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Get the elements that are related to the XPath
        List<WebElement> select = driver.findElements(By.xpath(xpath));

        //Did the select returned an empty List?
        if(!select.isEmpty()) {
            //Check if id is from a larger pagination
            Select selectable = new Select(select.get(0));
            WebElement selectableValue = selectable.getFirstSelectedOption();
            int page = Integer.parseInt(contactId) / Integer.parseInt(selectableValue.getAttribute("value"));

            //Jump to the correct page & Get pagination button
            String paginationXpath = "//a[@id='contactsTable_next']";

            List<WebElement> paginationButtonElement;
            for (int i = 0; i < page; i++) {
                //being in the for, the element of the button is refreshed
                paginationButtonElement = driver.findElements(By.xpath(paginationXpath));
                if (!paginationButtonElement.isEmpty()) {
                    paginationButtonElement.get(0).click();
                } else {
                    fail("XPath came empty. Verify if the XPath is correct");
                }
            }

            //Now that we're in the correct page find the details button
            String detailsButtonXpath = ".//table[@id='contactsTable']/tbody/tr[" + (Integer.parseInt(contactId) - (10 * page)) + "]/td[7]/a";
            List<WebElement> buttonElement = driver.findElements(By.xpath(detailsButtonXpath));

            if (!buttonElement.isEmpty()) {
                //store data for next part of the test
                String contactIDXpath = ".//table[@id='contactsTable']/tbody/tr[" + (Integer.parseInt(contactId) - (10 * page)) + "]/td[1]";
                List<WebElement> contactElement = driver.findElements(By.xpath(contactIDXpath));
                if (!contactElement.isEmpty()) {
                    for (Contact contact : contacts) {
                        if (contact.getID() == Integer.parseInt(contactElement.get(0).getText())) {

                            //Store contact for next test
                            detailedContact = contact;

                            //Store URL for next test
                            detailURL = HelperConstants.IP.Address_Details + Pattern.compile("[0-9]+|[A-Z]+").matcher(String.valueOf(detailedContact.getID()));

                            //Click the button gotten
                            buttonElement.get(0).click();
                            return;
                        }
                    }
                } else {
                    fail("XPath came empty. Verify if the XPath is correct");
                }
            } else {
                fail("XPath came empty. Verify if the XPath is correct");
            }
        }else{
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }

    @Then("^I should be redirected to the details page of the user$")
    public void iShouldBeRedirectedToTheDetailsPageOfTheUser() throws InterruptedException {
        //Need to get guid of the person from the wanted ContactId
        String tableXpath = "//table[@id='detailsTable']/tbody/tr";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeLoaded, tableXpath, detailURL);

        List<WebElement> detailsElements = driver.findElements(By.xpath(tableXpath));

        if (!detailsElements.isEmpty()){
            ArrayList<WebElement> contactKeys = new ArrayList<>();
            ArrayList<WebElement> contactValues = new ArrayList<>();
            for (WebElement element : detailsElements ) {
                contactKeys.add(element.findElements(By.xpath("td")).get(0));
                contactValues.add(element.findElements(By.xpath("td")).get(1));
            }

            Helper.getInstance().checkIntegrityOfContact(contactValues, Helper.getInstance().retrieveColumns(contactKeys), detailedContact);
        }else {
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }

    @Given("^I enter the details page with the following case \"([^\"]*)\"$")
    public void iEnterTheDetailsPageWithTheFollowingLink(String caseReceived) throws Throwable {
        driver.get(HelperConstants.IP.Address_Index);

        //Prepare each case
        switch (caseReceived){
            case "justDetails": detailURL = HelperConstants.IP.Address_Index + "details.html";
                break;
            case "emptyId": detailURL = HelperConstants.IP.Address_Index + "details.html?id=";
                break;
            case "unfilteredId": detailURL = HelperConstants.IP.Address_Index + "details.html?id=1";
                break;
            case "incorrectId": detailURL = HelperConstants.IP.Address_Index + "details.html?id=" + caseReceived;
                break;
            default:
                TestCase.fail("Invalid case format");
        }

    }

    @Then("^I should be presented with an alarm box$")
    public void iShouldBePresentedWithAnAlarmBox() throws InterruptedException{
        //Store alert for next test
        alert = Helper.getInstance().waitForAlert(driver, detailURL);
    }

    @And("^Clicking the alarm box should redirect me to home page$")
    public void clickingTheAlarmBoxShouldRedirectMeToHomePage() throws InterruptedException {
        //Check if alert exists
        if (alert != null){

            alert.accept();

            Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Contacts Landing Page", detailURL);
        }else {
            TestCase.fail("Alert doesn't exist");
        }
    }

    @Given("^I navigate on Details page of contact \"([^\"]*)\"$")
    public void iNavigateOnDetailsPageOfContact(String contactId) throws Throwable {
        //Prepare url for the details page with the contact with the contactId id
        detailURL = HelperConstants.IP.Address_Details + Pattern.compile("[0-9]+|[A-Z]+").matcher(contactId);

        //Go to the details page of the contact with the contactId id
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains , "Details", detailURL);
    }

    @When("^I press the back button$")
    public void iPressTheBackButton() {
        //Find button xpath
        List<WebElement> backButton = driver.findElements(By.xpath(".//a[@id='backButton']"));

        if (!backButton.isEmpty()){
            backButton.get(0).click();
        } else {
            TestCase.fail("Back Button doesn't exist");
        }
    }

    @Then("^I return to the Landing Page$")
    public void iReturnToTheLandingPage() throws InterruptedException {
        //Once checked the user should be redirected to the landing page
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Contacts Landing Page", HelperConstants.IP.Address_Index);
    }
}