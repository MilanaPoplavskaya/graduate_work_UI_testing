import { inputSelectors } from "../../selectors/inputSelectors";
import { cartSelectors } from "../../selectors/cartSelectors";
import { tariffsSelectors } from "../../selectors/tariffsSelectors";
import { balanceSelectors } from "../../selectors/balanceSelectors";
import { userIconSelector } from "../../selectors/userIconSelector";
import { accountSelectors } from "../../selectors/accountSelectors";

const { searchInput, inputField, resultOfSearch, resultButton } = inputSelectors;
const { cartButton, textCart, linkToStore } = cartSelectors;
const { tariffsButton, tariffsPanel, titleOfTariffs } = tariffsSelectors;
const { balanceButton, buttonToPayment } = balanceSelectors;
const { userIcon } = userIconSelector;
const { loginButton, typesOfConnection, phoneNumber } = accountSelectors;

Cypress.Commands.add("SearchProductInInputField", (searchedProduct: string, expectedResult: string): void => {
    cy.get(searchInput).eq(0).click();
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
    cy.get(tariffsButton).eq(0).scrollIntoView().click();
    cy.get(tariffsPanel).should("be.visible");
    cy.get(titleOfTariffs).should("have.text", tariffs);
});
Cypress.Commands.add("TopUpBalance", (): void => {
    cy.get(userIcon).click();
    cy.get(balanceButton).eq(1).click();
    cy.get(buttonToPayment).eq(0).should("be.visible");
});
Cypress.Commands.add("CreatePersonalAccount", (communication: string): void => {
    cy.get(userIcon).click();
    cy.get(loginButton).eq(2).click();
    cy.get(typesOfConnection).should("be.visible").and("have.text", communication);
    cy.get(phoneNumber).should("be.visible");
});
