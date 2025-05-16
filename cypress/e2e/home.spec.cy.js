describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it("should load the homepage with correct URL and title", () => {
    cy.url().should("eq", "http://localhost:5173/")
    cy.get("body").should("be.visible")
    cy.title().should("not.be.empty")
  })

  it("should display the sidebar component", () => {
    cy.get("#sidebar").should("be.visible")
  })

  it("should display the footer component", () => {
    cy.get("#footer").should("be.visible")
  })

  it("should display the side toggle component", () => {
    cy.get("#side-toggle").should("be.visible")
    cy.get("#side-toggle").find("button").should("exist")
  })

  it("should display the movie grid with movies", () => {
    cy.get("#movie-grid").should("be.visible")
    cy.get("#movie-grid").find(".movie-item").should("have.length.greaterThan", 0)
  })

  it("should display correct number of movies on desktop viewport", () => {
    cy.viewport(1280, 720)
    cy.get("#movie-grid").find(".movie-item").should("have.length", 5)
  })

  it("should display correct number of movies on tablet viewport", () => {
    cy.viewport(768, 720)
    cy.get("#movie-grid").find(".movie-item").should("have.length", 6)
  })
})
