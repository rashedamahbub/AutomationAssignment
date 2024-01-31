const { expect } = require('@wdio/globals')
const toaster = require('../pageobjects/toaster');

describe('Your Test Suite', () => {
    it('should display toaster message with the expected text', () => {
        // Your test steps here
        browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee'); // Navigate to your test page

        // Assume an action that triggers the toaster message
        // (e.g., filling out a form, clicking a button)
        // ...

        // Assertion using toHaveTextContaining
        expect(toaster.toasterMessage).toContain('Success')
    });
});
