describe("A1.by testing", () => {
    beforeEach("Open main page before each test", () => {
        cy.visit("/");
    });
    it("Check input field: positive", () => {
        cy.SearchProductInInputField("iphone 13", "Смотреть все найденное");
    });
    it("Check empty cart: positive", () => {
        cy.GetCartInformation("Корзина пуста");
    });
    it("Check choosing a tariff", () => {
        cy.ChooseTariff("Тарифы");
    });
    it("Check replenishment of the balance: positive", () => {
        cy.TopUpBalance();
    });
    it("Check login: positive", () => {
        cy.CreatePersonalAccount("Мобильная связь");
    });
});