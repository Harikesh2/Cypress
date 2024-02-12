/// <reference types='cypress'/>


describe('Checking Login', ()=>{

    beforeEach(()=>{
    //   cy.viewport('iphone-6')
      cy.visit("https://globalshala-iam.ml/auth/login")
    })
  
  
      
    it('Positive 1 login Task', ()=>{
        cy.fixture('userData.json').then((user)=>{
        cy.get("[name$='email']").type(user.userEmail);
        cy.get("input[placeholder='Password']").type(user.userPassword);
        })
        cy.get("#kt_login_signin_submit").click();
    })
      
      
    it('Positive 2 login Task', ()=>{
        cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.userPassword);
            })
            cy.get("#kt_login_signin_submit").click();
    })
      
    it('Negative -1 login Task', ()=>{
        cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.password);
            })
            cy.get("#kt_login_signin_submit").click();
    })

    it('Negative -2 login Task', ()=>{
        cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.password);
            })
            cy.get("#kt_login_signin_submit").click();
    })
      
   
  })
  
  