/// <reference types='cypress'/>

import "cypress-iframe"
describe('University Page', ()=>{
    before(()=>{
        cy.visit("https://globalshala-iam.ml/auth/login")
        cy.login()
    })
    it('automation of iframe in University Page', ()=>{
        cy.visit("https://globalshala-iam.ml/external/partner/000000000GB102A6JB98182ZHC")

        // let iframe= cy.get("iframe[title='YouTube video player']")
        //   .its('0.contentDocument')
        //   .should('exist')
        //   .then(cy.wrap)
        
        //   iframe.contains('youtube')

        // loaded the frame
        cy.frameLoaded("iframe[title='YouTube video player']")
        // working with frame
        cy.iframe("iframe[title='YouTube video player']")
    })
      
   
  })
  