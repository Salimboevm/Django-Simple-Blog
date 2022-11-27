//testing for login and logout with already existing user
//need to test for posting
describe('Login Test', function() {

  it('types username and password to log in', function() {
    cy.visit('http://blog.ezpz.uz/accounts/login');
    cy.get('input[name="username').type('admin');
    cy.get('input[name="password').type('password');
    cy.get('.btn').click();
    cy.visit('http://blog.ezpz.uz/');
    cy.contains('Create Post').click();
    cy.get('input[name="title').type('This is written by cypress');
    //cy.contains('Content').type('This is written by cypress');
    //cy.get('#id_content_ifr').trigger("click").get('#contenteditable').type("TEST");
    cy.get('#id_content_ifr')
        .its('0.contentDocument.body')
        .type('This is written by cypress');
    cy.contains('Description').type('This is written by cypress');
    cy.contains('OK').click();

  });


});
