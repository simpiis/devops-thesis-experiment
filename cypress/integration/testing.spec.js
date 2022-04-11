describe("Integration Test", () => {
  // tests go here
  it("Can open first page", () => {
    cy.visit("/");
    cy.contains("Hello World!");
  });
  it("Is on login page", () => {
    cy.visit("/login");
    cy.url().should('include', '/login');
  });
  it("Can fill the login form", () => {
    cy.get('input[id="username"]').type("André").should("have.value", "André");
    cy.get('input[id="password"]').type("123456789");
  });
  it("Can submit the login form", () => {
    cy.get("form").submit();
  });
  it("Goes to user page", () => {
    cy.url().should('include', '/user');
  });
  it("Press add button"), () => {
    cy.get(".addBtn").click();
    cy.get(".valueText").should("have.value", "1")
  }
  it("Press subtract button"), () => {
    cy.get(".subBtn").click();
    cy.get(".valueText").should("have.value", "0")
  }
});