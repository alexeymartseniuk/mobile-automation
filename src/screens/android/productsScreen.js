export default class ProductsScreen {
    get #title() {
        return driver.$('//*[@text="Products"]');
    }

    get #item() {
        return driver.$$('//*[@content-desc="store item text"]')
    }

    async getTitle() {
        return await this.#title.getText();
    }

    async getItemName(index) {
        return await this.#item[index].getText();
    }

    async selectItem(index) {
        await this.#item[index].click();
    }
}