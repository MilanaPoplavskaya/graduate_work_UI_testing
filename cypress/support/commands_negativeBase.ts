import { USER_ICON } from "../selectors/commonSelectors/userIconSelector";
import { LOGIN } from "../selectors/commonSelectors/loginSelector";
import { PASSWORD_SELECTORS } from "../selectors/selectorsForNegativeTests/passwordSelector";
import { REGISTER_SELECTOR_REGISTRATION_PAGE } from "../selectors/selectorsForNegativeTests/registrationPageSelectors";
import { REGISTER_SELECTOR_LOGIN_PAGE } from "../selectors/selectorsForNegativeTests/loginPageSelector";
import { PHONE_NUMBER } from "../selectors/selectorsForNegativeTests/phoneNumberSelectors";

const { userIcon } = USER_ICON;
const { loginButton } = LOGIN;
const { confirmPasswordField, passwordField } = PASSWORD_SELECTORS;
const { registerButton } = REGISTER_SELECTOR_REGISTRATION_PAGE;
const { registerButtonLogin } = REGISTER_SELECTOR_LOGIN_PAGE;
const { phoneNumberField } = PHONE_NUMBER;

Cypress.Commands.add("GoToTheRegisterPage", (): void => {
    cy.get(userIcon).click();
    cy.get(loginButton).first().click();
    cy.get(registerButtonLogin).first().click();
});
Cypress.Commands.add("EnterPassword", (password: string, confirmPassword: string): void => {
    cy.get(passwordField).type(password);
    cy.get(confirmPasswordField).type(confirmPassword);
});
Cypress.Commands.add("ClickOnTheButtonRegister", (): void => {
    cy.get(registerButton).click();
});
Cypress.Commands.add("EnterPhoneNumber", (number: string): void => {
    cy.get(phoneNumberField).type(number);
});