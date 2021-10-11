describe("Tests the search functionality of the PokeSearch", () => {
    before(()=>{
        cy.visit('http://localhost:3000');
        cy.waitForReact(3000);
    })
    it("Searches for a new Pokemon", () => {
      cy.get(".searchInput").type("Pik").should("have.value","Pik");
    });
  });