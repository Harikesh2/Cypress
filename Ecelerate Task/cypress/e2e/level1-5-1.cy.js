/// <reference types='cypress'/>

describe('Checking Opportunity',()=>{
    beforeEach(()=>{
        cy.visit("https://globalshala-iam.ml/auth/login")
        cy.login();
    })

    it('checking status 200', ()=>{

        cy.get(':nth-child(4) > .menu-link > .menu-text').click();
        cy.wait(0);
        cy.get('#mat-tab-label-0-1').click();
        // cy.get('#mat-tab-label-0-1 > .mat-tab-label-content')

        cy.intercept('https://globalshala-iam.ml:8081/api/v1/auth/Internship/user/all?itemsPerPage=6&skipValue=0').as('ApiRequest')

        cy.wait('@ApiRequest').then((el) => {
            // Assert on the intercepted request
            // cy.log(interception.response.body.data.success.opportunities[0].ref_properties.status);
            // let success = el.response.body.data;

            cy.wait(0)
            cy.log(el.response.body.data['success'].opportunities[0].ref_properties.status)
          });




    })
})




// response.body.data