/// <reference types= "cypress"/>


describe('Profile Section',()=>{
    
    beforeEach(()=>{
        cy.login()
        })
      
    it.only('Updating the Profile Section',()=>{
    
         // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');

          cy.get(
            ".text-dark-50.font-weight-bolder.font-size-base.d-none.d-md-inline.mr-3"
          ).click();

        // importing the file add (for this added the file Upload dependency and selected the file upload option)
        cy.get("input[name='profile_avatar']").attachFile("image.png"); 


           // deleting the image file
           cy.get("span[class='btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow ng-star-inserted'] i[class='ki ki-bold-close icon-xs text-muted']").should('be.visible');

           cy.get("span[class='btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow ng-star-inserted'] i[class='ki ki-bold-close icon-xs text-muted']").click();

           cy.wait(1000);
   
        

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




// // my success
// cy.get(':nth-child(2) > .col-xxl-4')


// // skill wise section
// cy.get(':nth-child(1) > .col-xxl-8') 

// // activitiy
// cy.get('app-lists-widget9 > .card')

// // opportutinity
// cy.get(':nth-child(2) > .col-xxl-8')

// // experience
// cy.get(':nth-child(3) > .col-lg-12')

// // impact
// cy.get('.col-12')