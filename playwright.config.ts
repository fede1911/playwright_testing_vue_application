import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    testDir: './',
    retries: 0,
    use: {
        trace: 'off',
        ignoreHTTPSErrors: true,
        headless: false,
    },
    webServer: {
        command: 'http-server dist 8080 -a localhost',
        port: 8080,
        timeout: 180 * 1000,

    },
    expect: {
        toMatchSnapshot: { threshold: 1 },
    },
}

export default config
