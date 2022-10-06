export default class SecondLogoutComponent {
    get #title() {
        return driver.$('//*[@resource-id="android:id/alertTitle"]');
    }

    get #buttonOk() {
        return driver.$('//*[@text="OK"]');
    }

    async getTitle() {
        return await this.#title.getText();
    }

    async clickOk() {
        return await this.#buttonOk.click();
    }
}