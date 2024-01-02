const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const Homepage = require('../pageobjects/home.page')
const Addemployee = require('../pageobjects/add.employee')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('Admin', 'admin123')
        await Homepage.tocallclickpim()
        await browser.pause(20000)
        await Addemployee. tocalladdemployee ()
        await browser.pause(20000)

         
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

