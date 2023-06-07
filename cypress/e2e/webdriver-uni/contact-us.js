/// <reference types="Cypress" />

const allFieldsError = "Error: all fields are required";
const invalidEmailError = "Error: Invalid email address";

describe("Test Constact Us form via WebDriverUni", () => {
  it("Should be able submit a successful submission via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us").click({ force: true });
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Swanson");
    cy.get('[name="email"]').type("hallanderlol@gmail.com");
    cy.get("textarea.feedback-input").type(
      "I was totally not happy with the order. Won't order ever again"
    );
    cy.get('[type="submit"]').click();
  });

  it("Should not be able submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us").click({ force: true });
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("Blogs");
    cy.get("textarea.feedback-input").type(
      "I was totally happy with the order"
    );
    cy.get('[type="submit"]').click();

    // cy.contains("Error: all fields are required").should("be.visible");
    // cy.contains("Error: Invalid email address").should("be.visible");

    cy.get("body").then(($body) => {
      expect($body.text()).to.include(allFieldsError);
      expect($body.text()).to.include(invalidEmailError);
    });
  });
});
