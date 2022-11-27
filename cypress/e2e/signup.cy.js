//testing for signup
describe('Testing for signup', function() {

  it('Types username, password(2 times) and clicks signup', function() {
    cy.visit('http://blog.ezpz.uz/accounts/signup/');
    cy.get('input[name="username').type('user2');
    cy.get('input[name="password1').type('djangoblog');
    cy.get('input[name="password2').type('djangoblog');
    cy.get('.btn').click();

  });
});