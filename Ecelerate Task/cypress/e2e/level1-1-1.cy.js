/// <reference types='cypress'/>


describe('Checking Login', ()=>{

    beforeEach(()=>{
      cy.visit("https://globalshala-iam.ml/auth/login")
    })
  
  
       
    it('Positive 1 login Task (Right ID Password)', ()=>{
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
  
    it('Negative  login Task (Wrong password check toast)', ()=>{
          // for the get help link
          cy.get('#kt_login_signup[routerlink="/supportcenter/faqsupport"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", "Get Help");
          // title is sign In
           cy.get("h3").should("exist").and("have.text", " Sign In ")
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

    it('Negative -2 login Task (wrong email check validation)', ()=>{
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
       .type(user.WrongEmail);
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
     //  checking that red warnning is visible or not
       cy.get(".fv-help-block").should("be.visible").and("exist");
    })
  })
  
  








  

//   //  targeting the user section option
//   cy.get('#kt_aside_toggle').click()


   
// //      ".btn.btn-info.btn-sm.cursor-pointer.mt-3"
          
// //     // targetting the dropdown 
// //             cy.get(".ki.ki-bold-menu.text-hover-primary.icon-md").click()


// cy.get('#kt_header_mobile_topbar_toggle')

// cy.get(':nth-child(5) > .btn')

// cy.get('.topbar-item.ng-star-inserted > .btn')