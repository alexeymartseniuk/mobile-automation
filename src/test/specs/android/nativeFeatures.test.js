import LeftSideMenuScreen from "../../../screens/android/sharedComponents/leftSideMenuScreen";

describe('Native android features', () => {
    const leftSideMenuScreen = new LeftSideMenuScreen();

    it('Open tab `Geolocation` with enabled permissions', async () => {
        await leftSideMenuScreen.openSideMenu();
        await leftSideMenuScreen.clickScannerTab();
    })
})