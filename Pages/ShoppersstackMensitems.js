import { WaitHelper } from '../utils/waithelper.js';
export class ShoppersstackMensitems{
    constructor(page){
        this.page = page;
        this.menssection=page.locator("//a[@id='men']");
        this.tshirts = page.locator("//a[text()='T-shirts']");
        this.shirts = page.locator("//a[text()='Shirts']").first();
        this.sweatshirts = page.locator("//a[text()='Sweatshirt']");
        this.sweaters = page.locator("//a[text()='Sweaters']").first();
      /*  this.jackets = page.locator("//a[text()='Jackets']");
        this.blazersandcoats = page.locator("//a[text()='Blazers and Coats']");*/
    }
    async shopperstackMensItems(){  
        const items = [
            this.tshirts,
            this.shirts,
            this.sweatshirts,
            this.sweaters,
           /* this.jackets,
            this.blazersandcoats*/
        ];

        for (const item of items) {
            await this.menssection.hover();
            await this.page.waitForTimeout(500);
            await item.click();
            await this.page.waitForLoadState('networkidle');
            await WaitHelper.wait(this.page, 2000);
            await this.page.screenshot({
                path: 'screenshot-' + (await item.textContent()).trim() + '.png',
                fullPage: true
            }); 
            console.log('Loaded');
            await this.page.goBack();
            await this.page.waitForLoadState('networkidle');
        }
    }
}
    