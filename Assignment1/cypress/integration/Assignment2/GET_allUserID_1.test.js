/// <reference types="cypress" />

describe('GET METHOD for jsonplaceholder.typicode', () => {
   
    it('should return a list with all UserId with id 1 ', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts?userId=1'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body)),
                expect(response.status).to.eq(200)
                //expect(response.body.id).to.eq(102);
                
                
                

            });
    });

});