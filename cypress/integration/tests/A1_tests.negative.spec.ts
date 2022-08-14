import { INPUT_PASSWORD } from "../../fixtures/forNegativeTests/inputPassword";
import { PHONE_NUMBER } from "../../fixtures/forNegativeTests/inputPhoneNumber";
import { EXPECTED_ERRORS } from "../../fixtures/forNegativeTests/expectedErrors";

const { correctPassword, correctPasswordConfirm, invalidPassword, invalidPasswordConfirm } = INPUT_PASSWORD;
const { invalidNumber, correctNumber } = PHONE_NUMBER;
const { invalidNumberError, smsError, confirmPasswordError, passwordError, requiredField } = EXPECTED_ERRORS;

describe("A1.by testing: negative", () => {
    beforeEach("Open main page before each test", () => {
        cy.visit("/");
        cy.GoToTheRegisterPage();
    });
    it("Check registration form: without phone number", () => {
        cy.EnterPassword(correctPassword, correctPasswordConfirm);
        cy.ClickOnTheButtonRegister();
        cy.RegisterWithoutNumber();
    });
    it("Check registration form: with invalid phone number", () => {
        cy.EnterPhoneNumber(invalidNumber);
        cy.EnterPassword(correctPassword, correctPasswordConfirm);
        cy.ClickOnTheButtonRegister();
        cy.RegisterWithInvalidNumber(invalidNumberError);
    });
    it("Check registration form: without sms", () => {
        cy.EnterPhoneNumber(correctNumber);
        cy.EnterPassword(correctPassword, correctPasswordConfirm);
        cy.ClickOnTheButtonRegister();
        cy.RegisterWithoutSms(smsError);
    });
    it("Check registration form: without confirm password", () => {
        cy.EnterPhoneNumber(correctNumber);
        cy.ClickOnTheButtonRegister();
        cy.RegisterWithoutVerification(correctPassword, requiredField);
    });
    it("Check registration form: without password", () => {
        cy.EnterPhoneNumber(correctNumber);
        cy.ClickOnTheButtonRegister();
        cy.RegisterWithoutPassword(correctPasswordConfirm, requiredField);
    });
    it("Check registration form: with invalid password", () => {
        cy.EnterPassword(invalidPassword, correctPasswordConfirm);
        cy.ClickOnTheButtonRegister();
        cy.RegisterWithInvalidPassword(passwordError);
    });
    it("Check registration form: with invalid confirm password", () => {
        cy.EnterPhoneNumber(correctNumber);
        cy.EnterPassword(correctPassword, invalidPasswordConfirm);
        cy.ClickOnTheButtonRegister();
        cy.RegisterWithInvalidVerification(confirmPasswordError);
    });
});