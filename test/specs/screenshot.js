describe('Sscreenshot Test', async () => {

    it('How to take screen', async () => {


 
        await browser.url("https://rahulshettyacademy.com/dropdownsPractise/")
        await browser.maximizeWindow();
        await browser.saveScreenshot("screenshot.png");

    })
})