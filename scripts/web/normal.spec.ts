import { test,expect,Page,Browser,BrowserContext,Locator,  } from "@playwright/test";
import { chromium,firefox,webkit } from "@playwright/test";

test.describe('Open chrom in normal mode', async()=>{

    let page : Page;
    let browser: BrowserContext;
    

    test.beforeAll(async()=>{
        browser =  await chromium.launchPersistentContext('',{headless : false});
        const pages = browser.pages()
        page = pages[0];
    })

    test.afterAll(async()=>{
        // await browseContext.close();
        await page.pause()
    })

    test('visit google site', async()=>{
        await page.goto('https://www.google.com')
    })

})
