/// <reference types='cypress'/>

import "cypress-iframe"
describe('University Page', ()=>{
    
    it('automation of iframe in University Page', ()=>{
        cy.visit("https://globalshala-iam.ml/external/partner/000000000GB102A6JB98182ZHC")

        cy.get('.youtube-video > iframe').should('be.visible').then((iframe)=>{

          console.log(iframe.contents());


            // cy.get('.youtube-video > iframe').should('be.visible').then((iframe) => {
                
            //   });


              

            // cy.log(iframe.contents().body)
            // cy.wrap(iframe.contents().body).get('[title="YouTube video player"]')
            // cy.log(cy.wrap(iframe.contents().body));


           


            // cy.wrap(iframe.contents().find('body')).within(() => {
            //     // Use Cypress commands to interact with elements inside the iframe
            //     cy.get('[title="YouTube video player"]').should('exist');
            //   });


        })

        

        
    })
      
   
  })
  











  // let iframe= cy.get("iframe[title='YouTube video player']")
        //   .its('0.contentDocument')
        //   .should('exist')
        //   .then(cy.wrap)
        
        //   iframe.contains('youtube')

        // loaded the frame
        // cy.frameLoaded("iframe[title='YouTube video player']")
        // working with frame
        // cy.iframe("iframe[title='YouTube video player']")