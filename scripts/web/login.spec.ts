import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'


test.describe('Login onto web', async()=>{


    test('Visit web', async()=>{
        const browser : Browser  = await chromium.launch({headless:false, channel:'chrome'});
        const page : Page = await browser.newPage();

        await page.goto('https://www.automationexercise.com/login');

        
        const emailID : Locator = await page.locator('[data-qa="login-email"]');
        const password : Locator = await page.locator('[data-qa="login-password"]');
        const submitButton : Locator = await page.locator('[data-qa="login-button"]')

        await emailID.fill('radheshkumre2899@gmail.com');
        await password.fill('Kumre');
        await submitButton.click();
    })

})