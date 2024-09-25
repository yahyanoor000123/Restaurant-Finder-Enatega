import { HOST, GRAPHQL_SERVER_URL } from "../../app/utils/constants";

// Describe test for User Location Fetching in Text Area
describe("User Location Fetching", () => {
  it("should get the current location of the user and display it in the text area", () => {
    cy.visit(HOST);
    cy.get("button").contains("Share Location").click();
    cy.get("textarea").should("not.be.empty");
  });
});

// Describe test for Dropdown Location Display
describe("Dropdown Location Display", () => {
  it("should display a user location (any city or address) in the dropdown after fetching location", () => {
    cy.visit(HOST);
    cy.get("button").contains("Share Location").click();
    cy.get(".p-dropdown-label").should(($label) => {
      const labelText = $label.text();
      expect(labelText).to.not.equal("Select a location");
      expect(labelText).to.not.be.empty;
    });
  });
});

// Describe test for GraphQL Query
describe("Restaurant Query (GraphQL)", () => {
  it("should send the correct GraphQL query with latitude and longitude after getting user location", () => {
    cy.intercept("POST", GRAPHQL_SERVER_URL, (req) => {
      if (req.body.operationName === "Restaurants") {
        expect(req.body.variables).to.have.property("longitude");
        expect(req.body.variables).to.have.property("latitude");
      }
    }).as("getRestaurantsGraphQL");
    cy.visit(HOST);
    cy.get("button").contains("Share Location").click();
    cy.wait(1000);

    cy.get("textarea").should("not.be.empty");
    cy.get(".p-dropdown-label").should("not.be.empty");
    cy.get("button").contains("Find Restaurants").click();
    cy.wait(1000);
    cy.wait("@getRestaurantsGraphQL", { timeout: 15000 });
  });
});

// Describe test for Restaurant Grid Display
describe("Restaurant Grid Display", () => {
  it("should display restaurants in a grid format for the user location", () => {
    cy.visit(HOST);
    cy.get("button").contains("Find Restaurant").click();
    cy.wait(10000);
    cy.get(".p-card-body").should("have.length.greaterThan", 0);
  });
});
