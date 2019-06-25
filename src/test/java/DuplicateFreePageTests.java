import Helper.Helper;
import Helper.HelperConstants;
import Model.Contact;
import Model.ContactConstants;
import cucumber.api.PendingException;
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
import org.openqa.selenium.support.ui.Select;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class DuplicateFreePageTests {
    private static WebDriver driver;

    private static Contact[] contacts = null;

    //Get list of Constants to Verify
    private static LinkedList<Integer> constantToVerify = new LinkedList<>();

    private static LinkedList<Contact> avoidContacts = null;

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
        avoidContacts = new LinkedList<>();

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

    @Given("^I access that landing page of COS and want to go to the list of possible duplicates$")
    public void iAccessThatLandingPageOfCOSAndWantToGoToTheListOfPossibleDuplicates() throws InterruptedException {
        //Access the COS, and then assert if we are on the correct page
        driver.get(HelperConstants.IP.Address_Index);
        assertEquals ("Contacts Landing Page",driver.getTitle());

        //Click on the duplicateFree button, after waiting for the button to appear. No need to wait for the table
        String xpath = ".//a[@id='duplicateButton']";

        //Wait for the position related to the XPath to be clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Get Button
        List<WebElement> button = driver.findElements(By.xpath(xpath));
        if(!button.isEmpty()){
            button.get(0).click();

            //Wait for the page to load (Title)
            Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Duplicates", HelperConstants.IP.Address_Duplicates);

            //Form
            xpath = ".//form[@id='FormTableArea']/section";
            Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_NumberOfElementsMoreThan, xpath, HelperConstants.IP.Address_Duplicates);

        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @When("^I select random values$")
    public void iSelectRandomValues() throws InterruptedException {
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
                                avoidContacts.add(contacts[Integer.parseInt(tableRow.findElement(By.xpath("th")).getText()) - 1]);
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

    @When("^I click on the Accept Manually$")
    public void iClickOnTheAcceptManually() {

        //Path to the automatic label
        String xpath = ".//label[@id='labelOption1']";

        WebElement labelToClick = driver.findElement(By.xpath(xpath));

        if(labelToClick != null){
            labelToClick.click();
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @And("^I click on the Confirm$")
    public void iClickOnTheConfirm() throws InterruptedException {
        //XPath to the correct position
        String xpath = ".//button[@id='confirmButton']";

        WebElement button = driver.findElement(By.xpath(xpath));

        if(button != null){
            button.click();

            //Wait for the table to be present
            xpath = ".//table[@id='contactsTable']/tbody/tr[2]/td";

            //Wait for the position related to the XPath is clickable (If it exists)
            Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^the title of the duplicate page should be \"([^\"]*)\"$")
    public void theTitleOfTheDuplicatePageShouldBe(String title) {
        assertEquals (title,driver.getTitle());
    }

    @Then("^I should see the same number of contacts related to the non-duplicate component$")
    public void iShouldSeeTheSameNumberOfContactsRelatedToTheNonDuplicateComponent() {
        //Get the value from the info
        String xpath = ".//div[@id='contactsTable_info']";

        WebElement infoDiv = driver.findElement(By.xpath(xpath));

        if(infoDiv != null){
            //Split the gotten string into several sub-strings, were we only get the Integers from the string (And the first Letter, for some reason).
            List<String> chunks = new LinkedList<>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(infoDiv.getText());
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

    @Then("^I should see the contact as in the duplicateFree database position, \"([^\"]*)\"$")
    public void iShouldSeeTheContactAsInTheDuplicateFreeDatabasePosition(String positionString) throws Throwable {
        //XPath to the correct position
        String xpath = ".//a[@id='contactsTable_next']";
        List<WebElement> valuesFromDiv = driver.findElements(By.xpath(xpath));

        //Remove all contacts related to the avoid
        LinkedList<Contact> contactsToEvaluate = new LinkedList<>(Arrays.asList(contacts));
        contactsToEvaluate.removeAll(avoidContacts);

        if(!valuesFromDiv.isEmpty()){
            int position = 0;
            switch (positionString){
                case "first":
                    position = 1;
                    break;
                case "half-middle1":
                    position = (int) Math.floor(contactsToEvaluate.size() / 4);
                    break;
                case "middle":
                    position = (int) Math.floor(contactsToEvaluate.size() / 2);
                    break;
                case "half-middle2":
                    position = (int) Math.floor(3 * contactsToEvaluate.size() / 4);
                    break;
                case "last":
                    position = contactsToEvaluate.size();
                    break;
                default:
                    fail("String is not recognized");
            }

            //Split this value into two positions Example -- 216 -- 21 clicks, and search on the 6th position of the table.
            int numberOfClicks;
            int positionOnTable;
            if(String.valueOf(position).length() == 1){
                //We are between 1 and 9. We can't split
                numberOfClicks = 0;
                positionOnTable = position;
            }else{
                numberOfClicks = Integer.parseInt(String.valueOf(position).substring(0, String.valueOf(position).length() - 1));
                positionOnTable = Integer.parseInt(String.valueOf(position).substring(String.valueOf(position).length() - 1));
            }

            //Click the number of appropriate times on the Next button
            WebElement nextButtonPagination;
            for (int i = 0; i < numberOfClicks; i++) {

                nextButtonPagination = driver.findElement(By.xpath(".//a[@id='contactsTable_next']"));
                if (nextButtonPagination != null) {
                    nextButtonPagination.click();
                    Thread.sleep(100);
                } else {
                    fail(HelperConstants.Fail.XPath_Empty);
                }
            }

            //Get the elements that are related to the XPath
            xpath = ".//table[@id='contactsTable']/tbody/tr[" + positionOnTable + "]/td";
            List<WebElement> valuesFromTable = driver.findElements(By.xpath(xpath));

            if(!valuesFromTable.isEmpty()){

                //Evaluate it.
                Helper.getInstance().checkIntegrityOfContact(valuesFromTable, constantToVerify, contactsToEvaluate.get(position - 1));
            }else{
                fail(HelperConstants.Fail.XPath_Empty);
            }
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @And("^I sort column \"([^\"]*)\"$")
    public void iSortColumn(String columnName) {
        //XPath to the correct position
        String xpath = ".//table[@id='contactsTable']/thead/tr/th";

        List<WebElement> valuesFromTh = driver.findElements(By.xpath(xpath));

        //Ignore the last position, as its related to Details!
        if(!valuesFromTh.isEmpty()){
            for(int position = 0; position < valuesFromTh.size() - 1; position++){
                //Click on the position
                if(valuesFromTh.get(position).getText().equals(columnName)){
                    valuesFromTh.get(position).click();
                    return;
                }
            }
            fail("Couldn't find the column");
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^The first column should contain the most relevant contact regarded the sorted \"([^\"]*)\"$")
    public void theFirstColumnShouldContainTheMostRelevantContactRegardedTheSorted(String columnName) {
        //XPath to the correct position
        String xpath = ".//table[@id='contactsTable']/tbody/tr[1]/td";

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(xpath));

        if(!valuesFromTable.isEmpty()){

            //Get the specific value, for the column...
            int value = Helper.getInstance().getColumn(columnName);

            //Remove all contacts related to the avoid
            ArrayList<Contact> contactsToEvaluate = new ArrayList<>(Arrays.asList(contacts));
            contactsToEvaluate.removeAll(avoidContacts);

            //Order database and check the integrity
            Helper.getInstance().orderDatabaseAndVerifyFirstContact(value, valuesFromTable, constantToVerify, contactsToEvaluate);
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @And("^I search in the search bar for \"([^\"]*)\"$")
    public void iSearchInTheSearchBarFor(String string) {
        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_filter']/label/input";

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromSearch = driver.findElements(By.xpath(xpath));

        if (!valuesFromSearch.isEmpty()){
            //Write on the search bar
            valuesFromSearch.get(0).sendKeys(string);
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should only see columns that are related to what I searched for \\(\"([^\"]*)\"\\)$")
    public void iShouldOnlySeeColumnsThatAreRelatedToWhatISearchedFor(String string) {
        //Get the list of lines on the body of the table
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr"));

        if(!valuesFromTable.isEmpty()){

            //Remove all contacts related to the avoid
            ArrayList<Contact> contactsToEvaluate = new ArrayList<>(Arrays.asList(contacts));
            contactsToEvaluate.removeAll(avoidContacts);

            Contact[] contactsToEvaluateArr = new Contact[contactsToEvaluate.size()];
            contactsToEvaluateArr = contactsToEvaluate.toArray(contactsToEvaluateArr);

            //Verify these values
            Helper.getInstance().getFilteredRecordsAndVerifyThem(string, valuesFromTable, constantToVerify, contactsToEvaluateArr);
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should be able to see the sorted table by \"([^\"]*)\", while only appearing what I have searched for, related to \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatIHaveSearchedForRelatedTo(String column, String search) {

        //Get the specific value, for the column...
        int valueColumn = Helper.getInstance().getColumn(column);

        //Get the list of lines on the body of the table
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr"));

        if(!valuesFromTable.isEmpty()){
            //Verify the filtered contacts.
            LinkedList<Contact> contactsToEvaluate = new LinkedList<>(Arrays.asList(contacts));
            contactsToEvaluate.removeAll(avoidContacts);
            Contact[] contactsToEvaluateArr = new Contact[contactsToEvaluate.size()];
            contactsToEvaluateArr = contactsToEvaluate.toArray(contactsToEvaluateArr);

            Helper.getInstance().getFilteredOrderedRecordsAndVerifyThem(search, valueColumn, valuesFromTable, constantToVerify, contactsToEvaluateArr);
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @And("^I increase the pagination to value \"([^\"]*)\"$")
    public void iIncreaseThePaginationToValue(String pagination) {
        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_length']/label/select";

        //Get the elements that are related to the XPath
        List<WebElement> select = driver.findElements(By.xpath(xpath));

        //Did the select returned an empty List?
        if(!select.isEmpty()) {

            //Create the Select object, and select the value gotten from the test.
            Select selectable = new Select(select.get(0));
            selectable.selectByValue(pagination);

            assertEquals(selectable.getFirstSelectedOption().getText(), pagination);
        } else {
            //Error!
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should be able to see the number of contacts related to the \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheNumberOfContactsRelatedToThe(String pagination) {
        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_info']";

        //Get the elements that are related to the XPath
        List<WebElement> length = driver.findElements(By.xpath(xpath));

        //Did the div returned an empty List?
        if (!length.isEmpty()) {
            //Split the gotten string into several sub-strings, were we only get the Integers from the string (And the first Letter, for some reason).
            List<String> chunks = new LinkedList<>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(length.get(0).getText());
            while (matcher.find()) {
                chunks.add(matcher.group());
            }

            if (!chunks.isEmpty()) {
                //Remove all contacts related to the avoid
                ArrayList<Contact> contactsToEvaluate = new ArrayList<>(Arrays.asList(contacts));
                contactsToEvaluate.removeAll(avoidContacts);

                //Get last position -- That's where the size is!
                assertEquals(contactsToEvaluate.size(), Integer.parseInt(chunks.get(chunks.size() - 1)));

                //Finally, assert if the number


                int numberToCount;
                if(contactsToEvaluate.size()> Integer.parseInt(pagination)){
                    numberToCount = Integer.parseInt(pagination);
                }else{
                    numberToCount = contactsToEvaluate.size();
                }

                //Now, check if there are the same amount of contacts in the Table, that is on the pagination.
                assertEquals(driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr")).size(), numberToCount);
            } else {
                fail(HelperConstants.Fail.Chunks_Empty);
            }
        } else {
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should be able to see the possible sources related to the existing duplicates$")
    public void iShouldBeAbleToSeeThePossibleSourcesRelatedToTheExistingDuplicates() {
        //XPath to the table
        String xpath = ".//select[@id='source']";

        //Get the elements that are related to the XPath
        List<WebElement> select = driver.findElements(By.xpath(xpath));

        if(!select.isEmpty()){
            //Get selectable, and get values from it
            Select selectable = new Select(select.get(0));

            ArrayList<String> sources = new ArrayList<>();
            for(WebElement element : selectable.getOptions()){
                sources.add(element.getText());
            }

            //Verify the filtered contacts.
            LinkedList<Contact> contactsToEvaluate = new LinkedList<>(Arrays.asList(contacts));
            contactsToEvaluate.removeAll(avoidContacts);
            Contact[] contactsToEvaluateArr = new Contact[contactsToEvaluate.size()];
            contactsToEvaluateArr = contactsToEvaluate.toArray(contactsToEvaluateArr);

            assertEquals(Helper.getInstance().getPossibleSources(contactsToEvaluateArr), sources);

            //Click on button
            xpath = ".//form[@id='sourceForm']/div/button";
            List<WebElement> button = driver.findElements(By.xpath(xpath));
            if(!button.isEmpty()){
                button.get(0).click();
            }else{
                fail(HelperConstants.Fail.XPath_Empty);
            }
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @And("^I want to filter for one \"([^\"]*)\"$")
    public void iWantToFilterForOne(String source) throws Throwable {
        //XPath to the table
        String xpath = ".//select[@id='source']";

        //Get the elements that are related to the XPath
        List<WebElement> select = driver.findElements(By.xpath(xpath));

        if(!select.isEmpty()){
            Select selectable = new Select(select.get(0));
            selectable.selectByValue(source);

            assertEquals(source, selectable.getFirstSelectedOption().getText());

            //Click on button
            xpath = ".//form[@id='sourceForm']/div/button";
            List<WebElement> button = driver.findElements(By.xpath(xpath));
            if(!button.isEmpty()){
                button.get(0).click();
            }else{
                fail(HelperConstants.Fail.XPath_Empty);
            }
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }

    @Then("^I should only be able to see the contacts in that specific \"([^\"]*)\"$")
    public void iShouldOnlyBeAbleToSeeTheContactsInThatSpecific(String source) throws Throwable {
        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_info']";

        //Wait for the position related to the XPath to be clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromDiv = driver.findElements(By.xpath(xpath));

        //Did the div returned an empty List?
        if(!valuesFromDiv.isEmpty()){
            //Split the gotten string into several sub-strings, were we only get the Integers from the string (And the first Letter, for some reason).

            //Wait for the position related to the XPath to be clickable (If it exists)
            Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

            Thread.sleep(1000);

            //Get the elements that are related to the XPath
            valuesFromDiv = driver.findElements(By.xpath(xpath));

            if(!valuesFromDiv.isEmpty()){
                List<String> chunks = new LinkedList<>();
                Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(valuesFromDiv.get(0).getText());
                while (matcher.find()) {
                    chunks.add( matcher.group() );
                }

                if(!chunks.isEmpty()){
                    //Verify the filtered contacts.
                    LinkedList<Contact> contactsToEvaluate = new LinkedList<>(Arrays.asList(contacts));
                    contactsToEvaluate.removeAll(avoidContacts);
                    Contact[] contactsToEvaluateArr = new Contact[contactsToEvaluate.size()];
                    contactsToEvaluateArr = contactsToEvaluate.toArray(contactsToEvaluateArr);

                    //If it comes to here, we need to filter our database.
                    ArrayList<Contact> filtered = Helper.getInstance().filterDatabase(source, contactsToEvaluateArr);

                    Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_SearchSourceComponentIndex, ".//form[@id='sourceForm']/div/button--" + source, HelperConstants.IP.Address_Index);

                    //Get last position -- That's where the size is!
                    assertEquals(filtered.size(), Integer.parseInt(chunks.get(chunks.size() - 1)));
                }else{
                    fail(HelperConstants.Fail.Chunks_Empty);
                }
            }else{
                fail(HelperConstants.Fail.XPath_Empty);
            }
        }else{
            fail(HelperConstants.Fail.XPath_Empty);
        }
    }
}
