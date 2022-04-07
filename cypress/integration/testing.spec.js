describe("Integration Test", () => {
  // tests go here
  it("Can open first page", () => {
    cy.visit("/");
    cy.contains("Hello World!")
  });
  it("Is on login page", () => {
    cy.location("href").should("eq", "http://localhost:3001/login") // possibly just /login
  });
});