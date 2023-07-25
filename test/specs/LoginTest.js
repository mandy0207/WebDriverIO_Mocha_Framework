const loginPage= require('../pageobjects/login.page')
const homePage= require('../pageobjects/homepage')
const personPage=  require('../pageobjects/personpage')

const fs = require('fs');
let credentials =JSON.parse(fs.readFileSync("test/TestData/testdata.json"))

describe('End to End Test', async () => {

    credentials.forEach(({title, jobTitle, organization}) => {
        
    
    it('Perform End to End Testing', async () => {

        await loginPage.open();
        await homePage.AddPerson();
        await personPage.FillPersonForm(title, jobTitle, organization);
      
        
       await personPage.ValidatePerson();
            

    })
});
}) 