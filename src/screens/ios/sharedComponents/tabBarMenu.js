export default class TabBarMenu {
    get #menuButton() {
        return driver.$("~tab bar option menu");
    }

    get #loginTab() {
        return driver.$('~menu item log in');
    }

    async openMenu() {
        await this.#menuButton.click();
    }

    async clickLoginTab() {
        await this.#loginTab.click();
    }

}