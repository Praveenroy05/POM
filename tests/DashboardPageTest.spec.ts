import {test, expect, Page} from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'
import { DashboardPage } from '../pageObjects/DashboardPage'

const url : string = "https://rahulshettyacademy.com/client"
const username: string = "test7lYM@gmail.com"
const password: string = "Test@123"
const productName : string = "IPHONE 13 PRO"

let loginPage
let dashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})
test('Validate Product Added to Cart', {tag : ['@smoke', '@regression']}, async()=>{
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText("Product Added To Cart")
})