declare namespace Cypress {
    interface Chainable<Subject> {
        GoToTheRegisterPage(): void;

        EnterPassword(password: string, confirmPassword: string): void;

        ClickOnTheButtonRegister(): void;

        EnterPhoneNumber(number: string): void;

        RegisterWithoutNumber(): void;

        RegisterWithInvalidNumber(expectedInvalidNumber: string): void;

        RegisterWithoutSms(expectedInvalidSms: string): void;

        RegisterWithoutVerification(password: string, expectedRequiredField: string): void;

        RegisterWithoutPassword(password: string, expectedRequiredField: string): void;

        RegisterWithInvalidPassword(expectedInvalidPassword: string): void;

        RegisterWithInvalidVerification(expectedInvalidVerification: string): void;
    }
}