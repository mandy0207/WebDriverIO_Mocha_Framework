describe('My login',  async ()=>{

    it('should login with valid credentials -Smoke',  async () => {
        await browser.url("https://demowebshop.tricentis.com/")
        await browser.maximizeWindow();
        console.log( await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Demo");
      
     /**
      *  webdriverio use css selector and xpath
      *   locator is wtiten like this->  $(locator)
      */
      await $(".header-links ul li:nth-child(2) a").click();
      await $("#Email").setValue("mstaak24@gmail.com");
      await $("#Password").setValue("Gurkiran24$");
      await $("//*[@value='Log in']").click();
      await $(".listbox .list li:nth-child(4)").click();
      

    let pageText= await $(".page-title").getText();
    console.log("PageText = "+pageText);

     expect(pageText).toEqual("Apparel & Shoes");
     await $("(//*[@class='product-title']/a)[3]").click();

     await $("//*[@data-val-number='The field Qty must be a number.']").setValue("2");
     
     await $("(//*[@value='Add to cart'])[1]").click();

     let numb=await $("(//*[@class='ico-cart']//span)[2]").getText();
     console.log("********************=="+numb);

     browser.waitUntil(async()=> numb==="(2)",{
        timeout:5000,
        timeoutMsg: "more than 2 elements in shopping cart"
     })
     await $("//*[@class='ico-cart']").click();
     await browser.pause(3000);
     
    })


    
    it('', async()=>{
        await browser.url("https://makemytrip.com")
        await browser.maximizeWindow();
        await browser.refresh();
        await $("//*[@data-cy='submit']/a").click();
       
        await (await $(".journey-title")).waitForExist();
        await $(".clusterTabHeadList:nth-child(2)").click();


        
    })

})