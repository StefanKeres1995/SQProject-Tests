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
import org.openqa.selenium.support.ui.Select;
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
                    contacts[pos].setBirthday(HelperConstants.Null_String);
                }
                if(contacts[pos].getCity() == null){
                    contacts[pos].setCity(HelperConstants.Null_String);
                }
                if(contacts[pos].getCompany() == null){
                    contacts[pos].setCompany(HelperConstants.Null_String);
                }
                if(contacts[pos].getEmail() == null){
                    contacts[pos].setEmail(HelperConstants.Null_String);
                }
                if(contacts[pos].getGivenName() == null){
                    contacts[pos].setGivenName(HelperConstants.Null_String);
                }
                if(contacts[pos].getOccupation() == null){
                    contacts[pos].setOccupation(HelperConstants.Null_String);
                }
                if(contacts[pos].getPhotoUrl() == null){
                    contacts[pos].setPhotoUrl("https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif");
                }
                if(contacts[pos].getSource() == null){
                    contacts[pos].setSource(HelperConstants.Null_String);
                }
                if(contacts[pos].getStreetAddress() == null){
                    contacts[pos].setStreetAddress(HelperConstants.Null_String);
                }
                if(contacts[pos].getSurname() == null){
                    contacts[pos].setSurname(HelperConstants.Null_String);
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
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getBirthday(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.CITY:
                    if(contact.getCity() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getCity(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.COMPANY:
                    if(contact.getCompany() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getCompany(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.EMAIL:
                    if(contact.getEmail() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getEmail(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.GIVEN_NAME:
                    if(contact.getGivenName() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
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
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getOccupation(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.PHONE:
                    if(contact.getPhone() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getPhone().toString(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.PHOTO_URL:
                    if(contact.getPhotoUrl() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getPhotoUrl(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.SOURCE:
                    if(contact.getSource() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getSource(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.STREET_ADDRESS:
                    if(contact.getStreetAddress() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getStreetAddress(), webElementList.get(position).getText());
                    }
                    break;

                case ContactConstants.SURNAME:
                    if(contact.getSurname() == null){
                        assertEquals(HelperConstants.Null_String, webElementList.get(position).getText());
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
     * @param string - The string/XPath to compare it to.
     * @param url - The url to be restarted to, in case of an error
     */
    public void waitForSomething(WebDriver driver, int timeOutInSeconds, int typeOfCondition, String string, String url){

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
                        if(url != null){
                            driver.get(url);
                        }
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
                        //Force a Reset
                        if(url != null) {
                            driver.get(url);

                            if(url.equals(HelperConstants.IP.Address_Duplicates)) {
                                WebElement button = driver.findElement(By.xpath(".//a[@id='duplicateButton']"));
                                button.click();
                            }
                        }
                        counter++;
                    }
                }while(counter <= 3);
                TestCase.fail("Timeout on waiting. - Title contains" + counter);
                break;

            case HelperConstants.WaitCondition_SearchSourceComponentIndex:
                do {
                    ArrayList<String> strings = new ArrayList<>();
                    try {
                        if(string.contains("--")){
                            strings.addAll(Arrays.asList(string.split("--")));
                        }else{
                            strings.add(string);
                        }
                        WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
                        wait.until(ExpectedConditions.not(ExpectedConditions.attributeToBe(By.xpath(strings.get(0)), "disabled", "disabled")));
                        return;
                    } catch (TimeoutException ex) {
                        //Force a Reset
                        if(url != null) {
                            driver.get(url);
                            waitForSomething(driver, 10, HelperConstants.WaitCondition_ElementToBeClickable, ".//div[@id='contactsTable_info']", url);

                            //Select
                            Select select = new Select(driver.findElement(By.xpath(".//select[@id='source']")));
                            select.selectByValue(strings.get(1));

                            //Button
                            driver.findElement(By.xpath(".//form[@id='sourceForm']/div/button")).click();

                            //Wait
                        }
                        counter++;
                    }
                }while(counter <= 3);
                TestCase.fail("Timeout on waiting. - Title contains" + counter);
                break;

            case HelperConstants.WaitCondition_NumberOfElementsMoreThan:
                do {
                    ArrayList<String> strings = new ArrayList<>();
                    try {
                        if(string.contains("--")){
                            strings.addAll(Arrays.asList(string.split("--")));
                        }else{
                            strings.add(string);
                        }
                        WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
                        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(strings.get(0)), Integer.parseInt(strings.get(1))));
                        return;
                    } catch (TimeoutException ex) {
                        //Force a Reset
                        if(url != null) {
                            driver.get(url);
                        }
                        counter++;
                    }
                }while(counter <= 3);
                TestCase.fail("Timeout on waiting. - Title contains" + counter);
                break;

            case HelperConstants.WaitCondition_ElementToBeLoaded:
                do {
                    try {
                        WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
                        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(string), 1));
                        return;
                    } catch (TimeoutException ex) {
                        //Force a Reset
                        if(url != null) {
                            driver.get(url);
                        }
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
        ArrayList<Contact> contactLinkedList = new ArrayList<>(contacts);

        switch (field){
            case ContactConstants.BIRTHDAY:
                contactLinkedList.sort(Comparator.comparing(Contact::getBirthday));
                break;

            case ContactConstants.CITY:
                contactLinkedList.sort(Comparator.comparing(Contact::getCity));
                break;

            case ContactConstants.COMPANY:
                contactLinkedList.sort(Comparator.comparing(Contact::getCompany));
                break;

            case ContactConstants.EMAIL:
                contactLinkedList.sort(Comparator.comparing(Contact::getEmail));
                break;

            case ContactConstants.GIVEN_NAME:
                contactLinkedList.sort(Comparator.comparing(Contact::getGivenName));
                break;

            case ContactConstants.GUID:
                contactLinkedList.sort(Comparator.comparing(Contact::getGuid));
                break;

            case ContactConstants.OCCUPATION:
                contactLinkedList.sort(Comparator.comparing(Contact::getOccupation));
                break;

            case ContactConstants.PHOTO_URL:
                contactLinkedList.sort(Comparator.comparing(Contact::getPhotoUrl));
                break;

            case ContactConstants.SOURCE:
                contactLinkedList.sort(Comparator.comparing(Contact::getSource));
                break;

            case ContactConstants.STREET_ADDRESS:
                contactLinkedList.sort(Comparator.comparing(Contact::getStreetAddress));
                break;

            case ContactConstants.SURNAME:
                contactLinkedList.sort(Comparator.comparing(Contact::getSurname));
                break;

            case ContactConstants.PHONE:
                contactLinkedList.sort(Comparator.comparing(c -> c.getPhone().toString()));
                break;

            case ContactConstants.ID:
                contactLinkedList.sort(Comparator.comparingInt(Contact::getID));
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
    public ArrayList<Contact> filterDatabase(String filteredField, int column, Contact[] contacts) {
        List<Contact> filteredContacts = null;
        //ToDo: Filter as Sy did ~
        switch (column){
            case ContactConstants.GIVEN_NAME:
                filteredContacts = Arrays.stream(contacts).filter(
                                contact -> contact.getGivenName().toLowerCase().contains(filteredField.toLowerCase())).collect(Collectors.toList());
                break;
            case ContactConstants.SURNAME:
                filteredContacts = Arrays.stream(contacts).filter(
                        contact -> contact.getSurname().toLowerCase().contains(filteredField.toLowerCase())).collect(Collectors.toList());
                break;
            case ContactConstants.PHONE:
                filteredContacts = Arrays.stream(contacts).filter(
                        contact -> contact.getPhone().toString().contains(filteredField)).collect(Collectors.toList());
                break;
            case ContactConstants.CITY:
                filteredContacts = Arrays.stream(contacts).filter(
                        contact -> contact.getCity().toLowerCase().contains(filteredField.toLowerCase())).collect(Collectors.toList());
                break;
            case ContactConstants.SOURCE:
                if(filteredField.equals("All")){
                    return new ArrayList<>(Arrays.asList(contacts));
                }
                filteredContacts = Arrays.stream(contacts).filter(
                        contact -> contact.getSource().toLowerCase().contains(filteredField.toLowerCase())).collect(Collectors.toList());
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

    public ArrayList<String> getPossibleSources(Contact[] contacts) {
        ArrayList<String> sources = new ArrayList<>();

        //Add All
        sources.add("All");

        //Add all other existent
        for (Contact contact: contacts) {
            if (!sources.contains(contact.getSource())){
                sources.add(contact.getSource());
            }
        }
        return sources;
    }

    public HashMap<Integer, LinkedList<Contact>> getPossibleDuplicates(Contact[] contacts) {
        //Convert this into an LinkedList
        LinkedList<Contact> listOfContacts = new LinkedList<>(Arrays.asList(contacts));

        HashMap<Integer, LinkedList<Contact>> differencesMap = new HashMap<>();

        //Start doing the filter.
        for (int positionResults = 0; positionResults < listOfContacts.size(); positionResults++) {
            if (!findInMap(differencesMap, listOfContacts.get(positionResults)))
            {
                //Aren't we on the first iteration?   [This was switched; More optimized this way.]
                if (differencesMap.size() != 0) {
                    //Is this contact already in any sort of way on our map?
                    int response = verifyIfContainsOnMap(differencesMap, listOfContacts.get(positionResults));
                    if (response != -1) {

                        //Yes it is. Add it to the corresponding key.
                        addToArrayOnMap(differencesMap, listOfContacts.get(positionResults), response);

                        //We need to reset AFTER adding it to the map.
                        positionResults = -1;
                    } else {
                        //No it isn't. Add it to a new key.
                        addToMap(differencesMap, listOfContacts.get(positionResults));
                    }
                } else {
                    //Lets add the position
                    addToMap(differencesMap, listOfContacts.get(positionResults));
                }
            }
        }

        //Filter through those that have higher than 2
        return clearMapForDuplicates(differencesMap);
    }

    private HashMap<Integer, LinkedList<Contact>> clearMapForDuplicates(HashMap<Integer, LinkedList<Contact>> hashMap){

        HashMap<Integer, LinkedList<Contact>> newMap = new HashMap<>();
        int counter = 1;
        for(int key = 1; key < hashMap.size(); key++) {
            //They don't have the size equal to 1? Add them to the map of duplicates.
            if (hashMap.get(key).size() > 1) {
                newMap.put(counter, hashMap.get(key));
                counter++;
            }
        }

        for(int key = 1; key < newMap.size(); key++){
            newMap.get(key).sort(Comparator.comparingInt(Contact::getID));
        }

        return newMap;
    }

    private boolean findInMap(HashMap<Integer, LinkedList<Contact>> hashMap, Contact checkContact){
        for(LinkedList<Contact> contacts : hashMap.values()) {
            if(contacts.contains(checkContact)) {
                return true;
            }
        }
        return false;
    }

    private Integer verifyIfContainsOnMap(HashMap<Integer, LinkedList<Contact>> hashMap, Contact checkContact) {
        for (int sizeOfMap = 1; sizeOfMap <= hashMap.size(); sizeOfMap++) {
            //Does it exist in the array?
            if (verifyIfContainsOnArray(hashMap.get(sizeOfMap), checkContact)) {
                //Return the position
                return sizeOfMap;
            }
        }
        //Doesn't exist. Return -1
        return -1;
    }

    private boolean verifyIfContainsOnArray(LinkedList<Contact> contacts, Contact checkContact){
        for (Contact contact : contacts) {

            if (contact.getEmail().equals(checkContact.getEmail())) {
                return true;
            }

            if (contact.getPhone().equals(checkContact.getPhone())) {
                return true;
            }

            if (contact.getGivenName().equals(checkContact.getGivenName()) && contact.getSurname().equals(checkContact.getSurname())) {
                return true;
            }
        }
        return false;
    }

    private void addToMap(HashMap<Integer, LinkedList<Contact>> hashMap, Contact contact){
        //Create key
        hashMap.put(hashMap.size() + 1, new LinkedList<>());

        //Push contact
        hashMap.get(hashMap.size()).push(contact);
    }

    private void addToArrayOnMap(HashMap<Integer, LinkedList<Contact>> hashMap, Contact contact, int position) {

        //push the contact
        hashMap.get(position).push(contact);
    }

    public ArrayList<Integer> retrieveColumns(List<WebElement> values){
        ArrayList<String> columns = new ArrayList<>();
        for (WebElement value : values) {
            columns.add(value.getText());
        }

        ArrayList<Integer> ints = new ArrayList<>();
        for (String string : columns){
            switch (string){

                case "Birthday":
                    ints.add(ContactConstants.BIRTHDAY);
                    break;

                case "City":
                    ints.add(ContactConstants.CITY);
                    break;

                case "Company":
                    ints.add(ContactConstants.COMPANY);
                    break;

                case "Email":
                    ints.add(ContactConstants.EMAIL);
                    break;

                case "GivenName":
                    ints.add(ContactConstants.GIVEN_NAME);
                    break;

                case "Occupation":
                    ints.add(ContactConstants.OCCUPATION);
                    break;

                case "Phone":
                    ints.add(ContactConstants.PHONE);
                    break;

                case "Source":
                    ints.add(ContactConstants.SOURCE);
                    break;

                case "StreetAddress":
                    ints.add(ContactConstants.STREET_ADDRESS);
                    break;

                case "Surname":
                    ints.add(ContactConstants.SURNAME);
                    break;

                default:
                    //Can't come here.
                    TestCase.fail("Error! You aren't supposed to be here.");
            }
        }
        return ints;
    }
}