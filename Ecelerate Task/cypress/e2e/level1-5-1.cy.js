/// <reference types='cypress'/>

describe('Checking Opportunity',()=>{
    beforeEach(()=>{
        cy.visit("https://globalshala-iam.ml/auth/login")
        cy.fixture('userData.json').then((user)=>{
          cy.login(user.userEmail, user.userPassword)
        })
        cy.intercept('GET',  'https://globalshala-iam.ml:8081/api/v1/auth/Internship/user/all?itemsPerPage=6&skipValue=0').as('ApiRequest') 
    })


    it('Applying to a Opportunity',()=>{
       // Verify redirection to the dashboard after login
       cy.url().should("include", "/dashboard");
       // Click on the opportunity page link
       cy.get(":nth-child(4) > .menu-link").click();
      // Type search keyword in the search field
    cy.get(".form-control").type("src");

    // Wait for search results to load
    cy.wait(10);

    // Click on the apply button of the first opportunity
    cy.get(".card-footer > .flex-column > .btn").first().click();

    // Select option from the dropdown
    cy.get("select.form-select").select("GlobalShala Website");

    // Fill in additional information
    cy.get("input#inputField").type("test");

    // Check a checkbox
    cy.get("input.form-check-input").check({ force: true });

    // Click on the submit button
    cy.get(
      ".ng-untouched.ng-valid > .d-flex > :nth-child(2) > .btn-primary"
    ).click();

    // Click on the final submit button
    cy.get("button[data-wizard-type='action-submit']").click();
    })

    it('checking status 101', ()=>{
        // click on intership section
        cy.get(':nth-child(4) > .menu-link > .menu-text').should('be.visible')
        cy.get(':nth-child(4) > .menu-link > .menu-text').click();
        // checking and click on applied section
        cy.get('#mat-tab-label-0-1').should('be.visible');
        cy.get('#mat-tab-label-0-1').click();
          // // checking the element status
          cy.get(".text-uppercase.font-weight-bolder.m-2.mt-7.mt-sm-0.mr-auto.mr-sm-0.ml-sm-auto.text-primary.ng-star-inserted").should('be.visible').contains('Applied');
        cy.wait('@ApiRequest').then((intercept) => {
          // checking the status 
            expect(intercept.response.body.data['success'].opportunities[0].ref_properties.status).equal(101);
          // checking the payment status
            expect(intercept.response.body.data['success'].opportunities[0].ref_properties.payment_status).equal("unpaid");
          });
    })
})





// intercept.response.body.data.success.totalActivities



// response.body.data
// cy.log(intercept.response.body.data['success'].opportunities[0].ref_properties.status)

// Assert on the intercepted request
            // cy.log(interception.response.body.data.success.opportunities[0].ref_properties.status);
            // let success = el.response.body.data;

              // cy.get('#mat-tab-label-0-1 > .mat-tab-label-content')


            //   cy.log(intercept.response.body.data['success'].opportunities[0].ref_properties.status)