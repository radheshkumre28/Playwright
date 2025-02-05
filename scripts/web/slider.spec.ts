import {test,expect,Browser, BrowserContext, Page, Locator} from '@playwright/test'
import { chromium,webkit } from '@playwright/test'

type BoundingBox = {x : number, y : number, width : number, height : number}

test.describe('Perform Slider bar', ()=>{
    let page : Page;
    let browser : Browser;
    let browserContext : BrowserContext

    test.beforeAll(async()=>{
        browser = await chromium.launch();
        browserContext = await browser.newContext();
        page = await browserContext.newPage();
    })

    test.afterAll(async()=>{
        await page.pause();
    })

    test('Visit slider page', async()=>{
        await page.goto('https://practice-automation.com/slider')
    });

    test('slide using multiple clicks with the given slider bar', async()=>{

        const slider : Locator = page.locator('#slideMe')
        await expect(slider).toBeVisible()

        //get silder's bounding box i.e its position and size
        const sliderBox  = await slider.boundingBox()


        const { x , y , width, height } =  sliderBox as BoundingBox;

        const clickPositions = [0.1, 0.3, 0.6, 0.9];

        for (const position of clickPositions){
            const clickX = x + position * width
            const clickY = y + height / 2

            await page.mouse.click(clickX,clickY);
            await page.waitForTimeout(500);
            
        }


    })
})