describe('Login and Logout Tests', function() {
    it('types username and password to log in', function() {
        cy.visit('http://blog.ezpz.uz/accounts/login');
        cy.get('input[name="username').type('admin');
        cy.get('input[name="password').type('password');
        cy.get('.btn').click();
    });

    it('it logs out the user', function(){
        cy.contains('Logout,').click();
    });

})