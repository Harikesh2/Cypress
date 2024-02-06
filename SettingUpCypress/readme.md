
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