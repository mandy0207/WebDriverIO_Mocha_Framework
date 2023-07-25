const Page= require('../pageobjects/page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page{
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("[name='login:usernameDecorate:username']");
    }

    get inputPassword () {
        return $("[name='login:passwordDecorate:password']");
    }

    get btnLogin () {
        return $("[name='login:login']");
    }

    /**
     * a method to encapsulate automation code to interact with the page
     * e.g. to login using username and password
     */
    async Login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
   async open () {
         super.open('login');
         await this.Login("mscoding24", "AutomationDemo24");
    }
}

module.exports= new LoginPage();
