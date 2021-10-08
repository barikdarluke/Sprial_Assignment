describe('GET METHOD for jsonplaceholder.typicode', () => {
   
    it('should return a list with all UserId with id 1 ', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts?id=100'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body)),
                expect(response.status).to.eq(200)
                
                
                

            });
    });

});