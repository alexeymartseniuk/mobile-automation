export default class FirstLogoutComponent {
    get #title() {
        return driver.$('//*[@resource-id="android:id/alertTitle"]');
    }

    get #description() {
        return driver.$('//*[@resource-id="android:id/message"]');
    }

    get #buttonCancel() {
        return driver.$('//*[@text="CANCEL"]');
    }

    get #buttonLogout() {
        return driver.$('//*[@text="LOG OUT"]');
    }

    async getTitle() {
        return await this.#title.getText();
    }

    async getDescription() {
        return await this.#description.getText();
    }

    async clickCancel() {
        await this.#buttonCancel.click();
    }

    async clickLogout() {
        await this.#buttonLogout.click();
    }
}

