import { login } from "../../page_objects/login.page";
import { users } from "../../../data/database.json";
import { DataTestSelector, TextEnums } from "../../fixtures/enums/signInPageEnums";
import faker from "@faker-js/faker";

beforeEach("Visit website", () => {
  cy.visit("http://localhost:3000");
});

it("Sign up new account", () => {});
