/// <reference types="cypress"/>

describe('Dashboard Element checking',()=>{

    beforeEach(()=>{
          cy.viewport('iphone-6')
          cy.visit("https://globalshala-iam.ml/auth/login")
        })
      

    it('checking all element',()=>{

         // performing Sign-Up
         cy.get("[name$='email']").type("mths83478@gmail.com");
         cy.get("input[placeholder='Password']").type("Hari@2809");
         cy.get("#kt_login_signin_submit").click();
 
    // Checking Dashboard is visible or not
         cy.get('#kt_wrapper').should('be.visible');
 
        
  // Checking the My Success 
         cy.get(".card.card-custom.bg-gray-100.card-stretch.gutter-b").should('be.visible')

  //  Checking Skill wise Points
         cy.get("#skillWisePoints").should('be.visible')

 //   Action needed section
         cy.get("div[class='col-lg-12 col-xxl-4 ng-star-inserted'] div[class='card card-custom card-stretch gutter-b']").should('be.visible')

//  New Opportunities
         cy.get("div[class='col-lg-12 col-xxl-8'] div[class='card card-custom card-stretch gutter-b ng-star-inserted']").should('be.visible')


// experience gps
         cy.get("div[class='col-lg-12 col-xxl-12'] div[class='card card-custom card-stretch gutter-b ng-star-inserted']").should('be.visible')

         cy.get("div[class='col-lg-12 col-xxl-12'] div[class='card card-custom card-stretch gutter-b ng-star-inserted']").should('be.visible')
        

    })
})