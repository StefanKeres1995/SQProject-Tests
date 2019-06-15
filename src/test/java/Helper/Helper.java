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
import java.util.List;

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
            return gson.fromJson(jsonStr, Contact[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        fail("Error getting the List of Contacts");
        return null;
    }

    /*
     * Function that will verify the integrity of a contact. It will assert each position.
     * @param id - the ID of the contact. Don't forget, ID's start at 0.
     * @param webElementList - List of WebElements, which should be retrieved with a driver.findElements()...
     * @param listFields - List of integers, which are represented by the ContactConstants. These should be ordered based on the previous one.
     * @param contacts - List of contacts, gotten from getHTML() function
     */
    public void checkIntegrityOfContact(int id, List<WebElement> webElementList, List<Integer> listFields, Contact[] contacts){

        for(int field: listFields ){
            int position = listFields.indexOf(field);
            switch (field){

                //Birthday
                case ContactConstants.BIRTHDAY:
                    if(contacts[id].getBirthday() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getBirthday(), webElementList.get(position).getText());
                    }
                    break;

                //City
                case ContactConstants.CITY:
                    if(contacts[id].getCity() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getCity(), webElementList.get(position).getText());
                    }
                    break;

                //Company
                case ContactConstants.COMPANY:
                    if(contacts[id].getCompany() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getCompany(), webElementList.get(position).getText());
                    }
                    break;

                //Email
                case ContactConstants.EMAIL:
                    if(contacts[id].getEmail() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getEmail(), webElementList.get(position).getText());
                    }
                    break;

                //Given Name
                case ContactConstants.GIVEN_NAME:
                    if(contacts[id].getGivenName() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getGivenName(), webElementList.get(position).getText());
                    }
                    break;

                //Guid
                case ContactConstants.GUID:
                    if(contacts[id].getGuid() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getGuid(), webElementList.get(position).getText());
                    }
                    break;

                //Occupation
                case ContactConstants.OCCUPATION:
                    if(contacts[id].getOccupation() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getOccupation(), webElementList.get(position).getText());
                    }
                    break;

                //Phone
                case ContactConstants.PHONE:
                    if(contacts[id].getPhone() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getPhone().toString(), webElementList.get(position).getText());
                    }
                    break;

                //Phone Url
                case ContactConstants.PHOTO_URL:
                    //Recheck!
                    if(contacts[id].getPhotoUrl() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getPhotoUrl().toString(), webElementList.get(position).getText());
                    }
                    break;

                //Source
                case ContactConstants.SOURCE:
                    if(contacts[id].getSource() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getSource(), webElementList.get(position).getText());
                    }
                    break;

                //Street Address
                case ContactConstants.STREET_ADDRESS:
                    if(contacts[id].getStreetAddress() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else{
                        assertEquals(contacts[id].getStreetAddress(), webElementList.get(position).getText());
                    }
                    break;

                //Surname
                case ContactConstants.SURNAME:
                    if(contacts[id].getSurname() == null){
                        assertEquals(HelperConstants.NULL_STRING, webElementList.get(position).getText());
                    }else {
                        assertEquals(contacts[id].getSurname(), webElementList.get(position).getText());
                    }
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
}
