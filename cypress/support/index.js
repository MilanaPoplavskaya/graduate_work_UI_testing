import "./commands_positive";
import "./commands_negative";
import "./commands_negativeBase"

require("@shelex/cypress-allure-plugin");

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});