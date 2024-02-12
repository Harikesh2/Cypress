/// <reference types= "cypress"/>


describe('Checking API Call Status',()=>{

    beforeEach(()=>{
        cy.login()
    })

    it('Checking Request',()=>{
        cy.request('https://globalshala-iam.ml/dashboard').as('gobalshala')
        cy.get('@gobalshala').its('status').should('be.oneOf', [200, 300, 304]);
  });

})

// cy.request('https://globalshala-iam.ml/auth/login').then((response) => {
        //     // Assert on the status code
        //     expect(response.status).to.be.oneOf([200,300,304]);
        //   })