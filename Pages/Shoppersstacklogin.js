export class Shoppersstacklogin {
constructor(page) {
    this.page = page;
    this.username =  page.locator("//input[@name='First Name']");
    this.lastname= page.locator("//input[@name='Last Name']");
    this.phonenumber=page.locator("//input[@id='Phone Number']");
    this.email=page.locator("//input[@id='Phone Number']");
    this.password=page.locator("//input[@id='Password']");
    this.confirmpassword=page.locator("Confirm Password");
    this.radiobutton=page.getByRole('radio',{name:'Male'});

}
    async Shopperstacklogin(username,lastname,phonenumber,email,password,confirmpassword){
     await this.username.fill(username);
     await this.lastname.fill(lastname);
     await this.phonenumber.fill(phonenumber);
     await this.email.fill(email);
     await this.password.fill(password);
     await this.confirmpassword.fill(confirmpassword);
     await this.radiobutton.check();

    }
  }










