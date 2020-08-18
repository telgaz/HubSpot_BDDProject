package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil{

    By emailId=By.id("username");
    By pwd=By.id("password");
    By loginButton=By.id("loginBtn");
    By signUpLink=By.linkText("Sign up");
    By loginErrorText=By.cssSelector("div.private-alert__inner");

    public String getLoginPageTitle(){

       return getPageTitle();
    }
    public void enterUsername(String username){
    sendValue(emailId,username);
    }
    public void enterPassword(String password){

        sendValue(pwd,password);
    }
    public void clickLogin(){
        clickOn(loginButton);
    }
    public String getErrorMessage(){
        return getTextFromElement(loginErrorText);
    }



}
