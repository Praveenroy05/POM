import { Page } from "playwright/test"


// Locators and methods
export class LoginPage{

    private page: Page
    private username : any
    private password : any
    private loginButton : any

    constructor(page : Page){
        this.page = page
        this.username = page.getByPlaceholder('email@example.com')
        this.password = page.getByPlaceholder('enter your passsword')
        this.loginButton = page.locator("#login")
    }

    async launchURL(){

    }

}


