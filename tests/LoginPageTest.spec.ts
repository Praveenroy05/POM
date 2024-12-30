import {test, expect, Page} from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'



test("Check the login using valid credentials", async ({page}: {page:Page})=>{
    const loginPage = new LoginPage(page)


})