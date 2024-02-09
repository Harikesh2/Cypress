

# Interacting with the Radio Button and Checkbox

## Assertion of Radio Button

![type_One_checkbox](https://github.com/Harikesh2/Weather-App/assets/116285934/dd6901a1-d1e6-435e-b4eb-8bb378248071)

```javascript

describe('check ui Element', ()=>{
    it('Checking Radio Button', ()=>{

        cy.visit("")
        // checking the visibltie of Radio Button
        cy.get("").should("be.visible");
        cy.get("").should("be.visible");

        // selecting the Radio Button 
        cy.get("css Seclector of Button").check().should('be.check')
        cy.get("css Seclector of Button").check().should('not.be.check')

    
    })

})
```
`check()` : used to checked the check box.

`uncheck()`: in radio button we can't use uncheck because it automatically un-select the second one.

## Assertion on checkboxs

![checkbox](https://github.com/Harikesh2/Weather-App/assets/116285934/918034ee-e4d4-480f-ad34-4ad1914c9bdf)


```javascript

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
```

`first()` : to select first option.

`last()` : to select last option.


## Automation of Dropdown 

## Dropdown (With Select)

![type_one_dropdown](https://github.com/Harikesh2/Weather-App/assets/116285934/616896ad-f4d5-4714-96b9-d9d22a4595be)




```javascript

it('dropdown with select',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country").select('India').should('have.value','Italy')

    })

```

`select`: used to select the item.


