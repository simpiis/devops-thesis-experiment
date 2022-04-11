describe("Integration Test", () => {
  // tests go here
  it("Can open first page", () => {
    cy.visit("http://localhost:3001/").co;
    cy.contains("Hello World!");
  });
  it("Is on login page", () => {
    cy.visit("http://localhost:3001/login.html");
    cy.url().should('include', '/login');
  });
  it("Can fill the login form", () => {
    cy.get('input[id="username"]').type("André").should("have.value", "André");
    cy.get('input[id="password"]').type("123456789");
  });
  it("Can submit the login form", () => {
    cy.get('button[id="submitBtn"]').click();
  });
  it("Goes to user page", () => {
    cy.url().should('include', '/user.html');
  });
  it("Press add button", () => {
    cy.get('button[id="addBtn"]').click();
    cy.get('label[id="valueText"]').should("have.text", "1")
  });
  it("Press subtract button", () => {
    cy.get('button[id="subBtn"]').click();
    cy.get('label[id="valueText"]').should("have.text", "0");
  });
});