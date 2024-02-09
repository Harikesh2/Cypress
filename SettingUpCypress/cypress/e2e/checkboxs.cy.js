/// <reference types="Cypress"/>


describe('check ui Element', ()=>{
    it('Checking Radio Button', ()=>{

        cy.visit("")
        // checking the visibltie of Radio Button
        cy.get("").should("be.visible");
        cy.get("").should("be.visible");

        // selecting the Radio Button 
        cy.get("css Seclector of Button").check().should('de.check')
        cy.get("css Seclector of Button").uncheck().should('de.check')

    
    })

    it('checkbox',()=>{
        // checking Visibltie of the checkbox
        cy.get("input#monday").should('be.visible')

        // making the checkbox selected

        cy.get("input#monday").check().should('be.checked')

         // making the checkbox un-selected

         cy.get("input#monday").uncheck().should('not.be.checked');


        //  selecting all the check-boxes at once 

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        // unselecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // selecting first checkbox

        cy.get("input.form-check-input[type='checkbox']").first().check()

        // selecting last checkbox
        
        cy.get("input.form-check-input[type='checkbox']").last().check()



    })

})