describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login")
  })

  it("should load the login page with correct URL", () => {
    cy.url().should("eq", "http://localhost:5173/login")
    cy.get("body").should("be.visible")
  })

  it("should display the login form with email and password inputs", () => {
    cy.get("form").should("be.visible")
    cy.get("input#email")
      .should("be.visible")
      .and("have.attr", "type", "email")
      .and("have.attr", "placeholder", "Enter your email")
    cy.get("input#password")
      .should("be.visible")
      .and("have.attr", "type", "password")
      .and("have.attr", "placeholder", "Enter your password")
  })

  it("should display the forgot password link", () => {
    cy.get("a").contains("Forgot your password?").should("be.visible").and("have.attr", "href")
  })

  it("should display the login button with correct text", () => {
    cy.get("button[type='submit']")
      .should("be.visible")
      .and("contain.text", "Log In")
      .and("have.class", "bg-blue-600")
  })

  it("should allow typing in email and password fields", () => {
    cy.get("input#email").type("test@example.com").should("have.value", "test@example.com")
    cy.get("input#password").type("password123").should("have.value", "password123")
  })
})
