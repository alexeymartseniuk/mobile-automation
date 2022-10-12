import {expect} from "chai";
import LeftSideMenuScreen from "../../../screens/android/sharedComponents/leftSideMenuScreen";
import LoginScreen from "../../../screens/android/loginScreen";
import ProductsScreen from "../../../screens/android/productsScreen";

describe('Android. Login screen', () => {
    const leftSideMenuScreen = new LeftSideMenuScreen();
    const loginScreen = new LoginScreen();
    const productsScreen = new ProductsScreen();

    beforeEach(async () => {
        await leftSideMenuScreen.openSideMenu();
        await leftSideMenuScreen.clickLoginTab();
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
        await expect(await productsScreen.getTitle()).equal('Products');
    })
})