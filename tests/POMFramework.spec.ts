// POM framework -

// Page Object Model is a design pattern used in software testing to represent a web page as an object
// It is a way to organize and manage the interactions with a web page by creating a class that
// encapsulates the page's functionality and behavior.

// The main idea behind POM is to separate the test logic from the page's implementation details,
// making it easier to maintain and update the test code.




// Page layer -  WIll create a package (PageObject or Pages)
// LoginPage, DashboardPage, CartPage, OrdersPage
// LoginPage - Locators and methods will be written inside the LoginPage.ts class
// Locators - username, password, loginBtn
// Methods - launchURL(), fillUsername(), fillPassword(), clickOnLoginBtn()


// Test Layer
// Calling the test steps that we have defined it inside the page layer
// LoginPageTest.spec.ts - 
// Calling the specific methods for the test steps
// LoginPageTest.spec.ts - launchURL(), fillUsername(), fillPassword(), clickOnLoginBtn()
// assertion will always go inside test layer.


// Test data - JSON/Excel/CSV
// Utils - API methods, screenshot, scrolling, reading the data from json/excel
// Report - Allure/HTML



// tagging the test case
// script -  npx playwright test