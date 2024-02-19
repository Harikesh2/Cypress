/// <reference types='cypress'/>


describe('Checking SignOut', ()=>{

    beforeEach(()=>{
      cy.visit("https://globalshala-iam.ml/auth/login")
      cy.fixture('userData.json').then((user)=>{
        cy.login(user.userEmail, user.userPassword)
      })
    })
      
    it('Sign-Out Task (Positive)', ()=>{
      // checking dashboard in url
      cy.url().should("include", "/dashboard");
    // Checking Dashboard is visible or not
    cy.get('#kt_wrapper').should('be.visible');
    //  targeting the user section option
         cy.get(".btn.btn-icon.btn-icon-mobile.w-auto.btn-clean.d-flex.align-items-center.btn-lg.px-2").click()
   //   checking visibality of user section
            cy.get("#kt_content").should('be.visible');
   //    targetting sign out option
      cy.get('#kt_profile_aside > app-profile-card > .card > .card-body > .navi > .d-flex > .btn').click();
      // Verify redirection to the login page after signing out
        cy.url().should("include", "/login");   
    })



    it('Sign-Out Task (Negative)', ()=>{
        // checking dashboard in url
        cy.url().should("include", "/dashboard");
     // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');
           //  targeting the user section option
         cy.get(".btn.btn-icon.btn-icon-mobile.w-auto.btn-clean.d-flex.align-items-center.btn-lg.px-2").click()
         //   checking visibality of user section
         cy.get("#kt_content").should('be.visible');
           // checking dashboard in url
           cy.url().should("include", "/user-profile/educational-information"); 
    })
  
  })
