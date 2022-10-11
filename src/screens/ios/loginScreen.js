export default class LoginScreen {
    get #title() {
        // -ios class chain
        return driver.$('-ios class chain:**/XCUIElementTypeStaticText[`label == "Login"`]');
    }

    get #usernameInput() {
        return driver.$('~Username input field')
    }

    get #passwordInput() {
        return driver.$('~Password input field')
    }

    get #loginButton() {
        return driver.$('~Login button')
    }

    get #errorMessage() {
        // xpath
        return driver.$('//XCUIElementTypeStaticText[@name="Provided credentials do not match any user in this service."]')
    }

    async getTitle() {
        return await this.#title.getText();
    }

    async login(username, password) {
        await this.#usernameInput.setValue(username);
        await this.#passwordInput.setValue(password);
        await this.#loginButton.click();
    }

    async getErrorText() {
        return await this.#errorMessage.getText();
    }
}