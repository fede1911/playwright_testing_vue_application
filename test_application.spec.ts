import { test } from '@playwright/test'
import { chromium } from 'playwright'

test.describe('test', () => {
    let browserInstance = async () => {
        let webBrowser = await chromium.launch({headless: false})
        let browserContext = await webBrowser.newContext()
        let page = await browserContext.newPage()
        return {"webBrowser":webBrowser,"browserContext":browserContext,"page":page}
    }

    test('test application', async () => {

            const browser = await browserInstance()
            const page = browser.page
            await page.goto('http://localhost:8080')
            await page.screenshot({ path: 'screenshot.png' })
        })

})