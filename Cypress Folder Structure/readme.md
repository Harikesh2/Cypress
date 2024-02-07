# Cypress Folder Structure

## Download files (Download folder) :-
Any files downloaded while testing an application's file download feature will be stored in the downloadsFolder which is set to cypress/downloads by default.

## Test (e2e folder) :- 
 All test cases are stored under this folder. This folder contains the actual test files, written in JavaScript, that define the tests to be run.

## Static Test Data (fixture folder):-

Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in JSON format.


## Screenshots (Screenshots folder) :-

Cypress comes with the ability to take screenshots, whether you are running via cypress open or cypress run, even in CI.

## support (Support folder):

 This folder contains `e2e.js` and `commands.js` files. This `e2e.js` file is run before every single spec file. The support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your spec files.


 ## node_modules :

 Contain depend modules of cypress.


 ## cypress.config.js :
 This file is used to store any configuration specific to Cypress. 

 ## package.json
This file contain dependencies regarding the app.

