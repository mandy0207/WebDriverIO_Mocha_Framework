const Page= require('../pageobjects/page');
class HomePage extends Page{




    get addBtn () {
        return $("[data-pendo='quick-menu-toggle']");
    }

    get person(){
        return $("[data-pendo='quick-menu-add-person']");
    }



    async AddPerson () {
       super.ClickElement(this.addBtn);
      //  await this.addBtn.click();
        await this.person.click();
        
        
    
    }


}

module.exports= new HomePage();