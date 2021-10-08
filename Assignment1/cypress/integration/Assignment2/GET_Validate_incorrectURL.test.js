/// <reference types="cypress" />

describe('GET METHOD for jsonplaceholder.typicode', () => {
   
    it('should return a list with all UserId', () => {
        cy.request({
            method: 'GET',
            //Printing out all the users 
            url: 'https://jsonplaceholder.typicode.com/post'
        })
            .should((response) => {
                //printing out the result
                cy.log(JSON.stringify(response.body)),
                //testing that status code is 404
                expect(response.status).to.eq(404)

            });
    });

});