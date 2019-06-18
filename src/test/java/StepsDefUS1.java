import Helper.*;
import Model.Contact;
import Model.ContactConstants;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;

public class StepsDefUS1 {
    private static WebDriver driver;

    private static Contact[] contacts = null;

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

    @Given("^I access the landing page of COS$")
    public void iAccessTheLandingPageOfCOS() throws Throwable {
        //Access the COS, and then assert if we are on the correct page
        driver.get(HelperConstants.IP.Address_Index);
        assertEquals ("Contacts Landing Page",driver.getTitle());
    }

    @Then("^the title of the page should be \"([^\"]*)\"$")
    public void theTitleOfThePageShouldBe(String title) throws Throwable {
        //Wait for the "title" to match the PageTitle
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, title, HelperConstants.IP.Address_Index);
    }

    @Then("^I should see the contact as in the database position$")
    public void iShouldSeeTheContactAsInTheDatabasePosition() {
        //XPath to the correct position
        String xpath = ".//table[@id='contactsTable']/tbody/tr[2]/td";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Click on the "5" on the pagination.
        driver.findElements(By.xpath(".//div[@id='contactsTable_paginate']/span/a")).get(4).click();

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(xpath));

        //Get ID
        int id = Integer.parseInt(valuesFromTable.get(0).getText());

        //Is this value correct?
        Helper.getInstance().checkIntegrityOfContact(valuesFromTable, constantToVerify, contacts[id-1]);
    }

    @Then("^I should see exactly the same amount of contacts that exist in the database$")
    public void iShouldSeeExactlyTheSameAmountOfContactsThatExistInTheDatabase() {

        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_info']";

        //Wait for the position related to the XPath to be clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

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
                //Get last position -- That's where the size is!
                assertEquals(contacts.length, Integer.parseInt(chunks.get(chunks.size() - 1)));
            }
        }else{
            //Error!
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }

    @When("^I sort the column \"([^\"]*)\"$")
    public void iSortTheColumn(String columnName) throws Throwable{

        //XPath to the correct position
        String xpath = ".//table[@id='contactsTable']/thead/tr/th";

        //Wait for the position related to the XPath to be clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        List<WebElement> valuesFromTh = driver.findElements(By.xpath(xpath));

        //Ignore the last position, as its related to Details!
        for(int position = 0; position < valuesFromTh.size() - 1; position++){
            //Click on the position
            if(valuesFromTh.get(position).getText().equals(columnName)){
                valuesFromTh.get(position).click();
                return;
            }
        }
        fail("Couldn't find the column");
    }

    @Then("^The first column should contain the most relevant contact regarded to the sorted \"([^\"]*)\"$")
    public void theFirstColumnShouldContainTheMostRelevantContactRegardedToTheSorted(String columnName) throws Throwable {

        //XPath to the correct position
        String xpath = ".//table[@id='contactsTable']/tbody/tr[1]/td";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(xpath));

        //Get the specific value, for the column...
        int value = 0;
        switch (columnName) {
            case "ID":
                value = ContactConstants.ID;
                break;
            case "GivenName":
                value = ContactConstants.GIVEN_NAME;
                break;
            case "Surname":
                value = ContactConstants.SURNAME;
                break;
            case "Phone":
                value = ContactConstants.PHONE;
                break;
            case "Source":
                value = ContactConstants.SOURCE;
                break;
            case "City":
                value = ContactConstants.CITY;
                break;
            default:
                fail("No column Name should be named as : " + columnName);
                break;
        }

        //Order database and check the integrity
        Helper.getInstance().orderDatabaseAndVerifyFirstContact(value, valuesFromTable, constantToVerify, new ArrayList<Contact>(Arrays.asList(contacts)));
    }

    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String string) throws Throwable {

        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_filter']/label/input";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //Get the elements that are related to the XPath
        List<WebElement> valuesFromSearch = driver.findElements(By.xpath(xpath));

        //Write on the search bar
        valuesFromSearch.get(0).sendKeys(string);
    }

    @Then("^I should only see columns that are related to what I've just searched, related to \"([^\"]*)\" \\(\"([^\"]*)\"\\)$")
    public void iShouldOnlySeeColumnsThatAreRelatedToWhatIVeJustSearchedRelatedTo(String column, String string) throws Throwable {

        //Get the specific value, for the column...
        int value = 0;
        switch (column) {
            case "GivenName":
                value = ContactConstants.GIVEN_NAME;
                break;
            case "Surname":
                value = ContactConstants.SURNAME;
                break;
            case "Phone":
                value = ContactConstants.PHONE;
                break;
            case "City":
                value = ContactConstants.CITY;
                break;
            default:
                fail("No column Name should be named as : " + column);
                break;
        }

        //Get the list of lines on the body of the table
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr"));

        //Verify these values
        Helper.getInstance().getFilteredRecordsAndVerifyThem(string, value, valuesFromTable, constantToVerify, contacts);
    }

    @Then("^I should be able to see the sorted table by \"([^\"]*)\", while only appearing what I searched for, related to \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheSortedTableByWhileOnlyAppearingWhatISearchedForRelatedTo(String column, String search) throws Throwable {
        //Get the specific value, for the column...
        int valueColumn = 0;
        switch (column) {
            case "GivenName":
                valueColumn = ContactConstants.GIVEN_NAME;
                break;
            case "Surname":
                valueColumn = ContactConstants.SURNAME;
                break;
            case "Phone":
                valueColumn = ContactConstants.PHONE;
                break;
            case "City":
                valueColumn = ContactConstants.CITY;
                break;
            case "ID":
                valueColumn = ContactConstants.ID;
                break;
            default:
                fail("No column Name should be named as : " + column);
                break;
        }

        //Get the list of lines on the body of the table
        List<WebElement> valuesFromTable = driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr"));

        //Verify the filtered contacts. We will search for a GivenName.
        Helper.getInstance().getFilteredOrderedRecordsAndVerifyThem(search, valueColumn, ContactConstants.GIVEN_NAME, valuesFromTable, constantToVerify, contacts);
    }

    @When("^I increase the pagination to \"([^\"]*)\"$")
    public void iIncreaseThePaginationTo(String pagination) throws Throwable {
        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_length']/label/select";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

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
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }

    @Then("^I should be able to see the number of contacts related to \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheNumberOfContactsRelatedTo(String pagination) throws Throwable {

        //XPath to the correct position
        String xpath = ".//div[@id='contactsTable_info']";

        //Get the elements that are related to the XPath
        List<WebElement> length = driver.findElements(By.xpath(xpath));

        //Did the div returned an empty List?
        if (!length.isEmpty()) {
            //Split the gotten string into several sub-strings, were we only get the Integers from the string (And the first Letter, for some reason).
            List<String> chunks = new LinkedList<String>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(length.get(0).getText());
            while (matcher.find()) {
                chunks.add(matcher.group());
            }

            if (chunks.isEmpty()) {
                //Error!
                fail("chunks came empty. Verify if the XPath is correct");
            } else {
                //Get last position -- That's where the size is!
                assertEquals(contacts.length, Integer.parseInt(chunks.get(chunks.size() - 1)));

                //Finally, assert if the number of
                int numberToCount = 0;
                if(contacts.length > Integer.parseInt(pagination)){
                    numberToCount = Integer.parseInt(pagination);
                }else{
                    numberToCount = contacts.length;
                }

                //Now, check if there are the same amount of contacts in the Table, that is on the pagination.
                assertEquals(driver.findElements(By.xpath(".//table[@id='contactsTable']/tbody/tr")).size(), numberToCount);
            }
        } else {
            //Error!
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }

    @Then("^I should be able to see the possible sources$")
    public void iShouldBeAbleToSeeThePossibleSources() {

        //XPath to the table
        String xpath = ".//table[@id='contactsTable']/tbody/tr[2]/HelperConstants.TimeToWaittd";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //XPath to the Source
        xpath = ".//select[@id='source']";

        //Get the elements that are related to the XPath
        List<WebElement> select = driver.findElements(By.xpath(xpath));

        if(!select.isEmpty()){
            //Get selectable, and get values from it
            Select selectable = new Select(select.get(0));

            ArrayList<String> sources = new ArrayList<>();
            for(WebElement element : selectable.getOptions()){
                sources.add(element.getText());
            }

            assertEquals(Helper.getInstance().getPossibleSources(contacts), sources);

            //Click on button
            xpath = ".//form[@id='sourceForm']/div/button";
            List<WebElement> button = driver.findElements(By.xpath(xpath));
            if(!button.isEmpty()){
                button.get(0).click();
            }else{
                //Error!
                fail("XPath came empty. Verify if the XPath is correct");
            }
        }else{
            //Error!
            fail("XPath came empty. Verify if the XPath is correct");
        }
    }

    @When("^I want to filter for a \"([^\"]*)\"$")
    public void iWantToFilterForA(String source) throws Throwable {

        //XPath to the table
        String xpath = ".//table[@id='contactsTable']/tbody/tr[2]/td";

        //Wait for the position related to the XPath is clickable (If it exists)
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_ElementToBeClickable, xpath, HelperConstants.IP.Address_Index);

        //XPath to the Source
        xpath = ".//select[@id='source']";

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
                //Error!
                fail("XPath came empty. Verify if the XPath is correct");
            }
        }else{
            //Error!
            fail("XPath came empty. Verify if the XPath is correct");
        }

    }

    @Then("^I should only be able to see the contacts of that specific \"([^\"]*)\"$")
    public void iShouldOnlyBeAbleToSeeTheContactsOfThatSpecific(String source) throws Throwable {

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

            Thread.sleep(100);

            //Get the elements that are related to the XPath
            valuesFromDiv = driver.findElements(By.xpath(xpath));

            List<String> chunks = new LinkedList<String>();
            Matcher matcher = Pattern.compile("[0-9]+|[A-Z]+").matcher(valuesFromDiv.get(0).getText());
            while (matcher.find()) {
                chunks.add( matcher.group() );
            }

            if(!chunks.isEmpty()){
                //If it comes to here, we need to filter our database.
                ArrayList<Contact> filtered = Helper.getInstance().filterDatabase(source, ContactConstants.SOURCE, contacts);

                Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_SearchSourceComponentIndex, ".//form[@id='sourceForm']/div/button--" + source, HelperConstants.IP.Address_Index);

                //Get last position -- That's where the size is!
                assertEquals(filtered.size(), Integer.parseInt(chunks.get(chunks.size() - 1)));
            }else{
                fail("chunks came empty. Verify if the XPath is correct");
            }
        }else{
            //Error!
            fail("XPath came empty. Verify if the XPath is correct");
        }

    }

    @When("^I click on the Duplicates$")
    public void iClickOnTheDuplicates() {

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

    @Then("^I should be redirected to the duplicate pages$")
    public void iShouldBeRedirectedToTheDuplicatePages() {
        Helper.getInstance().waitForSomething(driver, HelperConstants.TimeToWait, HelperConstants.WaitCondition_TitleContains, "Duplicates", HelperConstants.IP.Address_Duplicates);
    }


}
