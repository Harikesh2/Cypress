
# Setting Up Cypress

### 1. Make sure you have NodeJS config

### 2. Make sure you have a Code Editor VS Code 

### 3. create a new folder for project & open in VS Code

### 4. create `package.json` file in that project.

```
npm i init

```
### 5. For install the Cypress 

```
npm install cypress --save -dev

```

### 6. For starting the Cypress

```
npx cypress open 

OR

node_modules/.bin/cypress open 

```


# Writing Your First Test (Spec) file

### 1. first go to the e2e folder and create a new specification (spec) file.

### 2. Need to create with `.cy.js` extension.

### 3. Cypress follow the same mocha framework

``` javascript

describe('Suite Name ',function () {
    it('Test No. 1 ', function () {
        
    })
    
    it('Test No. 2 ', function () {
        
    })
    
    it('Test No. 3 ', function () {
        
    })
    
})

<!-- BY USING ARROW FUNCTION -->

describe('Suite Name ', ()=>{
    // we can fire call back as well
    it('Test No. 1 ',  ()=> {
        
    })
    
})
```

### 4. For visiting any url we use `visit` command with `cy` 

```javascript 

 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

```

### 5. writing our first cypress suite case 

``` javascript

describe('Suite Name ',function () {
    it('Test No. 1: verify the title', function () {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq','OrangeHRM')
    })
    
    it('Test No. 2: verify the title negative', function () {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq','OrangeRM')
    })
        
})


```

### 6. for executing the cypress in terminal we can use command.

it will follow headless mode and in backend the whole code will executed..

```
npx cypress run (headless Mode)
```

#### For running this in headed mode where we see browser we can use 

```
npx cypress run --headed
```

#### For running a specific file in terminal we use 

```
npx cypress run --spec (file path)
```

#### By default cypress run in terminal with electron browser, for changing that.

```
npx cypress run --browser chrome 
```

### 7. Hierarchy model in cypress

#### Test Suites ---> TestCase --> Test Steps

#### Spec File (cy.js) ---> describe blocks(test suites) ---> it blocks (tests)


#  LOCATORS IN CYPRESS (CSS AND XPATH)

### 1. A locator is a way to identify elements on a page.

In cypress there are 2 types of locator:

1. CSS Locator
2. XPATH Locator (Deprecated)

### 2. for getting the locator in cypress we have to use a command 

```
cy.get(locator)

```

### 3. for accessing the cy command in every spec file we have to add a command 

```
/// <reference types= "Cypress"/>
```

in `commands.js` file which is present in `Support` folder.

## CSS Selector Locator

1. In css selector locator we have four type of combination which are as follows:-

tag id  (here tag is optional)

tag class

tag attribute

tag class attribute 

### SYNTAX

```
#id
.class
[attribute = 'value']
.class [attribute = 'value']

```
for getting any particular id or class we can use the `selector hub` ( Chrome extension).


## XPATH Selector Locator (DEPRECATED)


 

 # CYPRESS ASSSERTIONS

 ## What is Assertion?
 ### Assertions describe the desired state of your `elements`, your `objects`, and your application.



## In cypress basically two type of assertion is there which is import from `chai` libarary in cypress.

## 1. Implicit Assertions

#### should
#### and

## 2. Explicit Assertions

#### expect (Behaviour Driven Development)
#### assert (Test Driven Development)


### Implicit Assertion
#### should assertion

Should assertion contain two parameter.

```
should('Key', 'Value');
```
There are many Key which are supported by the should.

```javascript
cy.visit("https://globalshala-iam.ml/auth/login")

        // include is used to check the 
        cy.url().should('include', 'globalshala');
        cy.url().should('eq',"https://globalshala-iam.ml/auth/login")
        cy.url().should('contain',"auth")

```
`url()` : used to capture the url 

`eq` : to check the equailty

`contain` : to check url have those word or not.

`include` : to check url include this word or not.

#### and assertion

And is just a inhancement, instead
putting multiple should we can use `and` .

```javascript
  cy.title().should('include',"signup")
        .and('not.contain','Harikesh')

        cy.get('.pb-13 > .text-muted').should("be.visible");
        cy.get('.pb-13 > .text-muted').should("exist").and('have.value', 'harikesh')
```

`title()` : used to get the title.

`not.contain` : used to check this is not contain in particular tag.

`be.visible`: used to check it is visible or not.

`exist`: used to check its exist or not.

`have.value` : to check that value is there or not.


## Explicit Assertion

### Expect

Expect is basically used in BDD Type Approach, where we are putting the assertion as follows:

```javascript

it('Explicit Assertion', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")

        cy.get("[placeholder='Username']").type("admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "xyz";
        cy.get(".oxd-userdropdown-name").then ((x)=>{
            let actualName = x.text();


            // BDD Type ASSERTION
            expect(actualName).to.equal(expName);
            expect(actualName).to.not.equal(expName);
        })
    })
})
```

`text()` : used to get the file text data.

`to.equal()` : used to check element are equal or not.

`to.not.equal`: used to check element will not equal.


### Assert 

Work same as `expect`, However used for Test Driven Development.

```javascript

it('Explicit Assertion', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")

        cy.get("[placeholder='Username']").type("admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "xyz";

        cy.get(".oxd-userdropdown-name").then ((x)=>{
            let actualName = x.text();
            
            // TDD Type ASSERTION
            assert.equal(actualName,expName)
            assert.notEqual(actualName,expName)
        })
    })

```


