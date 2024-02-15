/// <reference types='cypress'/>


describe('University Page', ()=>{
    
    it('automation of iframe in University Page', ()=>{
     cy.visit("https://globalshala-iam.ml/external/partner/000000000GB102A6JB98182ZHC")
     cy.get('[title="YouTube video player"]')
     .its("contents")
     .then(cy.wrap).get("[") 
    })
      
   
  })
  

//   .its('body')