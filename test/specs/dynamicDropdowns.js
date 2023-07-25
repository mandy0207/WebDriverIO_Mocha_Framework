
describe('Dynamic Dropdown', async () => {

    it('Use of Dynamic Dropdwon', async () => {
        await browser.url("https://ca.hotels.com/")
        await browser.maximizeWindow();
        await browser.pause(2000);
        await $("//*[@aria-label='Going to']").click();
        await $("//*[@placeholder='Going to']").setValue("qu");
        await browser.pause(2000);
        const list=await $$("//*[@class='uitk-action-list-item-content']/button");

        for (const element of list) {
          let text =await element.getAttribute("aria-label");

          if(text==="Qualicum Beach British Columbia, Canada"){
           await element.click();
           break;
          }
      }
          await browser.pause(3000);

    })
})