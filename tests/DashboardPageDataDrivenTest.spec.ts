import {test, expect, Page} from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'
import { DashboardPage } from '../pageObjects/DashboardPage'

import datas from '../TestData/multiple.json'
console.log(datas[0].url);



let loginPage
let dashboardPage

for(let data of datas){
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})
test(`Validate Product Added to Cart for ${data.productName}`, {tag : '@api'}, async()=>{
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText("Product Added To Cart")
})
}