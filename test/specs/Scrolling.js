describe('Scrolling Test', async () => {

    it('How to scroll', async () => {


 
        await browser.url("https://demowebshop.tricentis.com/")
        await browser.maximizeWindow();
        await $("//*[contains(text(),'Customer service')]").scrollIntoView();
        await browser.pause(2000);
        //await $("//*[@class='top-menu']/li[2]").scrollIntoView();

        /**
         * Hover on an element
         */
        await $("//*[@class='top-menu']/li[2]").moveTo();  

    })
})