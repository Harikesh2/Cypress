/// <reference types="cypress"/>

describe('Dashboard Element checking',()=>{

    beforeEach(()=>{
          cy.viewport(746,600);
          cy.visit("https://globalshala-iam.ml/auth/login")
          cy.fixture('userData.json').then((user)=>{
            cy.login(user.userEmail, user.userPassword)
          })
          cy.intercept('https://globalshala-iam.ml:8081/api/v1/notifications/all').as('Dashborad')

             
        // intercepting the api 
        cy.intercept('https://globalshala-iam.ml:8081/api/v1/dashboard/mySuccess').as('ApiRequest')
        })

        
      

    it('checking all element',()=>{
        // Verify the URL contains "/dashboard"
        cy.url().should("include", "/dashboard");
        cy.get("h5").should("have.text", " Dashboard ");
        // Checking Dashboard is visible or not
         cy.get('#kt_wrapper').should('be.visible');
        //  toggle button
         cy.get("#kt_header_mobile_topbar_toggle").and("be.visible").click();
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
              // footer 
            cy.get("#kt_footer").should("be.visible");
            //  content
             cy.get("#kt_content").should("be.visible");
              // Verify the URL contains "/dashboard"
                 cy.url().should("include", "/dashboard");
    })


    it('Checking Request 200 300 304 with dashboard',()=>{
         // Verify the URL contains "/dashboard"
         cy.url().should("include", "/dashboard");
        cy.wait('@Dashborad').then((interception) => {
            // Assert on the intercepted request
            expect(interception.request.url).to.eq('https://globalshala-iam.ml:8081/api/v1/notifications/all');
            expect(interception.response.statusCode).to.be.oneOf([200,300,304]);
          });
          // Verify the URL contains "/dashboard"
         cy.url().should("include", "/dashboard");
      });



      
      it('Checking UI data with api data',()=>{
        // Verify the URL contains "/dashboard"
         cy.url().should("include", "/dashboard");
        cy.wait('@ApiRequest').then((interception) => {
            // Assert on the intercepted request
            expect(interception.request.url).to.eq('https://globalshala-iam.ml:8081/api/v1/dashboard/mySuccess');
            cy.wait(1000)
        //    getting the data 
            expect(interception.response.body.data.success.totalActivities).to.be.equal(2);
         // comparing the data with UI 
            cy.get('.bg-light-success > .d-block').should('have.text',interception.response.body.data.success.totalActivities)
          })  
          // Verify the URL contains "/dashboard"
         cy.url().should("include", "/dashboard");      
  });


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


// .opportunities[0].ref_properties


       
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
        