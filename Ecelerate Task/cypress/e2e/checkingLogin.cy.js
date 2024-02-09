/// <reference types='cypress'/>


describe('Checking Login', ()=>{

  beforeEach(()=>{
    cy.viewport('iphone-6')
    cy.visit("https://globalshala-iam.ml/auth/login")

  })


    
  it.skip('login Task', ()=>{
      cy.get("[name$='email']").type("mths83478@gmail.com");
      cy.get("input[placeholder='Password']").type("Hari@2809");
      cy.get("#kt_login_signin_submit").click();
      // cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()

  })
    
  it('Sign-Out Task', ()=>{
    // performing Sign-Up
        cy.get("[name$='email']").type("mths83478@gmail.com");
        cy.get("input[placeholder='Password']").type("Hari@2809");
        cy.get("#kt_login_signin_submit").click();

   // Checking Dashboard is visible or not
        cy.get('#kt_wrapper').should('be.visible');

   //  targeting the user section option
        cy.get('body > app-layout:nth-child(3) > app-header-mobile:nth-child(1) > div:nth-child(2) > button:nth-child(2) > svg-icon:nth-child(1) > svg:nth-child(1) > g:nth-child(3) > path:nth-child(3)').click()
        
  // targetting the user details
        cy.get('.btn > .d-flex > .symbol > .symbol-label').click()
        
  // targetting dropdown section
        cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
  // click on sign out
        cy.get("div[class='profile-wrapper'] button[class='btn btn-info btn-sm cursor-pointer mt-3']").click();

     
  })

})









 //  cy.get('.ki.ki-bold-menu.text-hover-primary.icon-md').click()
      //  cy.get('.symbol-label.font-size-h5.font-weight-bold.ng-star-inserted').click()
      //  cy.get('.ki.ki-bold-menu.text-hover-primary.icon-md').click()

      // cy.get(".symbol-label.font-size-h5.font-weight-bold.ng-star-inserted").click()
      // cy.get("id attribute is not available for this element").type("Hari@2809");
      // cy.get("#kt_login_signin_submit").click();
