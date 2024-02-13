/// <reference types="cypress"/>

describe('Dashboard Element checking',()=>{

    beforeEach(()=>{
          cy.viewport(746,600);
          cy.visit("https://globalshala-iam.ml/auth/login")
        })
      

    it('checking all element',()=>{

         // performing Sign-Up
         cy.fixture('userData.json').then((user)=>{
          cy.get("[name$='email']").type(user.userEmail);
          cy.get("input[placeholder='Password']").type(user.userPassword);
          })
          cy.get("#kt_login_signin_submit").click();


    // Checking Dashboard is visible or not
         cy.get('#kt_wrapper').should('be.visible');

         // my success
              cy.get(':nth-child(2) > .col-xxl-4').should('be.visible')


              // skill wise section
              cy.get(':nth-child(1) > .col-xxl-8').should('be.visible')
 

              // activitiy
              cy.get('app-lists-widget9 > .card').should('be.visible')


              // opportutinity
              cy.get(':nth-child(2) > .col-xxl-8').should('be.visible')


              // experience
              cy.get(':nth-child(3) > .col-lg-12').should('be.visible')


              // impact
              cy.get('.col-12').should('be.visible')
    })
})



// cy.get('.image-input-wrapper')


// DOB
// cy.get(':nth-child(5) > .col-lg-9 > .input-group > .form-control')

// GENDER
// cy.get(':nth-child(5) > .col-lg-9 > .input-group > .form-control')


// PHONE cCODE
// cy.get('.mat-select-arrow')

// PHONE Number
// cy.get('.phone-number-padding')

// ALERNATE EMAIL
// cy.get('#validateEmail')


// cy.get('#validateAddressLine1')

// cy.get('#validateAddressLine2')

// cy.get('#validateCity')

// cy.get('#validateState')

// cy.get('#validateCountry')


// cy.get('#validateZipCode')


// CLICK SAVE
// cy.get('.btn-success > .indicator-label')


.opportunities[0].ref_properties


       
//   // Checking the My Success 
//          cy.get(".card.card-custom.bg-gray-100.card-stretch.gutter-b").should('be.visible')

//   //  Checking Skill wise Points
//          cy.get("#skillWisePoints").should('be.visible')

//  //   Action needed section
//        //   cy.get("div[class='col-lg-12 col-xxl-4 ng-star-inserted'] div[class='card card-custom card-stretch gutter-b']").should('be.visible')

// //  New Opportunities
//          cy.get("div[class='col-lg-12 col-xxl-8'] div[class='card card-custom card-stretch gutter-b ng-star-inserted']").should('be.visible')


// // experience gps
//          cy.get("div[class='col-lg-12 col-xxl-12'] div[class='card card-custom card-stretch gutter-b ng-star-inserted']").should('be.visible')

//          cy.get("div[class='col-lg-12 col-xxl-12'] div[class='card card-custom card-stretch gutter-b ng-star-inserted']").should('be.visible')
        