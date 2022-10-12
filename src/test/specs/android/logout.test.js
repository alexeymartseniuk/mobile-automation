import {expect} from "chai";
import LeftSideMenuScreen from "../../../screens/android/sharedComponents/leftSideMenuScreen";
import LoginScreen from "../../../screens/android/loginScreen";
import FirstLogoutComponent from "../../../screens/android/sharedComponents/logoutComponent/firstLogoutComponent";
import SecondLogoutComponent from "../../../screens/android/sharedComponents/logoutComponent/secondLogoutComponent";

describe('Logout screen', () => {
    const leftSideMenuScreen = new LeftSideMenuScreen();
    const loginScreen = new LoginScreen();
    const firstLogoutComponent = new FirstLogoutComponent();
    const secondLogoutComponent = new SecondLogoutComponent();

    beforeEach(async () => {
        await leftSideMenuScreen.openSideMenu();
        await leftSideMenuScreen.clickLoginTab();
        await loginScreen.login('bob@example.com', '10203040')
        await leftSideMenuScreen.openSideMenu();
        await leftSideMenuScreen.clickLogoutTab()
    })

    afterEach(async () => {
        await driver.reset();
    })

    it('User makes logout', async () => {
        await expect(await firstLogoutComponent.getTitle()).equal('Log Out');
        await expect(await firstLogoutComponent.getDescription()).contains('Are you sure you sure you want to logout?');
        await firstLogoutComponent.clickLogout()
        await expect(await secondLogoutComponent.getTitle()).equal('You are successfully logged out.');
        await secondLogoutComponent.clickOk();
        await expect(await loginScreen.getTitle()).equal('Login');
    })

    it('User clicks Cancel', async () => {
        await firstLogoutComponent.clickCancel()
    })
})