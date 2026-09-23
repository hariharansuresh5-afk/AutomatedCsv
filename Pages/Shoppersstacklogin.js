export class ShoppersstackLogin {
constructor(page){
    this.page = page;
    this.email = page.locator("//input[@id='Email']");
    this.password = page.locator("//input[@id='Password']");
    this.loginbutton  = page.locator("//span[text()='Login']");   
}

async ShopperstackLogin(email, password){
    await this.email.fill(email);
    await this.page.screenshot({ path: 'email.png' });
    await this.password.fill(password);
    await this.page.screenshot({ path: 'password.png' });
    await this.loginbutton.click();
    await this.page.screenshot({ path: 'loginbutton.png' });
}
}