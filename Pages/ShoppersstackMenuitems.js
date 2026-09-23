export class ShoppersstackMenuitems{
    constructor(page){
        this.page = page;
        this.menssection=page.locator("//a[@id='men']");
        this.tshirts = page.locator("//a[text()='T-shirts']");
        
    }
    async ShopperstackMenuitems(){  
        await this.menssection.hover();
        await this.tshirts.click();

    
    }
}