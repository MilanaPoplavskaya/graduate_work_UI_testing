import { INPUT_SELECTORS } from "../selectors/selectorsForPositiveTests/inputSelectors";
import { CART_SELECTORS } from "../selectors/selectorsForPositiveTests/cartSelectors";
import { TARIFF_SELECTORS } from "../selectors/selectorsForPositiveTests/tariffsSelectors";
import { BALANCE_SELECTORS} from "../selectors/selectorsForPositiveTests/balanceSelectors";
import { USER_ICON } from "../selectors/commonSelectors/userIconSelector";
import { ACCOUNT_SELECTORS } from "../selectors/selectorsForPositiveTests/accountSelectors";
import { APP_SELECTORS } from "../selectors/selectorsForPositiveTests/appSelectors";
import { QUESTION_SELECTORS } from "../selectors/selectorsForPositiveTests/questionsSelectors";
import { LOGIN } from "../selectors/commonSelectors/loginSelector";

const { searchInput, inputField, resultOfSearch, resultButton } = INPUT_SELECTORS;
const { cartButton, textCart, linkToStore } = CART_SELECTORS;
const { tariffsButton, tariffsPanel, titleOfTariffs } = TARIFF_SELECTORS;
const { balanceButton, buttonToPayment } = BALANCE_SELECTORS;
const { userIcon } = USER_ICON;
const { typesOfConnection, phoneNumber } = ACCOUNT_SELECTORS;
const { linkToApp, fieldApps, listOfApps } = APP_SELECTORS;
const { askButton, coverageButton, iconQuestions } = QUESTION_SELECTORS;
const { loginButton } = LOGIN;

Cypress.Commands.add("SearchProductInInputField", (searchedProduct: string, expectedResult: string): void => {
    cy.get(searchInput).first().click();
    cy.get(inputField).type(searchedProduct);
    cy.get(resultOfSearch).within(() => {
        cy.get(resultButton).scrollIntoView().should("have.text", expectedResult);
    });
});
Cypress.Commands.add("GetCartInformation", (emptyBasket: string): void => {
    cy.get(cartButton).click();
    cy.get(textCart).should("contain", emptyBasket);
    cy.get(textCart).within(() => {
        cy.get(linkToStore).should("be.visible");
    });
});
Cypress.Commands.add("ChooseTariff", (tariffs: string): void => {
    cy.get(tariffsButton).first().scrollIntoView().click();
    cy.get(tariffsPanel).should("be.visible");
    cy.get(titleOfTariffs).should("have.text", tariffs);
});
Cypress.Commands.add("TopUpBalance", (): void => {
    cy.get(userIcon).click();
    cy.get(balanceButton).click();
    cy.get(buttonToPayment).first().should("be.visible");
});
Cypress.Commands.add("CreatePersonalAccount", (communication: string): void => {
    cy.get(userIcon).click();
    cy.get(loginButton).last().click();
    cy.get(typesOfConnection).should("be.visible").and("have.text", communication);
    cy.get(phoneNumber).should("be.visible");
});
Cypress.Commands.add("InstallMobileApp", (): void => {
    cy.get(linkToApp).click();
    cy.get(fieldApps).within(() => {
        cy.get(listOfApps).should("be.visible");
    });
});
Cypress.Commands.add("AskQuestions", (askAQuestion: string, coverageQuestions: string): void => {
    cy.get(iconQuestions).click();
    cy.get(askButton).should("be.visible").and("have.text", askAQuestion);
    cy.get(coverageButton).should("be.enabled").and("have.text", coverageQuestions);
});

