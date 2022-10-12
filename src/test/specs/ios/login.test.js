import {expect} from "chai";
import TabBarMenu from "../../../screens/ios/sharedComponents/tabBarMenu";
import LoginScreen from "../../../screens/ios/loginScreen";

describe('iOS. Login screen', () => {
    const tabBarMenu = new TabBarMenu();
    const loginScreen = new LoginScreen();

    beforeEach(async () => {
        await tabBarMenu.openMenu()
        await tabBarMenu.clickLoginTab()
    })

    afterEach(async () => {
        await driver.reset();
    })

    it('Error message if user passes authorization with invalid credentials', async () => {
        await loginScreen.login('invalid name', 'invalid password')
        await expect(await loginScreen.getErrorText()).contains('Provided credentials do not match any user in this service')
    })

    it('User passes authorization with valid credentials', async () => {
        await loginScreen.login('bob@example.com', '10203040')
    })
})