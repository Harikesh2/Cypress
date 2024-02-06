

describe('Suite Name ',function () {
    it('Test No. 1: verify the title', function () {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq','OrangeHRM')
    })
    
    it('Test No. 1: verify the title negative', function () {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq','OrangeRM')
    })
    
    // it('Test No. 2 ', function () {
        
    // })
    
    // it('Test No. 3 ', function () {
        
    // })
    
})
// describe('Suite Name ', ()=>{
//     // we can fire call back as well
//     it('Test No. 1 ',  ()=> {
        
//     })
    
// })