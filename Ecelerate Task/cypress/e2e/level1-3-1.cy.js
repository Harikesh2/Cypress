/// <reference types= "cypress"/>


describe('Profile Section',()=>{
    
    beforeEach(()=>{
        cy.login()
        })
      

    it('Updating the Profile Section',()=>{
    
         // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');

          cy.get(
            ".text-dark-50.font-weight-bolder.font-size-base.d-none.d-md-inline.mr-3"
          ).click();



        //   cy.get(':nth-child(3) > .col-lg-9 > .input-group > .form-control').type("Gaurav")
        //      cy.get(':nth-child(4) > .col-lg-9 > .input-group > .form-control').type("Pandey")



        // importing the file add (for this added the file Upload dependency and selected the file upload option)
        cy.get("input[name='profile_avatar']").attachFile("image.png");  
       


       
            let DOB = "28/09/2000"
            let [date,month,year] = DOB.split("/")

            cy.get(":nth-child(5) > .col-lg-9 > .input-group > .form-control")
            .then(($input) => {
              $input.val(`${year}-${month}-${date}`).trigger("change");
            })
            .click();
            cy.get(":nth-child(6) > .col-lg-9 > .input-group > .form-control").select(
                "Male"
              ); //gender
              //Putting phone no
            cy.get(".phone-number-padding").clear().type("9123432123"); 
             //Putting Alt email
            cy.get("#validateEmail").clear().type("cool@gmail.com");
            //Putting address1
            cy.get("#validateAddressLine1").clear().type("Dubai"); 
            //Putting data in address Field
            cy.get("#validateAddressLine2"); 
            //Putting city data
            cy.get("#validateCity").clear().type("Dubai"); 
            // Putting State data
            cy.get("#validateState").clear().type("Dubai");
            // Putting country data
            cy.get("#validateCountry").clear().type("India").type("{enter}");
            // Putting Zipcode
            cy.get("#validateZipCode").clear().type("110006");
            // hitting enter
            cy.get(".card-toolbar > .btn-success").click();

                 
  });

})
