package Helper;

import Model.Contact;
import Model.ContactConstants;
import com.google.gson.Gson;
import junit.framework.TestCase;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import java.util.stream.Collectors;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.fail;

public class Helper {

    private static Helper instance;

    public static Helper getInstance(){
        if(instance == null){
            instance = new Helper();
        }
        return instance;
    }

    /*
     * Function that will return an array of contacts, from an API.
     * @param urlToRead - URL
     * @return - Contact[], list of Contacts.
     */
    public Contact[] getHTML(String urlToRead) {
        try {
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
            Contact[] contacts = gson.fromJson(jsonStr, Contact[].class);

            //Remove all nulls on the array of Contact[]
            for (int pos = 0; pos < contacts.length; pos++) {
                contacts[pos].setID(pos+1);
                if(contacts[pos].getBirthday() == null){
                    contacts[pos].setBirthday(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getCity() == null){
                    contacts[pos].setCity(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getCompany() == null){
                    contacts[pos].setCompany(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getEmail() == null){
                    contacts[pos].setEmail(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getGivenName() == null){
                    contacts[pos].setGivenName(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getOccupation() == null){
                    contacts[pos].setOccupation(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getPhotoUrl() == null){
                    contacts[pos].setPhotoUrl("https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif");
                }
                if(contacts[pos].getSource() == null){
                    contacts[pos].setSource(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getStreetAddress() == null){
                    contacts[pos].setStreetAddress(HelperConstants.NULL_STRING);
                }
                if(contacts[pos].getSurname() == null){
                    contacts[pos].setSurname(HelperConstants.NULL_STRING);
                }
            }

            return contacts;

        } catch (IOException e) {
            e.printStackTrace();
        }
        fail("Error getting the List of Contacts");
        return null;
    }

    /*
     * Function that will verify the integrity of a contact. It will assert each position.
     * @param webElementList - List of WebElements, which should be retrieved with a driver.findElements()...
     * @param listFields - List of integers, which are represented by the ContactConstants. These should be ordered based on the previous one.
     * @param contacts - the specific contact to compare with, gotten from getHTML() function
     */
    public void checkIntegrityOfContact(List<WebElement> webElementList, List<Integer> listFields, Contact contact){

        for(int field: listFields ){
            int position = listFields.indexOf(field);
            switch (field){

                case ContactConstants.BIRTHDAY:
                    if(contact.getBirthday() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getBirthday(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.CITY:
                    if(contact.getCity() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getCity(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.COMPANY:
                    if(contact.getCompany() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getCompany(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.EMAIL:
                    if(contact.getEmail() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getEmail(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.GIVEN_NAME:
                    if(contact.getGivenName() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getGivenName(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.GUID:
                    //GUID is never null.
                    try {
                        assertEquals(contact.getGuid(), webElementList.get(position).findElement(By.xpath("a")).getAttribute("href").split("id")[1].substring(1));
                    }catch(Exception ex){
                        fail("No found position on the Button.");
                    }
                    break;

                case ContactConstants.OCCUPATION:
                    if(contact.getOccupation() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getOccupation(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.PHONE:
                    if(contact.getPhone() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getPhone().toString(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.PHOTO_URL:
                    if(contact.getPhotoUrl() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getPhotoUrl(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.SOURCE:
                    if(contact.getSource() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getSource(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.STREET_ADDRESS:
                    if(contact.getStreetAddress() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getStreetAddress(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.SURNAME:
                    if(contact.getSurname() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else {
                        assertEquals(contact.getSurname(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.ID:
                    assertEquals(String.valueOf(contact.getID()), webElementList.get(position).getText());
                    break;
                default:
                    //Can't come here.
                    fail("Error! You aren't supposed to be here.");
            }
        }
    }

    /*
     * Function that will use WebDriverWait to wait for a specific condition.
     * @param driver - WebDriver used
     * @param timeOutInSeconds - the timeout expected
     * @param typeOfCondition - Type of condition. Related to the created HelperConstants.
     * @param string - The string to compare it to.
     * @param URL - The URL to be restarted to, in case of an error
     */
    public void waitForSomething(WebDriver driver, int timeOutInSeconds, int typeOfCondition, String string, String URL){

        //This is to avoid and to help on the timeout that these Waits do Sometimes.
        int counter = 0;
        switch(typeOfCondition){

            case HelperConstants.WaitCondition_ElementToBeClickable:
                do {
                    try {
                        WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
                        wait.until((ExpectedConditions.elementToBeClickable(By.xpath(string))));
                        return;
                    } catch (TimeoutException ex) {
                        //Force a Reset
                        driver.get(HelperConstants.IP_ADDRESS_INDEX);
                        counter++;
                    }
                }while(counter <= 3);
                TestCase.fail("Timeout on waiting. - Element to be Clicked" + counter);
                break;

            case HelperConstants.WaitCondition_TitleContains:
                do {
                    try {
                        WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
                        wait.until(ExpectedConditions.titleContains(string));
                        return;
                    } catch (TimeoutException ex) {
                        counter++;
                    }
                }while(counter <= 3);
                TestCase.fail("Timeout on waiting. - Title contains" + counter);
                break;
            default:
                TestCase.fail("Error! You aren't supposed to be here.");
        }
    }

    /*
     * Function that will order the database by the @param field. It will assert the first position.
     * @param field - Ordered parameter
     * @param webElementList - List of webElements. The 1st contact, from the Table.
     * @param listFields - List of fields that are in the contact
     * @param contacts - List of contacts
     */
    public void orderDatabaseAndVerifyFirstContact(int field, List<WebElement> webElementList, LinkedList<Integer> listFields, ArrayList<Contact> contacts){

        //Order Database by Position, and get the 1st contact
        Contact firstContact = orderDatabase(field, contacts).get(0);

        //Check the integrity of the first contact.
        checkIntegrityOfContact(webElementList, listFields, firstContact);
    }

    /*
     * Function that will order the database, by the @param field.
     * @param field - the field to order
     * @param contacts - List of contacts
     * @return Ordered contacts
     */
    private ArrayList<Contact> orderDatabase(int field, ArrayList<Contact> contacts) {
        //Convert this Contact[] to LinkedList
        ArrayList<Contact> contactLinkedList = new ArrayList<Contact>(contacts);

        switch (field){
            case ContactConstants.BIRTHDAY:
                contactLinkedList.sort((c1, c2) -> c1.getBirthday().compareTo(c2.getBirthday()));
                break;

            case ContactConstants.CITY:
                contactLinkedList.sort((c1, c2) -> c1.getCity().compareTo(c2.getCity()));
                break;

            case ContactConstants.COMPANY:
                contactLinkedList.sort((c1, c2) -> c1.getCompany().compareTo(c2.getCompany()));
                break;

            case ContactConstants.EMAIL:
                contactLinkedList.sort((c1, c2) -> c1.getEmail().compareTo(c2.getEmail()));
                break;

            case ContactConstants.GIVEN_NAME:
                contactLinkedList.sort((c1, c2) -> c1.getGivenName().compareTo(c2.getGivenName()));
                break;

            case ContactConstants.GUID:
                contactLinkedList.sort((c1, c2) -> c1.getGuid().compareTo(c2.getGuid()));
                break;

            case ContactConstants.OCCUPATION:
                contactLinkedList.sort((c1, c2) -> c1.getOccupation().compareTo(c2.getOccupation()));
                break;

            case ContactConstants.PHOTO_URL:
                contactLinkedList.sort((c1, c2) -> c1.getPhotoUrl().toString().compareTo(c2.getPhotoUrl().toString()));
                break;

            case ContactConstants.SOURCE:
                contactLinkedList.sort((c1, c2) -> c1.getSource().compareTo(c2.getSource()));
                break;

            case ContactConstants.STREET_ADDRESS:
                contactLinkedList.sort((c1, c2) -> c1.getStreetAddress().compareTo(c2.getStreetAddress()));
                break;

            case ContactConstants.SURNAME:
                contactLinkedList.sort((c1, c2) -> c1.getSurname().compareTo(c2.getSurname()));
                break;

            case ContactConstants.PHONE:
                contactLinkedList.sort((c1, c2) -> c1.getPhone().toString().compareTo(c2.getPhone().toString()));
                break;

            case ContactConstants.ID:
                contactLinkedList.sort((c1, c2) -> Integer.compare(c1.getID(), c2.getID()));
                break;

            default:
                //Can't come here.
                fail("Error! You aren't supposed to be here.");
        }
        return contactLinkedList;
    }

    /*
     * It filters the records, on the @param column, with the search @param filteredField.
     * @param filteredField - the string to filter for
     * @param column - the column on to filter
     * @param valuesFromTable - List of WebElements, which can be related to multiple
     * @param listFields - List of fields that are in the contact
     * @param contacts - List of contacts
     */
    public void getFilteredRecordsAndVerifyThem(String filteredField, int column, List<WebElement> valuesFromTable, LinkedList<Integer> listFields, Contact[] contacts) {

        ArrayList<Contact> contactFiltered = filterDatabase(filteredField, column, contacts);

        //This is due, if no records are found, there is a record saying "No records found".
        if(contactFiltered.size() == 0){
            assertEquals(contactFiltered.size(), valuesFromTable.size() - 1);
        }else {
            assertEquals(contactFiltered.size(), valuesFromTable.size());

            //Since only 10 contacts can be shown at the time without touching the pagination, we only verify the first 10.
            int size = contactFiltered.size();
            if(contactFiltered.size() > 10) {
                size = 10;
            }

            //Verify if each contact is correct...
            for (int position = 0; position < size; position++) {
                checkIntegrityOfContact(valuesFromTable.get(position).findElements(By.xpath("td")), listFields, contactFiltered.get(position));
            }
        }
    }

    /*
     * Function that will filter the database, according to a specific @param filteredField, to a specific @param column
     * @param filteredField - the string to filter
     * @param column - the column to filter from
     * @param contacts - List of Contacts
     * @return ArrayList<Contacts> Filtered Contacts
     */
    private ArrayList<Contact> filterDatabase(String filteredField, int column, Contact[] contacts) {
        List<Contact> filteredContacts = null;
        switch (column){
            case ContactConstants.GIVEN_NAME:
                filteredContacts = Arrays.stream(contacts).filter(
                                contact -> contact.getGivenName().contains(filteredField)).collect(Collectors.toList());
                break;
            case ContactConstants.SURNAME:
                filteredContacts = Arrays.stream(contacts).filter(
                        contact -> contact.getSurname().contains(filteredField)).collect(Collectors.toList());
                break;
            case ContactConstants.PHONE:
                filteredContacts = Arrays.stream(contacts).filter(
                        contact -> contact.getPhone().toString().contains(filteredField)).collect(Collectors.toList());
                break;
            case ContactConstants.CITY:
                filteredContacts = Arrays.stream(contacts).filter(
                        contact -> contact.getCity().contains(filteredField)).collect(Collectors.toList());
                break;
            default:
                fail("No column Name should be named as : " + column);
                break;
        }
        return new ArrayList<>(filteredContacts);
    }

    /*
     * It filters the records, on the @param column, with the search @param filteredField. Afterwards it orders it, and finally asserts if all integrity is achieved.
     * @param filteredField - the string to filter for
     * @param orderableColumn - the column that is used to order the List of Contacts.
     * @param column - the column on to filter
     * @param valuesFromTable - List of WebElements, which can be related to multiple
     * @param listFields - List of fields that are in the contact
     * @param contacts - List of contacts
     */
    public void getFilteredOrderedRecordsAndVerifyThem(String filteredField, int orderableColumn, int column, List<WebElement> valuesFromTable, LinkedList<Integer> listFields, Contact[] contacts) {

        ArrayList<Contact> contactFiltered = filterDatabase(filteredField, column, contacts);

        contactFiltered = orderDatabase(orderableColumn, contactFiltered);

        //This is due, if no records are found, there is a record saying "No records found".
        if(contactFiltered.size() == 0){
            assertEquals(contactFiltered.size(), valuesFromTable.size() - 1);
        }else {
            assertEquals(contactFiltered.size(), valuesFromTable.size());

            //Since only 10 contacts can be shown at the time without touching the pagination, we only verify the first 10.
            int size = contactFiltered.size();
            if(contactFiltered.size() > 10) {
                size = 10;
            }

            //Verify if each contact is correct...
            for (int position = 0; position < size; position++) {
                checkIntegrityOfContact(valuesFromTable.get(position).findElements(By.xpath("td")), listFields, contactFiltered.get(position));
            }
        }
    }
}