import {test,expect,Browser, BrowserContext, Page, Locator} from '@playwright/test'
import { chromium, firefox, webkit } from '@playwright/test'
import { beforeEach } from 'node:test';

test.describe('create context with chrome', async()=>{
    //radheshkumre2899@gmail.com : Kumre
    
    let pageOne : Page;
    let browserOne : Browser;
    let browserContextOne : BrowserContext;


  

    test.beforeAll(async()=>{

        //create context One
        browserOne  = await chromium.launch();
        browserContextOne = await browserOne.newContext();
        pageOne  = await browserContextOne.newPage();

    })

    test.afterAll(async()=>{
       await browserContextOne.close();
       await browserOne.close();
    })

    test('Context one launch with chrome', async()=>{
        await pageOne.goto('https://www.automationexercise.com/login')
    })

    test('Chrom Login', async()=>{

        const emailID : Locator = await pageOne.locator('[data-qa="login-email"]');
        const password : Locator = await pageOne.locator('[data-qa="login-password"]');
        const submitButton : Locator = await pageOne.locator('[data-qa="login-button"]')

        await emailID.fill('radheshkumre2899@gmail.com');
        await password.fill('Kumre');
        await submitButton.click();

        await expect(pageOne.locator('b')).toHaveText('Radhesh Kumre')

        // await pageOne.pause()

    })




});


test.describe('Context run with webkit',async()=>{
    //testradhesh@gmail.com : test

    let pageTwo : Page;
    let browserTwo : Browser;
    let browserContextTwo : BrowserContext;
    
    test.beforeAll(async()=>{
        
        //create context Two
        browserTwo = await webkit.launch();
        browserContextTwo = await browserTwo.newContext();
        pageTwo = await browserContextTwo.newPage();
    })

    test.afterAll(async()=>{
        await browserContextTwo.close();
        await browserTwo.close();
    })

    test('Context two launch with webkit',async()=>{
        await pageTwo.goto('https://www.automationexercise.com/login')
    })

    test('Webkit login', async()=>{
        const emailID : Locator = await pageTwo.locator('[data-qa="login-email"]');
        const password : Locator = await pageTwo.locator('[data-qa="login-password"]');
        const submitButton : Locator = await pageTwo.locator('[data-qa="login-button"]')

        await emailID.fill('testradhesh@gmail.com');
        await password.fill('test');
        await submitButton.click();

        await expect(pageTwo.locator('b')).toHaveText('Radhesh Test')

        // await pageTwo.pause()


    })
});