import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I visit the index page", () => {
  cy.visit("/");
});

Then("I should see the correct header", () => {
  cy.get('[data-test="main-header"]').contains("Welcome to Next.js");
});
