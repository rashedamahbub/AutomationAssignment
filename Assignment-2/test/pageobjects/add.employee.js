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

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('pim/addEmployee');
    }
    
}

module.exports = new Addemployee();