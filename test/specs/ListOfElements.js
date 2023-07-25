describe('List of WebElements',  async ()=>{

    it('How to grab list of webelements',  async () => {
        await browser.url("https://demowebshop.tricentis.com/")
        await browser.maximizeWindow();
        
       const list =await $$("//*[@class='listbox']/ul/li");
       console.log("List size="+list.length);
       await list[3].$("a").click();
       await browser.pause(3000);
       
       const exc = await $("(//*[@class='answer'])[2]/input");

      console.log("***************=="+ await exc.isSelected())
       await exc.click();
       console.log("***************=="+ await exc.isSelected())
       await browser.pause(3000);

         })


   

})