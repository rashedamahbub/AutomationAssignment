const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Addemployee extends Page {
    /**
     * define selectors using getter methods
     */
    

    get addemployee () {
        return   $("button[class='oxd-button oxd-button--medium oxd-button--secondary']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   

    async tocalladdemployee () {
        await this.addemployee.click();
    }
    get employeefname() {
        return $("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]");
    }
    async tocallemployeefname () {
        await this.employeefname.setValue("firstname");
    }
    get employeelname () {
        return $("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/input[1]");
    }
    async tocallemployeelname () {
        await this.employeelname.setValue("lastname");
    }

    get btnSave () {
        return $("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[2]/button[2]");
    }
    async tocallbtnsubmit() {
        await this.btnSave.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('pim/addEmployee');
    }
    
}

module.exports = new Addemployee();