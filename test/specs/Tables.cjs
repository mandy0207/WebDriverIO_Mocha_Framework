const expectchai = require('chai').expect
describe('Handling Tables', async () => {

    it('How to handle Table', async () => {


 
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await browser.maximizeWindow();
       
        await $("span.sort-icon.sort-descending").click();
        await browser.pause(3000);

     const veggiesLocator=  await $$(".table.table-bordered tbody tr td:nth-child(1)");
     const veggiesName=  veggiesLocator.map(async veggie=> await veggie.getText());
     console.log(veggiesName);
    sortedVeggies= veggiesName.sort();

    expectchai(veggiesName).to.eql(sortedVeggies)




    })
})