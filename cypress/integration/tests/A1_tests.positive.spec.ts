import { EXPECTED_VALUES } from "../../fixtures/forPositiveTests/expectedValuesForPositiveTests";
import { INPUT_TEXT } from "../../fixtures/forPositiveTests/inputTextForPositiveTests";

const { viewAllFound, emptyBasket, tariffs, communication, askAQuestion, coverageQuestions } = EXPECTED_VALUES;
const { iphone } = INPUT_TEXT;

describe("A1.by testing: positive", () => {
    beforeEach("Open main page before each test", () => {
        cy.visit("/");
    });
    it("Check input field: positive", () => {
        cy.SearchProductInInputField(iphone, viewAllFound);
    });
    it("Check empty cart: positive", () => {
        cy.GetCartInformation(emptyBasket);
    });
    it("Check choosing a tariff", () => {
        cy.ChooseTariff(tariffs);
    });
    it("Check replenishment of the balance: positive", () => {
        cy.TopUpBalance();
    });
    it("Check login: positive", () => {
        cy.CreatePersonalAccount(communication);
    });
    it("Check install a mobile app", () => {
        cy.InstallMobileApp();
    });
    it("Check icon with questions", () => {
        cy.AskQuestions(askAQuestion, coverageQuestions);
    });
});