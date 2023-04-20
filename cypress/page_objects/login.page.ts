import Chainable = Cypress.Chainable;
import { DataTestSelector, TextEnums } from "../fixtures/enums/signInPageEnums";
export const login = {
  // Login page actions
  clickUsernameField() {
    return this.getUsernameField.click();
  },

  clickPasswordField() {
    this.getPasswordField.click();
  },

  checkRemmemberMe() {
    this.getCheckBox.click();
  },
  clickSignInSubmit() {
    this.getSignInBtn.click({ force: true });
  },

  clickSignUp() {
    this.getSignUpLink.click();
  },

  // Login page elements

  get getUsernameField(): Chainable<JQuery<HTMLDivElement>> {
    return cy.get(`[data-test=${DataTestSelector.usernameField}]`);
  },

  get getPasswordField(): Chainable<JQuery<HTMLDivElement>> {
    return cy.get(`[data-test=${DataTestSelector.passwordField}]`);
  },

  get getCheckBox(): Chainable<JQuery<HTMLSpanElement>> {
    return cy.get(`[data-test=${DataTestSelector.remmemberMeCheckBox}`);
  },

  get getSignInBtn(): Chainable<JQuery<HTMLButtonElement>> {
    return cy.get(`[data-test=${DataTestSelector.signInBtn}`);
  },

  get getSignUpLink(): Chainable<JQuery<HTMLAnchorElement>> {
    return cy.get(`[data-test=${DataTestSelector.signUpLink}`);
  },

  get getPageLogo(): Chainable<JQuery<SVGElement>> {
    return cy.get(".makeStyles-logo-3");
  },

  get getPageTitle(): Chainable<JQuery<HTMLHeadingElement>> {
    return cy.get("h1");
  },

  get getCheckBoxText(): Chainable<JQuery<HTMLLabelElement>> {
    return cy.get("label");
  },

  validateSignInTitle() {
    cy.get("h1").should("contain.text", TextEnums.signIn);
  },

  validateAlertColour() {
    cy.get('[data-test="signin-username"] > > fieldset').should(
      "have.css",
      "border-color",
      "rgb(244, 67, 54)"
    );
  },

  validateUsernameAlertText() {
    this.getUsernameField.should("contain.text", "Username is required");
  },

  validatePasswordAlertText() {
    this.getPasswordField.should("contain.text", "Password must contain at least 4 characters");
  },

  validateCheckBoxText() {
    cy.contains("Remember me").should("be.visible");
  },

  validateSignUpLink() {
    this.getSignUpLink.should("have.attr", "href", "/signup");
  },
};
