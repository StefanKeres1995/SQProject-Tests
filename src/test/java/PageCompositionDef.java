import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static junit.framework.TestCase.assertEquals;



public class PageCompositionDef {

    @Before
    public void setUp() {
        /*System.setProperty("webdriver.chrome.driver",
                "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path",
                "drivers\\phantomjs.exe");*/
        //driver = new ChromeDriver();
// driver = new PhantomJSDriver();
        
        driver = new HtmlUnitDriver();
    }
    @After
    public void tearDown() {
        driver.close();
    }


    private WebDriver driver;
    @Given("^I access the landing page of COS$")
    public void iAccessTheLandingPageOfCOS() throws Throwable {
        driver.get("http://35.234.147.223/");
        assertEquals ("Welcome to nginx!",driver.getTitle());
    }
    @Then("^the title of the page should be \"([^\"]*)\"$")
    public void theTitleOfThePageShouldBe(String title) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.titleContains(title));
    }
    @And("^I can see the text \"([^\"]*)\"$")
    public void iCanSeeTheText(String text) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(
                driver.findElement(By.tagName("body")),text));
    }

}
