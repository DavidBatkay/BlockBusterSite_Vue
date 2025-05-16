import "./home.spec.cy.js"
import "./login.spec.cy.js"
import "./myaccount.spec.cy.js"

describe("Run All Specs", () => {
  it("imports and runs all test specs", () => {
    cy.log("Running all specs: home, login, myaccount")
  })
})
