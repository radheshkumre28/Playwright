// @ts-check
import { test, expect } from '@playwright/test';

test.describe('hownow',()=>{

  test('login',async({page})=>{
      await page.goto('https://qateam.hownow.app/users/sign_in')

      await page.locator('#user_email').fill('akhil.vutukuri+readonly@gethownow.com')

      await page.locator('#user_password').fill('Hownow12345')

      await page.locator('[type="submit"]').click()

      await page.locator('//*[@id="__next"]/main/aside/aside/nav/div[1]/div[2]/a[2]').click()

      await page.locator('//*[@id="__next"]/main/main/section/div/div/div[1]/div[1]/div[2]/button').click()

      await page.locator('//p[normalize-space()="Source:"]').click()

      const filterOptions = await page.locator('//div[@role="listbox"]')

      console.log(filterOptions)

      await page.pause()
  })

})