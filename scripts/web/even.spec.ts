import {test, expect} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'


test.describe('Even Fibonaaci Calculator', async () => {

    test('Calculate 100th number', async () => {


        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://qa.hiring.evenhealthcare.com/');
        await page.getByLabel('Email or phone').click();
        await page.getByLabel('Email or phone').fill('testradhesh@gmail.com');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByLabel('Enter your password').fill('test@radhesh#2024');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByText('⇨❗').click();
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('100');
        await page.getByRole('button', { name: 'Calculate!' }).click();
        await expect(page.getByRole('alert')).toContainText('The 100th fibonacci number is 354224848179261915075.');

        await context.close();
        await browser.close();
    })

});