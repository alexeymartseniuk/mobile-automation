export default class LeftSideMenuScreen {

    get #menuButton() {
        return driver.$("~open menu");
    }

    get #loginTab() {
        return driver.$('//*[@text="Log In"]');
    }

    get #logoutTab() {
        return driver.$('//*[@text="Log Out"]');
    }

    get #scannerTab() {
        return driver.$('//*[@text="QR Code Scanner"]');
    }

    async openSideMenu() {
        await this.#menuButton.click();
    }

    async clickLoginTab() {
        await this.#loginTab.click();
    }

    async clickLogoutTab() {
        await this.#logoutTab.click();
    }

    async clickScannerTab() {
        await this.#scannerTab.click();
    }
}