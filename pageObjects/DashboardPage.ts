import { Locator, Page } from "playwright";

export class DashboardPage{

    private page : Page
    private products : Locator
    addToCartSuccessMessage : Locator

    constructor(page : Page) {
        this.page = page
        this.products = page.locator("div.card-body")
        this.addToCartSuccessMessage = page.locator("div#toast-container")
    }

    async searchProductAndAddToCart(productName){
        await this.products.locator("b").first().waitFor()
        const productCount = await this.products.count()
        for(let i =0; i<productCount; i++){ 
            const productText:string|null = await this.products.locator("b").nth(i).textContent()
            if(productText === productName){
                await this.products.nth(i).getByRole('button', {name: " Add To Cart"}).click()
                break
            }
    
        }
    }


}