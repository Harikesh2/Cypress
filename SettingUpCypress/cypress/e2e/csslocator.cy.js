


describe('css locator', ()=>{

    
    it('css locators', ()=>{
        cy.viewport('iphone-6')
        cy.visit("https://globalshala-iam.ml/auth/login")
        cy.get("[name$='email']").type("mths83478@gmail.com");
        cy.get("input[placeholder='Password']").type("Hari@2809");
        cy.get("#kt_login_signin_submit").click();

    })

})