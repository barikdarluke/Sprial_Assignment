describe('GET METHOD for jsonplaceholder.typicode', () => {
   // context('GET typicode.com/posts', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body)),
                    expect(response.status).to.eq(200)

                });
        });
    //});
});