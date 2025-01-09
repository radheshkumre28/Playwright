import {test,expect,Browser, BrowserContext, Page} from '@playwright/test'
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
});