/// <reference types='cypress'/>


describe('Checking Login', ()=>{

    beforeEach(()=>{
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
  
  




  //  targeting the user section option
  cy.get('#kt_aside_toggle').click()


   
//      ".btn.btn-info.btn-sm.cursor-pointer.mt-3"
          
//     // targetting the dropdown 
//             cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()


cy.get('#kt_header_mobile_topbar_toggle')

cy.get(':nth-child(5) > .btn')

cy.get('.topbar-item.ng-star-inserted > .btn')