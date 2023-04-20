import { login } from "../../page_objects/login.page";
import { users } from "../../../data/database.json";
import { DataTestSelector, TextEnums } from "../../fixtures/enums/signInPageEnums";
import faker from "@faker-js/faker";

beforeEach("Visit website", () => {
  cy.visit("http://localhost:3000");
});

it("Validate elements visibility on sign in page", () => {
  login.getPageLogo.should("have.attr", "xmlns", "http://www.w3.org/2000/svg");
  login.getPageTitle.should("contain.text", TextEnums.signIn);
  login.getUsernameField.should("be.visible");
  login.getPasswordField.should("be.visible");
  login.getCheckBox.should("be.visible");
  login.getCheckBoxText.should("contain.text", "Remember me").and("be.visible");
  login.getSignInBtn.should("be.enabled").and("be.visible"); //bug, it should be disabled when page is displayed
  login.getSignInBtn.should("contain.text", "Sign In").and("be.visible"); //should be same capitalisation in title and within the button
  login.getSignUpLink
    .should("have.attr", "href", "/signup")
    .and("contain.text", "Don't have an account? Sign Up")
    .and("be.visible");
});

it("Validation messages for username and password fields", () => {
  login.clickSignInSubmit();
  login.getUsernameField.should("contain.text", "Username is required");
  login.getPasswordField.type(`${faker.lorem.word(3)}`);
  login.getPasswordField.should("contain.text", "Password must contain at least 4 characters");
});

it("Invalid login", () => {
  login.getUsernameField.type("InvalidUser");
  login.getPasswordField.type("InvalidPass");
  login.clickSignInSubmit();
  cy.get(`[data-test=${DataTestSelector.signInError}]`)
    .should("contain.text", "Username or password is invalid")
    .and("be.visible");
});
