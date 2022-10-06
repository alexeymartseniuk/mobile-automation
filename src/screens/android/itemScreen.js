export default class ItemScreen {
    get #itemName() {
        return driver.$('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    async getItemName() {
        return await this.#itemName.getText();
    }
}
