/// <reference types="cypress" />

describe('Google Landing Page', () => {
    //beforeEach is excuted before the it block
     beforeEach(() => {
         //selecting screen size 
         cy.viewport(1280, 720)
     
         //visiting google landing page
         cy.visit('https://www.google.com/')
         
         //validaing google landing page
         cy.url().should('contains','google.com/')
       })
 
       it('As a user i should be able to Search for Duck', () => {
         cy.get('.gLFyf').type('Ducks {Enter}');
         //cy.contains(':nth-child(3) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
         cy.url().should('contains','Ducks');
         cy.contains('Duck').should('exist');
         cy.contains('Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are also members of the same family.').should('exist');
     })
 })