const expectchai = require('chai').expect
describe('Static Dropdown', async () => {

    it('Use of Static Dropdwon', async () => {


 
        await browser.url("https://rahulshettyacademy.com/dropdownsPractise/")
        await browser.maximizeWindow();

      const dropdown = await  $("//*[@name='ctl00$mainContent$DropDownListCurrency']");
      await dropdown.selectByAttribute('value', 'AED');
      await browser.pause(2000);

      await dropdown.selectByVisibleText('USD');
      await browser.pause(2000);

      await dropdown.selectByIndex(1);
      await browser.pause(2000);

      console.log(await dropdown.getValue())

       /**
        * Use of chai assertions
        */

      expectchai(await dropdown.getValue()).to.equal("INR");


       




    })
})