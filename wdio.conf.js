const projectPath = require('path');
const androidAppPath = projectPath.join(process.cwd(), 'app/android/Android-MyDemoAppRN.1.3.0.build-244.apk')

exports.config = {
    port: 4723,
    specs: [
        'src/test/**/**.test.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        "appium:deviceName": "Pixel XL API 31",
        "appium:platformVersion": "12",
        "appium:automationName": "UIAutomator2",
        "appium:app": androidAppPath,
        "appium:autoGrantPermissions": true // allows all permissions
    }],
    logLevel: 'error',
    waitforTimeout: 10000,
    connectionRetryTimeout: 10000,
    connectionRetryCount: 1,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
