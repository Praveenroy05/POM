import { Locator, Page } from "playwright/test"


// Locators and methods
export class LoginPage{

    private page: Page
    private username : Locator
    private password : Locator
    private loginButton : Locator
    homePageIdentifier : Locator
    errorMessage : Locator

    constructor(page :Page){
        this.page = page
        this.username = page.getByPlaceholder('email@example.com')
        this.password = page.getByPlaceholder('enter your passsword')
        this.loginButton = page.locator("#login")
        this.homePageIdentifier = page.locator(".fa-sign-out")
        this.errorMessage = page.locator("#toast-container")
    }

    async launchURL(url : string) : Promise<void>{
        await this.page.goto(url)
    }

    async validLogin(username : string, password :string) : Promise<void>{
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async invalidLogin(username : string, incorrectPassword :string) : Promise<void>{
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginButton.click()
    }

}