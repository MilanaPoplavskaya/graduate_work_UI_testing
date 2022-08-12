import { PASSWORD_SELECTORS } from "../selectors/selectorsForNegativeTests/passwordSelector";
import { ERROR_MESSAGE } from "../selectors/selectorsForNegativeTests/errorMessageSelectors";
import { REGISTER_SELECTOR_REGISTRATION_PAGE } from "../selectors/selectorsForNegativeTests/registrationPageSelectors";
import { PHONE_NUMBER } from "../selectors/selectorsForNegativeTests/phoneNumberSelectors";

const { registerButton } = REGISTER_SELECTOR_REGISTRATION_PAGE;
const { passwordErr, confirmPasswordErr, confirmPasswordField } = PASSWORD_SELECTORS;
const { errorMessage } = ERROR_MESSAGE;
const { phoneNumberErr } = PHONE_NUMBER;

Cypress.Commands.add("RegisterWithoutNumber", (): void => {
    cy.get(phoneNumberErr).should("be.visible");
});
Cypress.Commands.add("RegisterWithInvalidNumber", (expectedInvalidNumber: string): void => {

    cy.get(errorMessage).should("be.visible").and("contain.text", expectedInvalidNumber);
});
Cypress.Commands.add("RegisterWithoutSms", (expectedInvalidSms: string): void => {

    cy.get(errorMessage).should("be.visible").and("contain.text", expectedInvalidSms);
});
Cypress.Commands.add("RegisterWithoutVerification", (password: string, expectedRequiredField: string): void => {
    cy.get(confirmPasswordErr).should("be.visible").and("contain.text", expectedRequiredField);
});
Cypress.Commands.add("RegisterWithoutPassword", (password: string, expectedRequiredField: string): void => {
    cy.get(confirmPasswordField).type(password);
    cy.get(passwordErr).should("be.visible").and("contain.text", expectedRequiredField);
});
Cypress.Commands.add("RegisterWithInvalidPassword", (expectedInvalidPassword: string): void => {
    cy.get(passwordErr).should("be.visible").and("contain.text", expectedInvalidPassword);
});
Cypress.Commands.add("RegisterWithInvalidVerification", (expectedPasswordsDontMatch: string): void => {
    cy.get(errorMessage).should("be.visible").and("contain.text", expectedPasswordsDontMatch);
});