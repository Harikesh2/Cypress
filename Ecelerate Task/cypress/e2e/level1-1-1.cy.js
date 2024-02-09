/// <reference types='cypress'/>


describe('Checking Login', ()=>{

    beforeEach(()=>{
    //   cy.viewport('iphone-6')
      cy.visit("https://globalshala-iam.ml/auth/login")
    })
  
  
      
    it('Positive 1 login Task', ()=>{
        cy.get("[name$='email']").type("mths83478@gmail.com");
        cy.get("input[placeholder='Password']").type("Hari@2809");
        cy.get("#kt_login_signin_submit").click();
        // cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
  
    })
      
      
    it('Positive 2 login Task', ()=>{
        cy.get("[name$='email']").type("davidmacman70@gmail.com");
        cy.get("input[placeholder='Password']").type("Hari@2809");
        cy.get("#kt_login_signin_submit").click();
        // cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
  
    })
      
    it('Negative -1 login Task', ()=>{
        cy.get("[name$='email']").type("mths8347@gmail.com");
        cy.get("input[placeholder='Password']").type("Hari@2809");
        cy.get("#kt_login_signin_submit").click();
        // cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
  
    })

    it('Negative -2 login Task', ()=>{
        cy.get("[name$='email']").type("mths83478@gmail.com");
        cy.get("input[placeholder='Password']").type("Har@2809");
        cy.get("#kt_login_signin_submit").click();
        // cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
  
    })
      
   
  })
  
  