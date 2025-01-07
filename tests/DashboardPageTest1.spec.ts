import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage1';
import { DashboardPage } from '../pageObjects/DashboardPage1';

const testData = {
  url: 'https://rahulshettyacademy.com/client',
  username: 'test7lYM@gmail.com',
  password: 'Test@123',
  productName: 'ADIDAS ORIGINAL'
};

test.describe('E-Commerce Application Tests', () => {
  test.skip('Validate Add to Cart', {tag : ['@smoke', '@regression']}, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateTo(testData.url);
    await loginPage.login(testData.username, testData.password);

    expect(await loginPage.isHomePageVisible()).toBeVisible();

    await dashboardPage.searchProductAndAddToCart(testData.productName);
    expect(await dashboardPage.getAddToCartSuccessMessage()).toContain('Product Added To Cart');
  });
});



