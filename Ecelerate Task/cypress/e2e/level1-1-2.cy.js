/// <reference types='cypress'/>


describe('Checking SignOut', ()=>{

    beforeEach(()=>{
      cy.visit("https://globalshala-iam.ml/auth/login")
  
    })
      
    it('Sign-Out Task (Positive)', ()=>{
      // performing Sign-Up
      cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.userPassword);
            })
            cy.get("#kt_login_signin_submit").click();
  
    
    // Checking Dashboard is visible or not
    cy.get('#kt_wrapper').should('be.visible');

    //  targeting the user section option
         cy.get(".btn.btn-icon.btn-icon-mobile.w-auto.btn-clean.d-flex.align-items-center.btn-lg.px-2").click()

   //   checking visibality of user section
            cy.get("#kt_content").should('be.visible');

   //    targetting sign out option
      cy.get('#kt_profile_aside > app-profile-card > .card > .card-body > .navi > .d-flex > .btn').click();
            
    })



    it('Sign-Out Task (Negative)', ()=>{
      // performing Sign-Up
      cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.userPassword);
            })
            cy.get("#kt_login_signin_submit").click();
  
     // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');

           //  targeting the user section option
         cy.get(".btn.btn-icon.btn-icon-mobile.w-auto.btn-clean.d-flex.align-items-center.btn-lg.px-2").click()

         //   checking visibality of user section
         cy.get("#kt_content").should('be.visible');
  
    })
  
  })
