describe("My Account Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login")
    cy.get("input#email").type("test@blockbuster.com")
    cy.get("input#password").type("123456")
    cy.get("button[type='submit']").click()
    cy.url().should("eq", "http://localhost:5173/myaccount")
  })

  it("should load the my account page with correct URL", () => {
    cy.url().should("eq", "http://localhost:5173/myaccount")
    cy.get("body").should("be.visible")
  })

  it("should display user profile with email and subscription plan", () => {
    cy.get("img").should("be.visible").and("have.attr", "src")
    cy.get("p").contains("Email:").should("be.visible")
    cy.get("p").contains("test@blockbuster.com").should("be.visible")
    cy.get("p").contains("Subscription Plan:").should("be.visible")
    cy.get("a")
      .filter(":visible")
      .should($links => {
        const matchingLink = [...$links].find(link => {
          const text = link.textContent.trim()
          return ["Free Plan", "Standard", "Superstar"].includes(text)
        })

        expect(matchingLink, "found link with valid plan text").to.exist
        expect(matchingLink.getAttribute("href")).to.equal("/subscription")
      })
  })

  it("should display account options buttons", () => {
    cy.get("button").contains("Billing Information").should("be.visible")
    cy.get("button").contains("Parental Controls").should("be.visible")
    cy.get("button").contains("Account Settings").should("be.visible")
  })

  it("should display billing information section when clicked", () => {
    cy.get("button").contains("Billing Information").click()
    cy.get("p").contains("Billing Information:").should("be.visible")
    cy.get("button").contains("Add Card").should("be.visible")
  })

  it("should display add card form when add card button is clicked", () => {
    cy.get("button").contains("Billing Information").click()
    cy.get("button").contains("Add Card").click()
    cy.get("form").should("be.visible")
    cy.get("input[placeholder='Card Number']").should("be.visible")
    cy.get("input[placeholder='Cardholder Name']").should("be.visible")
    cy.get("input[placeholder='Expiration (MM/YY)']").should("be.visible")
    cy.get("input[placeholder='CVC']").should("be.visible")
    cy.get("button").contains("Add Card").should("be.visible")
    cy.get("button").contains("Cancel").should("be.visible")
  })

  it("should display parental controls section with toggle button", () => {
    cy.get("button").contains("Parental Controls").click()
    cy.get("p").contains("Parental Controls:").should("be.visible")
    cy.get("p").contains("Kids Mode:").should("be.visible")
    cy.get("button").should($btn => {
      const text = $btn.text()
      expect(text).to.match(/ON|OFF/)
    })
  })

  it("should display account settings section with inputs and buttons", () => {
    cy.get("button").contains("Account Settings").click()
    cy.get("p").contains("Account Settings:").should("be.visible")
    cy.get("input[placeholder='New image URL']").should("be.visible")
    cy.get("button").contains("Update Picture").should("be.visible")
    cy.get("input[placeholder='Enter password to delete account']").should("be.visible")
    cy.get("button").contains("Delete").should("be.visible")
  })

  it("should allow typing in account settings inputs", () => {
    cy.get("button").contains("Account Settings").click()
    cy.get("input[placeholder='New image URL']")
      .type("https://example.com/image.png")
      .should("have.value", "https://example.com/image.png")
    cy.get("input[placeholder='Enter password to delete account']")
      .type("password123")
      .should("have.value", "password123")
  })

  it("should display news section", () => {
    cy.get("#news-section", { timeout: 5000 }).should("be.visible")
  })
})
