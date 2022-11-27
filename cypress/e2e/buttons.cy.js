//testing for signup
describe('Testing for buttons and opening new pages', function() {

  it('opens home page', function() {
    cy.visit('http://blog.ezpz.uz/');
  });
  it('opens login page', function(){
        cy.contains('Login').click();
        cy.wait(5000);
    });
    it('goes back to home page', function(){
        cy.contains('Home').click();
        cy.wait(2000);
    });
    it('opens sign-up page', function(){
        cy.contains('Sign-up').click();
        cy.wait(5000);
    });
    it('goes back to home page', function(){
        cy.contains('DJANGO BLOG').click();
        cy.wait(2000);
    });
    it('opens login page', function(){
        cy.contains('Login').click();
        cy.wait(3000);
    });
    it('opens sign-up page', function(){
        cy.contains('Sign-up').click();
        cy.wait(2000);
    });
    it('goes back to home page', function(){
        cy.contains('DJANGO BLOG').click();
        cy.wait(2000);
    });
});