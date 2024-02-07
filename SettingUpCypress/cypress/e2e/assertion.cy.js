///   <reference types= "Cypress"/>


describe ('Assertion Demo',()=>{

    it.skip ('Implicit Assertion', ()=>{
        cy.viewport(746,800);

        cy.visit("https://globalshala-iam.ml/auth/login")

        // include is used to check the 
        // cy.url().should('include', 'globalshala');
        // cy.url().should('eq',"https://globalshala-iam.ml/auth/login")
        // cy.url().should('contain',"auth")
        // cy.url().should('include', 'globalshala')
        // .should('eq',"https://globalshala-iam.ml/auth/login")
        // .should('contain',"auth")
        // cy.url().should('include', 'globalshala')
        // .and('eq',"https://globalshala-iam.ml/auth/login")
        // .and('not.contain',"auth")

        cy.title().should('include',"signup")
        .and('not.contain','Harikesh')

        cy.get('.pb-13 > .text-muted').should("be.visible");
        cy.get('.pb-13 > .text-muted').should("exist");




    })

    it('Explicit Assertion', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")

        cy.get("[placeholder='Username']").type("admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "xyz";

        cy.get(".oxd-userdropdown-name").then ((x)=>{
            let actualName = x.text();
            // BDD Type ASSERTION
            // expect(actualName).to.equal(expName);
            // expect(actualName).to.not.equal(expName);

            // TDD Type ASSERTION
            assert.equal(actualName,expName)
            assert.notEqual(actualName,expName)


        })


    })
})