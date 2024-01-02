const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Homepage extends Page {
    /**
     * define selectors using getter methods
     */
    get clickpim () {
        return $("//span[normalize-space()='PIM']");
    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async tocallclickpim () {
        await this.clickpim.click();
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('pim/viewEmployeeList');
       
    }
    
}

module.exports = new Homepage();