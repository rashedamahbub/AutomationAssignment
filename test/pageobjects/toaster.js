const { $ } = require('@wdio/globals')
const Page = require('./page');

class Toaster {
    get toasterMessage() {
        //return $('.oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text');
        return $('p=Success')
    }
}

module.exports = new Toaster();

