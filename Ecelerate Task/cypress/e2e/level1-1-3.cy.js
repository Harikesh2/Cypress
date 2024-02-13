/// <reference types='cypress'/>


describe('Checking Login', ()=>{

    beforeEach(()=>{
      cy.viewport('iphone-6')
      cy.visit("https://globalshala-iam.ml/auth/login")
  
    })
  
  
      
    it('Mobile View (Positive-1)', ()=>{
      cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.userPassword);
            })
            cy.get("#kt_login_signin_submit").click();
  
    })
      
    it('Mobile View (Positive-2)', ()=>{
      // performing Sign-Up
      cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.userPassword);
            })
            cy.get("#kt_login_signin_submit").click();
  
     // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');
 
      //  click ing on user section
      cy.get('#kt_header_mobile_topbar_toggle').click()
        
      // opening the personal info section 
      cy.get(':nth-child(5) > .btn').click()

          
    // targetting dropdown section
          cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()

    // click on sign out
          cy.get("div[class='profile-wrapper'] button[class='btn btn-info btn-sm cursor-pointer mt-3']").click();
  
       
    })

    it('Mobile View (Negative-1)', ()=>{
      cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.userPassword);
            })
            cy.get("#kt_login_signin_submit").click();
        // cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
  
    })

    it('Mobile View (Negative-2(Incorrect-login-password))', ()=>{
        // performing Sign-Up
        cy.fixture('userData.json').then((user)=>{
            cy.get("[name$='email']").type(user.userEmail);
            cy.get("input[placeholder='Password']").type(user.password);
            })
            cy.get("#kt_login_signin_submit").click();


            // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');
 
          //  click ing on user section
          cy.get('#kt_header_mobile_topbar_toggle').click()
            
          // opening the personal info section 
          cy.get(':nth-child(5) > .btn').click()
    
              
        // targetting dropdown section
              cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
    
        // click on sign out
              cy.get("div[class='profile-wrapper'] button[class='btn btn-info btn-sm cursor-pointer mt-3']").click();
    
       
         
      })
  
  })
  
  
  
  
  
  
  
  
  
   //  cy.get('.ki.ki-bold-menu.text-hover-primary.icon-md').click()
        //  cy.get('.symbol-label.font-size-h5.font-weight-bold.ng-star-inserted').click()
        //  cy.get('.ki.ki-bold-menu.text-hover-primary.icon-md').click()
  
        // cy.get(".symbol-label.font-size-h5.font-weight-bold.ng-star-inserted").click()
        // cy.get("id attribute is not available for this element").type("Hari@2809");
        // cy.get("#kt_login_signin_submit").click();
  