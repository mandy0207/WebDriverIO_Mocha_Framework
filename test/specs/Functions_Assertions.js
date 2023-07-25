describe('Boolean Functions', async () => {

    it('Use of Boolean Functions', async () => {


        /**
         * Check All Assertions and Functions
         * https://webdriver.io/docs/api/expect-webdriverio/
         */
        await browser.url("https://demowebshop.tricentis.com/")
        await browser.maximizeWindow();

        const elem = await $("(//*[@class='answer']/input)[2]");
        await expect(elem).not.toBeSelected()
        await elem.click();
        await expect(elem).toBeSelected()

        const communityPoll=await $(".block-poll .title strong")
        await expect(communityPoll).toHaveText("COMMUNITY POLL");


       




    })
})