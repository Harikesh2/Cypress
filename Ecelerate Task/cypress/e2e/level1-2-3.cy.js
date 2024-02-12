/// <reference types= "cypress"/>


describe('Checking API Call Status',()=>{

    beforeEach(()=>{
        cy.viewport('iphone-6')
        cy.login()
    })

    it('Checking Request',()=>{

        
        cy.request('https://globalshala-iam.ml/dashboard').as('gobalshala')
        cy.get('@gobalshala').its('status').should('be.oneOf', [200, 300, 304]);

        cy.request('https://globalshala-iam.ml/assets/custom/dashboard/scholarship.svg').as('gobalshala1')
        cy.get('@gobalshala1').its('status').should('be.oneOf', [200, 300, 304]);

        cy.request('https://globalshala-iam.ml/assets/media/svg/icons/General/Notifications1.svg').as('gobalshala1')
        cy.get('@gobalshala1').its('status').should('be.oneOf', [200, 300, 304]);

        cy.request('https://globalshala-iam.ml/assets/custom/dashboard/Opportunity.svg').as('gobalshala1')
        cy.get('@gobalshala1').its('status').should('be.oneOf', [200, 300, 304]);

        
  });

})