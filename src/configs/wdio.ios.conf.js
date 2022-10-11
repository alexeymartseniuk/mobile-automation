const projectPath = require('path');
const iosAppPath = projectPath.join(process.cwd(), 'app/ios/MyRNDemoApp.app')

exports.config = {
    port: 4723,
    specs: [
        'src/test/specs/ios/**.test.js'
    ],
    maxInstances: 1,
    capabilities: [{
        "platformName": "IOS",
        "appium:deviceName": "iPhone 13",
        "appium:platformVersion": "15.5",
        "appium:automationName": "XCUItest",
        "appium:app": iosAppPath,
    }],
    logLevel: 'error',
    waitforTimeout: 10000,
    connectionRetryTimeout: 10000,
    connectionRetryCount: 1,
    services: [
        [
            "appium",
            {
                args: {
                    address: "localhost",
                    port: 4723,
                },
            },
        ],
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
