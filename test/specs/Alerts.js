describe('Handling Alerts', async () => {

    it('How to take Alert', async () => {


 
        await browser.url("https://selenium.obsqurazone.com/javascript-alert.php")
        await browser.maximizeWindow();
        await $(".btn.btn-success").click();
        console.log(await  browser.isAlertOpen());
        
        console.log(await browser.getAlertText());
        await browser.acceptAlert();
    })
})