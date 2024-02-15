/// <reference types='cypress'/>

describe('Checking Opportunity',()=>{
    beforeEach(()=>{
        cy.visit("https://globalshala-iam.ml/auth/login")
        cy.intercept('GET',  'https://globalshala-iam.ml:8081/api/v1/auth/Internship/user/all?itemsPerPage=6&skipValue=0').as('ApiRequest')
        cy.login();
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