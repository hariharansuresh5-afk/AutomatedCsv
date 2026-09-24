import { WaitHelper } from '../utils/waithelper.js';
export class ShoppersstackMensitems{
    constructor(page){
        this.page = page;
        this.menssection=page.locator("//a[@id='men']");
        this.tshirts = page.locator("//a[text()='T-shirts']");
        this.shirts = page.locator("//a[text()='Shirts']").first();
        this.sweatshirts = page.locator("//a[text()='Sweatshirt']");
        this.sweaters = page.locator("//a[text()='Sweaters']").first();
        this.jackets = page.locator("//a[text()='Jackets']");
        this.blazersandcoats = page.locator("//a[text()='Kurtas & kurta Sets']");
        this.kurtasandsuits = page.locator("//a[text()='Sherwanis']");
        this.EthnicWear = page.locator("//a[text()='Nehru Jakets']");
        this.Sarees = page.locator("//a[text()='Dhotis']");
        this.Jeans =  page.locator("//a[text()='Jeans']").first();
     this.trouser = page.locator("//a[text()='Trousers']");
        this.Shorts = page.locator("//a[text()='Shorts']");
        this.TracksPantsAndJoggers = page.locator("//a[text()='Tracks Pants & Joggers']");
    }
    async shopperstackMensItems(){  
        const items = [
            this.tshirts,
            this.shirts,
            this.sweatshirts,
            this.sweaters,
            this.jackets,
            this.blazersandcoats,
            this.kurtasandsuits,
            this.EthnicWear,
            this.Sarees,        
            this.Jeans,
            this.trouser,
            this.Shorts,
            this.TracksPantsAndJoggers
        ];


        
        for (const item of items) {
            await this.menssection.hover();
            await item.click();
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.screenshot({
                path: 'screenshot-' + (await item.textContent()).trim() + '.png',
                fullPage: true
            }); 
            console.log('Loaded');
            await this.page.goBack();
          await this.page.waitForLoadState('domcontentloaded');
        }
    }
}
    