describe("Tests the functionality of the recenttly searched pokemon", () => {
    before(()=>{
        cy.visit('http://localhost:3000');
        cy.waitForReact(3000);
    })
  
    it("Searches for a new Pokemon and checks if pokemon is in recents searched", () => {
      cy.get(".searchInput").clear();
      cy.get(".searchInput").type("bulbasaur");
      cy.get('.list').eq(0).click();
      cy.get(".recentpoke").contains( "bulbasaur");
    });

  });