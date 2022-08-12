declare namespace Cypress {
    interface Chainable<Subject> {
        SearchProductInInputField(searchedProduct: string, expectedResult: string): void;

        GetCartInformation(emptyBasket: string): void;

        AddingItemsToTheCart(): void;

        ChooseTariff(tariffs: string): void;

        TopUpBalance(): void;

        CreatePersonalAccount(communication: string): void;

        InstallMobileApp(): void;

        AskQuestions(askAQuestion: string, coverageQuestions: string): void;
    }
}