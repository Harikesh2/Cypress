/// <reference types= "cypress"/>


describe('Checking API Call Status',()=>{

    beforeEach(()=>{
        cy.viewport('iphone-6')
        cy.login()
    })

    it.only('Checking Request',()=>{
        // intercepting the api 
        cy.intercept('https://globalshala-iam.ml:8081/api/v1/dashboard/mySuccess').as('ApiRequest')
        
        cy.wait('@ApiRequest').then((interception) => {
            // Assert on the intercepted request
            expect(interception.request.url).to.eq('https://globalshala-iam.ml:8081/api/v1/dashboard/mySuccess');
            cy.wait(1000)
        //    getting the data 
            expect(interception.response.body.data.success.totalActivities).to.be.equal(1);
         // comparing the data 
            cy.get('.bg-light-success > .d-block').should('have.text',interception.response.body.data.success.totalActivities)
          });



       

          




       
        
  });
})








 // cy.log(interception.response.body.data.success.totalActivities)

// expect(interception.response.statusCode).to.be.oneOf([200,300,304]);

 // cy.get("cy.get('.bg-light-success > .d-block')").should('have.text')

 //   cy.get("cy.get('.bg-light-success > .d-block')").should('have.text',interception.response.body.data.success.totalActivities)