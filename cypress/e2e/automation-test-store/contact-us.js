/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it.only("Should be able to submit sa successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");

    // cy.get(".footerlinks").contains("Contact Us").click();
    // cy.xpath("//a[contains(@href, 'contactW')]");
    cy.get("a[href$='contact']").click();

    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("test@test.com");
    cy.get("#ContactUsFrm_enquiry").type("This was amazing experience");

    cy.get('button[title="Submit"]').click();

    cy.get(".mb40").contains(
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
