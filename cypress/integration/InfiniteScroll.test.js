describe("Tests the functionality of infinite scroll", () => {
    before(()=>{
        cy.visit('http://localhost:3000');
        cy.waitForReact(3000);
    })
    
    it("Infinite Scroll", () => {
      cy.waitFor(10000);
      cy.scrollTo('center');
    });
  });