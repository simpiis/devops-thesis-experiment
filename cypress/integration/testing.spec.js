describe("Integration Test", () => {
  // tests go here
  it("Can open first page", () => {
    cy.visit("/");
    cy.contains("Hello World!")
  });
});