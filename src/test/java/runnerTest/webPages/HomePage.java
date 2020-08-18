package runnerTest.webPages;

import org.openqa.selenium.By;
import utils.ConfigReader;

public class HomePage extends ElementUtil {


    LoginPage loginPage = new LoginPage();


    By header = By.xpath("//i18n-string[contains(text(),'Setup')]");
    By accountName = By.cssSelector("span.account-name ");

    By mainContactsLink = By.id("nav-primary-contacts-branch");
    By childContactsLink = By.id("nav-secondary-contacts");

    public String getHomePageTitle() {
        return getPageTitle();
    }

    public String getHomePageHeader() {
        return getTextFromElement(header);
    }

    public String getLoggedInUserAccount() {
        return getTextFromElement(accountName);
    }

    public void clickOnContacts() {
        clickOn(mainContactsLink);
        clickOn(childContactsLink);
    }

    public void handleLoginPage(){
        loginPage.enterUsername(ConfigReader.getProperty("username"));
        loginPage.enterPassword(ConfigReader.getProperty("password"));
        loginPage.clickLogin();
    }

}
