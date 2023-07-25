class PersonPage{

    get firstname () {
        return $(".party-form-first-name");
    }

    get jobtitle(){
        return $(".form-input-text.party-form-job-title");
    }


    get organization(){
        return $("[placeholder='Find an organisation']");
    }

    get newOrganization(){
        return $(".search-select__extra ");
    }

    get savebtn(){
        return $("[data-pendo='save-party']");
    }

    get ExistedOrganization(){
        return $(".search-select__option-main-text");
    }

    get MenuBtn(){
        return $(".nav-bar-account-menu");
    }

    get LogoutBtn(){
        return  $("[data-pendo='account-menu-log-out']");

    }

    async FillPersonForm (title, jobTitle, organization) {
        await this.firstname.setValue("mandy");
        await this.jobtitle.setValue(jobTitle);
        await this.organization.setValue(organization);
        try {
            await this.ExistedOrganization.click();
          }
          catch(err) {
            await this.newOrganization.click();
          } 
        await this.savebtn.click();
    
    }

    async ValidatePerson(){

 
        await this.MenuBtn.click();
        await this.LogoutBtn.click();
    }
}

module.exports= new PersonPage();