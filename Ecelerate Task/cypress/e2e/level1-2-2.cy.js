/// <reference types= "cypress"/>


describe('Checking API Call Status',()=>{


    beforeEach(()=>{
        cy.viewport(746,600)
        cy.visit("https://globalshala-iam.ml/dashboard")
        cy.login()
    })


    it('Checking Request',()=>{
        
        cy.intercept('https://globalshala-iam.ml:8081/api/v1/notifications/all').as('ApiRequest')
        
        cy.wait('@ApiRequest').then((interception) => {
            // Assert on the intercepted request
            expect(interception.request.url).to.eq('https://globalshala-iam.ml:8081/api/v1/notifications/all');
            expect(interception.response.statusCode).to.eq(200);
          });


  });


  

})











  // cy.request('https://globalshala-iam.ml/dashboard').as('gobalshala')
        // cy.get('@gobalshala').its('status').should('be.oneOf', [200, 300, 304]);

        // // intercepting the api 
        // cy.intercept('GET', '').as('exampleRequest');  






// cy.request('https://globalshala-iam.ml/auth/login').then((response) => {
        //     // Assert on the status code
        //     expect(response.status).to.be.oneOf([200,300,304]);
        //   })