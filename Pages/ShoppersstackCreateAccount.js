export class ShoppersstackCreateAccount {
constructor(page) {
    this.page = page;
    this.username =  page.locator("//input[@name='First Name']");
    this.lastname= page.locator("//input[@name='Last Name']");
    this.phonenumber=page.locator("//input[@id='Phone Number']");
    this.email=page.locator("//input[@name='Email Address']");
    this.password=page.locator("//input[@name='password']");
    this.confirmpassword=page.locator("//input[@name = 'Confirm Password']");
    this.radiobutton= this.radiobutton = page.getByRole('radio', { name: 'Male', exact: true });

}
    async ShopperstackCreateAccount(username,lastname,phonenumber,email,password,confirmpassword){
     await this.username.fill(username);
     await this.lastname.fill(lastname);
     await this.phonenumber.fill(phonenumber);
     await this.email.fill(email);
     await this.password.fill(password);
     await this.confirmpassword.fill(confirmpassword);
     await this.radiobutton.check();
         
    }
  }










