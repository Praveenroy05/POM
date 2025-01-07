import {test, expect, Page} from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'
import { DashboardPage } from '../pageObjects/DashboardPage'

import data from '../TestData/product.json'


let loginPage
let dashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
})
test('Validate Product Added to Cart', {tag : '@smoke'}, async()=>{
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText("Product Added To Cart")
})