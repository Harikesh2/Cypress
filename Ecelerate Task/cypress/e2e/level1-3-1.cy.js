/// <reference types= "cypress"/>


describe('Profile Section',()=>{
  let personalInfo;
    beforeEach(()=>{
      cy.viewport(746,600)
      cy.fixture('personal-Info.json').then((info)=>{
        personalInfo = info;
      })
        cy.fixture('userData.json').then((user)=>{
        cy.login(user.userEmail, user.userPassword)
          })
     })
      
    it('Updating Personal Information',()=>{
         // Checking Dashboard is visible or not
          cy.get('#kt_wrapper').should('be.visible');
    cy.get("#kt_header_mobile_topbar_toggle").should('be.visible').click();
    cy.get(".btn > .d-flex > .symbol").should('be.visible').click();
    // checking personal information page
    cy.url().should("include", "/user-profile/personal-information");
        // importing the file add (for this added the file Upload dependency and selected the file upload option)
        cy.get("input[name='profile_avatar']").attachFile(personalInfo.file); 
           // deleting the image file
           cy.get("span[class='btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow ng-star-inserted'] i[class='ki ki-bold-close icon-xs text-muted']").should('be.visible');
           cy.get("span[class='btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow ng-star-inserted'] i[class='ki ki-bold-close icon-xs text-muted']").click();
           cy.wait(1000);
            let DOB = personalInfo.date.toString();
            let [date,month,year] = DOB.split("/")
            cy.get(":nth-child(5) > .col-lg-9 > .input-group > .form-control")
            .then(($input) => {
              $input.val(`${year}-${month}-${date}`).trigger("change");
            })
            .click();
            cy.get(":nth-child(6) > .col-lg-9 > .input-group > .form-control").select(
                personalInfo.gender
              ); //gender
              //Putting phone no
            cy.get(".phone-number-padding").clear().type(personalInfo.mobileNo); 
             //Putting Alt email
            cy.get("#validateEmail").clear().type(personalInfo.email);
            //Putting address1
            cy.get("#validateAddressLine1").clear().type(personalInfo.address1); 
            //Putting data in address Field
            cy.get("#validateAddressLine2"); 
            //Putting city data
            cy.get("#validateCity").clear().type(personalInfo.city); 
            // Putting State data
            cy.get("#validateState").clear().type(personalInfo.state);
            // Putting country data
            cy.get("#validateCountry").clear().type(personalInfo.country).type("{enter}");
            // Putting Zipcode
            cy.get("#validateZipCode").clear().type(personalInfo.pincode);
            // hitting enter
            cy.get(".card-toolbar > .btn-success").click();  
             // checking personal information page
             cy.url().should("include", "/user-profile/personal-information");
      });

  it('Updating Educational Details', ()=>{
   // Open the mobile top bar menu
    cy.get("#kt_header_mobile_topbar_toggle").click();
    cy.get(".btn > .d-flex > .symbol").click();
    cy.wait(1000);
    // checking personal information page
    cy.url().should("include", "/user-profile/personal-information");
    // Open the profile dropdown and click on sign out before each test
    cy.get(".border-0 > .ki").click();
      // Clicking on Education section
      cy.get(
        ".profile-wrapper > app-profile-card > .card > .card-body > .navi > :nth-child(2) > .navi-link"
      ).click();
      // Set student status, institute, graduation date, and major
        cy.get("#validateStudentStatus").select(personalInfo.status);
        cy.get("#validateInstitue").clear().type(personalInfo.college);
        let newdate = personalInfo.passOut.toString();
        const [months, years] = newdate.split("/");
        cy.get("#mat-input-1").click();
        cy.contains(years).click();
        cy.contains(months).click();
        cy.get("#validateMajor").clear().type(personalInfo.major);
        // Click on the save button to update educational information
        cy.get(".card-toolbar > .btn-success").click();
     // checking personal information page
    cy.url().should("include", "/user-profile/educational-information");
  })

  it('Updating Opportunity Provider',()=>{
    // Open the mobile top bar menu
    cy.get("#kt_header_mobile_topbar_toggle").click();
    cy.get(".btn > .d-flex > .symbol").click();
    cy.wait(1000);
    // checking personal information page
    cy.url().should("include", "/user-profile/personal-information");
    // Open the profile dropdown and click on sign out before each test
    cy.get(".border-0 > .ki").click();
     // Click on the opportunity provider section
    cy.get(
      ".profile-wrapper > app-profile-card > .card > .card-body > .navi > :nth-child(3) > .navi-link"
    ).click();
    // Click on the form control and submit the updated information
    cy.get(".form-control").click();
    cy.get(".form-control").click();
    cy.get(".btn-success > .indicator-label").click();
     // checking personal information page
     cy.url().should("include", "/opportunity-provider");
  })

  it('Updating My Interest',()=>{
     // Open the mobile top bar menu
     cy.get("#kt_header_mobile_topbar_toggle").click();
     cy.get(".btn > .d-flex > .symbol").click();
     cy.wait(1000);
     // checking personal information page
     cy.url().should("include", "/user-profile/personal-information");
     // Open the profile dropdown and click on sign out before each test
     cy.get(".border-0 > .ki").click();
    //  Click on the interests section
    cy.get(
      ".profile-wrapper > app-profile-card > .card > .card-body > .navi > :nth-child(4) > .navi-link"
    ).should("be.visible").click();
    // Select interests and submit the updated information
    cy.get(":nth-child(1) > .ml-2 > .form-check-input")
      .should("be.visible")
      .check();
    cy.get(":nth-child(2) > .ml-2 > .form-check-input")
      .should("be.visible")
      .check();
    cy.get(":nth-child(1) > .ml-2 > .form-check-input")
      .should("be.visible")
      .uncheck();
    cy.get(":nth-child(2) > .ml-2 > .form-check-input")
      .should("be.visible")
      .uncheck();
      // Would you like to receive personalized recommendations to help achieve your future goals?  button
      cy.get(
        "#mat-button-toggle-1-button > .mat-button-toggle-label-content"
      ).click();
      // Uploading the pdf
      cy.get("input[type='file']").attachFile("notes_Coding.pdf");
        // checking toast message
      cy.get("#toast-container")
      .should("be.visible")
      .contains("Transcript uploaded successfully");
      // deleting the pdf
      cy.get(".image-input > .btn.ng-star-inserted").click();
      cy.get("button.btn-success[type='field.btntype']").click();
        // checking delete toast message
      cy.get("#toast-container").should("be.visible").contains("Transcript successfully deleted");
        // saving interest details
      cy.get(
        "#mat-button-toggle-2-button > .mat-button-toggle-label-content"
      ).click();
      cy.get(".card-toolbar > .btn-success").click();
      // checking interest page
     cy.url().should("include", "/user-profile/my-interests");
  })
    

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