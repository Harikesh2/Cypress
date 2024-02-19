/// <reference types='cypress'/>


describe('University Page', ()=>{
    
    it('automation of iframe in University Page', ()=>{
     cy.visit("https://globalshala-iam.ml/external/partner/000000000GB102A6JB98182ZHC")
    //  cy.get('iframe')
    //   .its("0.contentDocument").its("body").then(cy.wrap).wait(2000).find('[aria-label="Play"]').should('be.visible');  

    cy.get('iframe').its("contents").then(cy.wrap);
    })
  })
  




         
// .its("contents")
//      .then(cy.wrap)
            


  

  // .find('[class="ytp-popup ytp-contextmenu"]').should('exist') 
  // cy.get('#bp-web-widget')
  // .then(($iframe) => {

  //   cy.log($iframe);
  //   // const iframeBody = $iframe.contents().find('[class="bpw-layout bpw-chat-container bpw-anim-fadeIn"]')
  //   // cy.wrap(iframeBody).clear().type("Hi Bot")


  //   cy.wrap($iframe.contents().find('[class="bpw-layout bpw-chat-container bpw-anim-fadeIn"]')).should('exist').then(($iframebody)=>{
  //     cy.wrap($iframebody).should('be.visible')
  //   })
      
  //      })






          

        // cy.log(iframe.contents().body)
        // cy.wrap(iframe.contents().body).get('[title="YouTube video player"]')
        // cy.log(cy.wrap(iframe.contents().body));


      


        // cy.wrap(iframe.contents().find('body')).within(() => {
        //     // Use Cypress commands to interact with elements inside the iframe
        //     cy.get('[title="YouTube video player"]').should('exist');
        //   });






  // let iframe= cy.get("iframe[title='YouTube video player']")
        //   .its('0.contentDocument')
        //   .should('exist')
        //   .then(cy.wrap)
        
        //   iframe.contains('youtube')

        // loaded the frame
        // cy.frameLoaded("iframe[title='YouTube video player']")
        // working with frame
        // cy.iframe("iframe[title='YouTube video player']")


                // then((iframe)=>{

        //   console.log(iframe.contents());
        //   cy.wrap(iframe).its('0.contentDocument.body')




        // })

      //  const iframe = cy.get('.youtube-video > iframe')
      //                       .then(cy.wrap);

      //       iframe.clear()
