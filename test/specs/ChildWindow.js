describe('Handling ChildWindows', async () => {

    it('Handlie child window', async () => {


 
        await browser.url("http://the-internet.herokuapp.com/windows")
        await browser.maximizeWindow();
        await $(".example a").click();
        const  windowHandles=await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        console.log(await browser.getTitle());
        await browser.closeWindow();
        await browser.switchToWindow(windowHandles[0]);
        console.log(await browser.getTitle());

      
    })
})