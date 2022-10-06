export default class LoginScreen {
        get #title() {
            return driver.$('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
        }

        get #usernameInput() {
            return driver.$('//*[@content-desc="Username input field"]')
        }

        get #passwordInput() {
            return driver.$('//*[@content-desc="Password input field"]')
        }

        get #loginButton() {
            return driver.$('//*[@content-desc="Login button"]')
        }

        get #errorMessage() {
            return driver.$('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')
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