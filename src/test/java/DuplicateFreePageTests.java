import Helper.Helper;
import Model.Contact;
import Model.ContactConstants;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.LinkedList;

public class DuplicateFreePageTests {
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
        options.addArguments("--window-size=1920,1080");
        driver = new ChromeDriver(options);
    }

    @After
    public void tearDown() {
        //Destroy the Chrome Process after the test is done
        driver.close();
    }
}
