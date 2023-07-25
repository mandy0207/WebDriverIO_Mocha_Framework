describe('Learn Frames', async () => {

    it('How to handle Frames', async () => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow();
        await $("#mousehover").scrollIntoView();
       console.log("Links outside Frames="+ await $$("a").length);
        await browser.switchToFrame(await $("#courses-iframe"));
        console.log("Links outside Frames="+ await $$("a").length);
    })
})