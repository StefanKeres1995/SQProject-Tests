package Helper;

import Model.Contact;
import Model.ContactConstants;
import com.google.gson.Gson;
import junit.framework.TestCase;
import org.junit.Test;
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
import java.sql.Time;
import java.util.*;

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

                //Birthday
                case ContactConstants.BIRTHDAY:
                    if(contact.getBirthday() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getBirthday(), webElementList.get(position).getText());
                    }
                    break;

                //City
                case ContactConstants.CITY:
                    if(contact.getCity() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getCity(), webElementList.get(position).getText());
                    }
                    break;

                //Company
                case ContactConstants.COMPANY:
                    if(contact.getCompany() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getCompany(), webElementList.get(position).getText());
                    }
                    break;

                //Email
                case ContactConstants.EMAIL:
                    if(contact.getEmail() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getEmail(), webElementList.get(position).getText());
                    }
                    break;

                //Given Name
                case ContactConstants.GIVEN_NAME:
                    if(contact.getGivenName() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getGivenName(), webElementList.get(position).getText());
                    }
                    break;

                //Guid
                case ContactConstants.GUID:
                    if(contact.getGuid() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getGuid(), webElementList.get(position).getText());
                    }
                    break;

                //Occupation
                case ContactConstants.OCCUPATION:
                    if(contact.getOccupation() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getOccupation(), webElementList.get(position).getText());
                    }
                    break;

                //Phone
                case ContactConstants.PHONE:
                    if(contact.getPhone() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getPhone().toString(), webElementList.get(position).getText());
                    }
                    break;

                //Phone Url
                case ContactConstants.PHOTO_URL:
                    //Recheck!
                    if(contact.getPhotoUrl() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getPhotoUrl().toString(), webElementList.get(position).getText());
                    }
                    break;

                //Source
                case ContactConstants.SOURCE:
                    if(contact.getSource() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getSource(), webElementList.get(position).getText());
                    }
                    break;

                //Street Address
                case ContactConstants.STREET_ADDRESS:
                    if(contact.getStreetAddress() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contact.getStreetAddress(), webElementList.get(position).getText());
                    }
                    break;

                //Surname
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
     */
    public void waitForSomething(WebDriver driver, int timeOutInSeconds, int typeOfCondition, String string){
        switch(typeOfCondition){
            case HelperConstants.WaitCondition_ElementToBeClickable:
                try {
                    WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
                    wait.until((ExpectedConditions.elementToBeClickable(By.xpath(string))));
                } catch (TimeoutException ex) {
                    TestCase.fail("Timeout on waiting. - Element to be Clicked");
                }
                break;
            case HelperConstants.WaitCondition_TitleContains:
                try{
                    WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
                    wait.until(ExpectedConditions.titleContains(string));
                } catch (TimeoutException ex){
                    TestCase.fail("Timeout on waiting. - Title contains");
                }
                break;
            default:
                TestCase.fail("Error! You aren't supposed to be here.");
        }
    }

    public void orderDatabaseAndVerifyFirstContact(int field, List<WebElement> webElementList, LinkedList<Integer> listFields, Contact[] contacts){
        //Order Database by Position, and get the 1st contact
        Contact firstContact = orderDatabase(field, contacts);

        checkIntegrityOfContact(webElementList, listFields, firstContact);

    }

    private Contact orderDatabase(int field, Contact[] contacts) {
        //Convert this Contact[] to LinkedList
        LinkedList<Contact> contactLinkedList = new LinkedList<Contact>(Arrays.asList(contacts));

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
                contactLinkedList.sort((c1, c2) -> String.valueOf(c1.getID()).compareTo(String.valueOf(c2.getID())));
                break;
            default:
                //Can't come here.
                fail("Error! You aren't supposed to be here.");
        }
        return contactLinkedList.getFirst();
    }
}