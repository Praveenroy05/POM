import {test, expect, Page} from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'
import { DashboardPage } from '../pageObjects/DashboardPage'

import { ExcelUtils } from '../Utils/ExcelUtils'

const filePath = "C:\\Users\\prave\\OneDrive\\Documents\\Praveen-PW\\PWTSPOM\\TestData\\excel.xlsx"

let datas
try{
    datas = ExcelUtils.getDataFromExcel(filePath, "Login")
}
catch(error){
    console.log("File Not Found")
}




let loginPage
let dashboardPage

for(let data of datas){
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})
test.skip(`Validate Product Added to Cart for ${data.productName}`, {tag : '@regression'}, async()=>{
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText("Product Added To Cart")
})
}