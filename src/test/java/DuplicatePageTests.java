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
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class DuplicatePageTests {
    private static WebDriver driver;

    private static Contact[] contacts = null;

    private static LinkedList<Contact> avoidContacts = null;

    //Get possible list of Constants to Verify
    private static LinkedList<Integer> constantToVerify = new LinkedList<>();

    //List Of Duplicates
    private HashMap<Integer, LinkedList<Contact>> listOfDuplicates = new HashMap<>();

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
                avoidContacts = new LinkedList<>();
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
        options.addArguments("--window-size=1920,1080");
        driver = new ChromeDriver(options);
    }

    @After
    public void tearDown() {
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
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should be able to see the number of duplicate contacts possible$")
    public void iShouldBeAbleToSeeTheNumberOfDuplicateContactsPossible() throws Throwable {

        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, xpath, HelperConstants.IP.Address_Duplicates);

        Thread.sleep(1000);

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromDiv = driver.findElements(By.xpath(xpath));
        if (!valuesFromDiv.isEmpty()) {
            assertEquals(valuesFromDiv.get(0).findElements(By.xpath("section")).size(), listOfDuplicates.size());
        } else {
            fail(HelperConstants.Fail.XPath_Empty);
        }

    }

    @Then("^I should be able to see the contact as is in the database \\(\"([^\"]*)\"\\)$")
    public void iShouldBeAbleToSeeTheContactAsIsInTheDatabase(String relativePosition) throws Throwable {

        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, xpath, HelperConstants.IP.Address_Duplicates);

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

                        //Remove last two positions as well, the Accept and Decline
                        valuesFromTHead.remove(valuesFromTHead.size() - 1);
                        valuesFromTHead.remove(valuesFromTHead.size() - 1);

                        ArrayList<Integer> columns = Helper.getInstance().retrieveColumns(valuesFromTHead);
                        for(int contact = 0; contact < valuesFromTBody.size(); contact++){
                            Helper.getInstance().checkIntegrityOfContact(valuesFromTBody.get(contact).findElements(By.xpath("td")), columns, listOfDuplicates.get(position).get(contact));
                        }
                    }else{
                        fail(HelperConstants.Fail.XPath_Empty);
                    }
                } else {
                    fail(HelperConstants.Fail.XPath_Empty);
                }
            } else {
                fail(HelperConstants.Fail.XPath_Empty);
            }
        } else {
            fail(HelperConstants.Fail.XPath_Empty);
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
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should be on the index page$")
    public void iShouldBeOnTheIndexPage() throws InterruptedException {
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Contacts Landing Page", HelperConstants.IP.Address_Duplicates);

    }

    @When("^I click on the Accept Automatically button$")
    public void iClickOnTheAcceptAutomaticallyButton() throws InterruptedException {
        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']/section";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, xpath, HelperConstants.IP.Address_Duplicates);

        xpath = ".//label[@id='labelOption2']";

        WebElement labelToClick = driver.findElement(By.xpath(xpath));

        if(labelToClick != null){
            labelToClick.click();
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }

    }

    @And("^I click on the Confirm button$")
    public void iClickOnTheConfirmButton() {

        //XPath to the correct position
        String xpath = ".//button[@id='confirmButton']";

        WebElement button = driver.findElement(By.xpath(xpath));

        if(button != null){
            button.click();
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @When("^I click on each position, randomly$")
    public void iClickOnEachPositionRandomly() throws InterruptedException {

        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']/section";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, xpath, HelperConstants.IP.Address_Duplicates);

        List<WebElement> listOfSections = driver.findElements(By.xpath(xpath));

        if(!listOfSections.isEmpty()){
            //We found all sections. Lets go to each section and select all accepts (this is a random test!)
            List<WebElement> tableRows, rows;
            int position;
            for (WebElement listOfSection : listOfSections) {
                tableRows = listOfSection.findElements(By.xpath("table/tbody/tr"));
                if (!tableRows.isEmpty()) {
                    for (WebElement tableRow : tableRows) {
                        rows = tableRow.findElements(By.xpath("td"));
                        if (!rows.isEmpty()) {
                            position = (Math.random() <= 0.5) ? 1 : 2;
                            rows.get(rows.size() - position).findElement(By.xpath("div")).click();
                        } else {
                            fail(HelperConstants.Fail.XPath_Empty);
                        }
                    }
                } else {
                    fail(HelperConstants.Fail.XPath_Empty);
                }
            }
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @And("^I click on the Accept Manually button$")
    public void iClickOnTheAcceptManuallyButton() throws InterruptedException {
        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']/section";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, xpath, HelperConstants.IP.Address_Duplicates);

        xpath = ".//label[@id='labelOption1']";

        WebElement labelToClick = driver.findElement(By.xpath(xpath));

        if(labelToClick != null){
            labelToClick.click();
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should be redirected to the duplicate Free page \\(Auto\\)$")
    public void iShouldBeRedirectedToTheDuplicateFreePageAuto() throws InterruptedException {
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Duplicate Free--Auto", HelperConstants.IP.Address_Duplicates);
    }

    @Then("^I should be redirected to the duplicate Free page \\(Manual\\)$")
    public void iShouldBeRedirectedToTheDuplicateFreePageManual() throws InterruptedException {
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Duplicate Free--Manual", HelperConstants.IP.Address_Duplicates);
    }

    @Then("^An Alarm should appear stating that I need to fill everything$")
    public void anAlarmShouldAppearStatingThatINeedToFillEverything() throws InterruptedException {
        Helper.getInstance().waitForAlert(driver, HelperConstants.IP.Address_Duplicates).accept();
    }

    @And("^I click on each position, randomly while saving each Decline/Accept$")
    public void iClickOnEachPositionRandomlyWhileSavingEachDeclineAccept() throws InterruptedException {
        //XPath to the correct position
        String xpath = ".//form[@id='FormTableArea']/section";

        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, xpath, HelperConstants.IP.Address_Duplicates);

        List<WebElement> listOfSections = driver.findElements(By.xpath(xpath));

        if(!listOfSections.isEmpty()){
            //We found all sections. Lets go to each section and select all accepts (this is a random test!)
            List<WebElement> tableRows, rows;
            int position;
            for (WebElement listOfSection : listOfSections) {
                tableRows = listOfSection.findElements(By.xpath("table/tbody/tr"));
                if (!tableRows.isEmpty()) {
                    for (WebElement tableRow : tableRows) {
                        rows = tableRow.findElements(By.xpath("td"));
                        if (!rows.isEmpty()) {
                            position = (Math.random() <= 0.5) ? 1 : 2;
                            rows.get(rows.size() - position).findElement(By.xpath("div")).click();

                            //This means we are declining a contact. Add it to the contact List.
                            if(position == 1){
                                //Get possible positions of this contact
                                avoidContacts.add(contacts[Integer.parseInt(tableRow.findElement(By.xpath("th")).getText())]);
                            }
                        } else {
                            fail(HelperConstants.Fail.XPath_Empty);
                        }
                    }
                } else {
                    fail(HelperConstants.Fail.XPath_Empty);
                }
            }
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should be able to see the number of contacts related to the number that were filtered out$")
    public void iShouldBeAbleToSeeTheNumberOfContactsRelatedToTheNumberThatWereFilteredOut() throws InterruptedException {
        //XPath to the table
        String xpath = ".//table[@id='contactsTable']/tbody/tr[2]/td";

        //Wait for the position related to the XPath to be clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Duplicates_Free);

        xpath = ".//div[@id='contactsTable_info']";

        WebElement infoTable = driver.findElement(By.xpath(xpath));

        if(infoTable != null){
            List<String> chunks = new LinkedList<>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(infoTable.getText());
            while (matcher.find()) {
                chunks.add( matcher.group() );
            }

            if(!chunks.isEmpty()){
                //Get last position -- That's where the size is!
                assertEquals(contacts.length - avoidContacts.size(), Integer.parseInt(chunks.get(chunks.size() - 1)));
            }else{
                fail(HelperConstants.Fail.Chunks_Empty);
            }
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }

    }
}
