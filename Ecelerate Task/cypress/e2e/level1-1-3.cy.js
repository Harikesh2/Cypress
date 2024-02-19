/// <reference types='cypress'/>


describe('Checking Login', ()=>{

    beforeEach(()=>{
      cy.viewport('iphone-6')
      cy.visit("https://globalshala-iam.ml/auth/login")
  
    })
  
  
      
    it('Mobile View Sign In(Positive-1)', ()=>{
        // for the get help link
        cy.get('#kt_login_signup[routerlink="/supportcenter/faqsupport"]')
        .should("exist")
        .and("be.visible")
        .and("have.text", "Get Help");
        // title is sign In
         cy.get("h3").should("exist").and("have.text", " Sign In ");
        cy.fixture('userData.json').then((user)=>{
        // Checking visibility of email 
        cy.get("[name$='email']")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "type", "email")
        .and("have.attr", "placeholder", "Email Address")
        .type(user.userEmail);
        // checking visibility of password
        cy.get("input[placeholder='Password']")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "placeholder", "Password")
        .and("have.attr", "type", "password")
        .type(user.userPassword);
        // checking password eye status
        cy.get("i.fa-eye").should("exist").click({ force: true });
        })
        // checking login button status
        cy.get("#kt_login_signin_submit").should("not.be.disabled").click();
          // Verify redirection to the dashboard after successful login
            cy.url().should("contain", "/dashboard");
    })
      
    it('Mobile View Sign Out (Positive-2)', ()=>{
        // for the get help link
        cy.get('#kt_login_signup[routerlink="/supportcenter/faqsupport"]')
        .should("exist")
        .and("be.visible")
        .and("have.text", "Get Help");
        // title is sign In
         cy.get("h3").should("exist").and("have.text", " Sign In ");
        cy.fixture('userData.json').then((user)=>{
        // Checking visibility of email 
        cy.get("[name$='email']")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "type", "email")
        .and("have.attr", "placeholder", "Email Address")
        .type(user.userEmail);
        // checking visibility of password
        cy.get("input[placeholder='Password']")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "placeholder", "Password")
        .and("have.attr", "type", "password")
        .type(user.userPassword);
        // checking password eye status
        cy.get("i.fa-eye").should("exist").click({ force: true });
        })
        // checking login button status
        cy.get("#kt_login_signin_submit").should("not.be.disabled").click();
          // Verify redirection to the dashboard after successful login
            cy.url().should("contain", "/dashboard");
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
      // Verify redirection to the login page after signing out
        cy.url().should("include", "/login"); 
    })

    it('Mobile View Sign In (Negative checking toast )', ()=>{
       // for the get help link
       cy.get('#kt_login_signup[routerlink="/supportcenter/faqsupport"]')
       .should("exist")
       .and("be.visible")
       .and("have.text", "Get Help");
       // title is sign In
        cy.get("h3").should("exist").and("have.text", " Sign In ");
       cy.fixture('userData.json').then((user)=>{
       // Checking visibility of email 
       cy.get("[name$='email']")
       .should("exist")
       .and("be.visible")
       .and("have.attr", "type", "email")
       .and("have.attr", "placeholder", "Email Address")
       .type(user.Email);
       // checking visibility of password
       cy.get("input[placeholder='Password']")
       .should("exist")
       .and("be.visible")
       .and("have.attr", "placeholder", "Password")
       .and("have.attr", "type", "password")
       .type(user.password);
       // checking password eye status
       cy.get("i.fa-eye").should("exist").click({ force: true });
       })
       // checking login button status
       cy.get("#kt_login_signin_submit").should("not.be.disabled").click();
     //   checking the toast message
       cy.get("#toast-container")
       .should("exist")
       .and("be.visible")
       .contains("Incorrect username or password");
     //   checking url 
       cy.url().should("not.contain", "/dashboard");
     //   waiting to check toast 
       cy.wait(10000);
     //   checking end status of toast
       cy.get("#toast-container").should("exist").and("not.be.visible");
    })

    it('Mobile View checking sign out page url (Negative)', ()=>{
        // for the get help link
        cy.get('#kt_login_signup[routerlink="/supportcenter/faqsupport"]')
        .should("exist")
        .and("be.visible")
        .and("have.text", "Get Help");
        // title is sign In
         cy.get("h3").should("exist").and("have.text", " Sign In ");
        cy.fixture('userData.json').then((user)=>{
        // Checking visibility of email 
        cy.get("[name$='email']")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "type", "email")
        .and("have.attr", "placeholder", "Email Address")
        .type(user.userEmail);
        // checking visibility of password
        cy.get("input[placeholder='Password']")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "placeholder", "Password")
        .and("have.attr", "type", "password")
        .type(user.userPassword);
        // checking password eye status
        cy.get("i.fa-eye").should("exist").click({ force: true });
        })
        // checking login button status
        cy.get("#kt_login_signin_submit").should("not.be.disabled").click();
          // Verify redirection to the dashboard after successful login
            cy.url().should("contain", "/dashboard");
          // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');
          //  click ing on user section
          cy.get('#kt_header_mobile_topbar_toggle').click()
          // opening the personal info section 
          cy.get(':nth-child(5) > .btn').click()          
        // targetting dropdown section
           cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()
        // click on sign out
           cy.get("div[class='profile-wrapper'] button[class='btn btn-info btn-sm cursor-pointer mt-3']").should('be.visible');
           // checking dashboard in url
           cy.url().should("include", "/personal-information");
      })
  })
  
  
  
  
  
  
  
























  
  
  
   //  cy.get('.ki.ki-bold-menu.text-hover-primary.icon-md').click()
        //  cy.get('.symbol-label.font-size-h5.font-weight-bold.ng-star-inserted').click()
        //  cy.get('.ki.ki-bold-menu.text-hover-primary.icon-md').click()
  
        // cy.get(".symbol-label.font-size-h5.font-weight-bold.ng-star-inserted").click()
        // cy.get("id attribute is not available for this element").type("Hari@2809");
        // cy.get("#kt_login_signin_submit").click();
  