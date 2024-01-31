const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const Homepage = require('../pageobjects/home.page')
const Addemployee = require('../pageobjects/add.employee')
const SecurePage = require('../pageobjects/secure.page')
const Toaster = require('../pageobjects/toaster');
const Generic = require('../pageobjects/generic');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('Admin', 'admin123')
        await Homepage.tocallclickpim()
        await browser.pause(10000)
        await Addemployee.tocalladdemployee ()
        await browser.pause(10000)
        await Addemployee.tocallemployeefname()
        await browser.pause(4000)
        await Addemployee.tocallemployeelname()
        await browser.pause(4000)
        await Addemployee.tocallbtnsubmit()
        // await browser.pause(5000)

        await Generic.genericWaitUntil(await Toaster.toasterMessage)
        await expect(await Toaster.toasterMessage).toHaveTextContaining('Success')
        await browser.pause(5000)
        
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

