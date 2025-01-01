import {test, expect, Page} from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'

const url : string = "https://rahulshettyacademy.com/client"
const username: string = "test7lYM@gmail.com"
const password: string = "Test@123"
const incorrectPassword : string = "Test@12"


let loginPage :LoginPage
test.beforeEach(async ({page}: {page:Page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})

test("Check the login using valid credentials", async ()=>{
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Check the login using invalid credentials", async ()=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})