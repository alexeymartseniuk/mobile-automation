require('dotenv').config();

exports.config = {
    maxInstances: 1,
    specs: [
        'src/test/specs/android/**.test.js'
    ],
    capabilities: [{
        project: "Mobile automation",
        build: "demo",
        name: "Login tests - Android 12 - Google Pixel 6",
        device: "Google Pixel 6",
        os_version: "12.0",
        app: "bs://16846818bc64b18d3f24535cce7a6902afecb86c",
        "browserstack.local": false,
        "browserstack.deviceLogs": true
    }
    ],
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,
    services: ["browserstack"],
    logLevel: 'error',
    waitforTimeout: 10000,
    connectionRetryTimeout: 40000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 20000
    },
}
