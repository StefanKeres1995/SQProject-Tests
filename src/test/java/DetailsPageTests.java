import Helper.Helper;
import Helper.HelperConstants;
import Model.Contact;
import Model.ContactConstants;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.Select;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import static junit.framework.TestCase.fail;

public class DetailsPageTests {
    private static WebDriver driver;

    private static Contact[] contacts = null;

    private Contact detailedContact = null;
    private String detailURL = "";

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
    public void tearDown() throws Exception {
        //Destroy the Chrome Process after the test is done
        driver.close();
    }



    @When("^I click on the Details button on row with id \"([^\"]*)\"$")
    public void iClickOnTheDetailsButtonOnRowWithId(String arg0) throws Throwable {

        //wait for data for the table, check if select of pagination appeared
        String xpath = ".//div[@id='contactsTable_length']/label/select";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, 10, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Get the elements that are related to the XPath
        List<WebElement> select = driver.findElements(By.xpath(xpath));

        //Did the select returned an empty List?
        if(!select.isEmpty()) {
            //check if id is from a larger pagination
            Select selectable = new Select(select.get(0));
            WebElement selectableValue = selectable.getFirstSelectedOption();
            int page = Integer.parseInt(arg0) / Integer.parseInt(selectableValue.getAttribute("value"));

            //jump to the correct page
            //get pagination button
            String paginationXpath = "//a[@id='contactsTable_next']";
            for (int i = 0; i < page; i++) {
                //being in the for, the element of the button is refreshed
                List<WebElement> paginationButtonElement = driver.findElements(By.xpath(paginationXpath));
                //did it find any element
                if (!paginationButtonElement.isEmpty()) {
                    paginationButtonElement.get(0).click();
                } else {
                    //Error!
                    fail("XPath came empty. Verify if the XPath is correct");
                }
            }
            //now that we're in the correct page find the details button
            String detailsButtonXpath = ".//table[@id='contactsTable']/tbody/tr[" + (Integer.parseInt(arg0) - 10 * page) + "]/td[7]/a";
            List<WebElement> buttonElement = driver.findElements(By.xpath(detailsButtonXpath));
            //did it find any element
            if (!buttonElement.isEmpty()) {
                //store data for next part of the test
                String contactIDXpath = ".//table[@id='contactsTable']/tbody/tr[" + (Integer.parseInt(arg0) - 10 * page) + "]/td[0]";
                List<WebElement> contactElement = driver.findElements(By.xpath(contactIDXpath));
                if (!contactElement.isEmpty()) {
                    for (Contact contact : contacts
                    ) {
                        if (contact.getID() == Integer.parseInt(contactElement.get(0).getText())) {
                            detailedContact = contact;
                            detailURL = HelperConstants.IP.Address_Details + Pattern.compile("[0-9]+|[A-Z]+").matcher(String.valueOf(detailedContact.getID()));
                            break;
                        }
                    }

                }
                buttonElement.get(0).click();
            } else {
                //Error!
                fail("XPath came empty. Verify if the XPath is correct");
            }
        }
    }

    @Then("^I should be redirected to the details page of the \"([^\"]*)\" user$")
    public void iShouldBeRedirectedToTheDetailsPageOfTheUser(String arg0) throws Throwable {

        //need to get guid of the person from the wanted arg0
        String tableXpath = "//table[@id='detailsTable']/tbody/tr";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeLoaded, tableXpath, detailURL);

        List<WebElement> detailsElements = driver.findElements(By.xpath(tableXpath));
        HashMap<String, String> tableContacts = new HashMap<>();
        if (!detailsElements.isEmpty()){
            for (WebElement element : detailsElements ) {
                tableContacts.put(element.findElements(By.xpath("td")).get(0).getText(),element.findElements(By.xpath("td")).get(1).getText());
            }

        }else {
            //Error!
            fail("XPath came empty. Verify if the XPath is correct");
        }
        //check if guid of the person received matches the guid from the person from index.html

    }



}
