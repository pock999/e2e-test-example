/// <reference types="cypress" />

const TestData = require('../../fixtures/example.json');

// should('have.text', 'wiki'); => 該元素應該要有wiki的字樣
// should('have.class', 'test'); => 該元素應該要有test的class

describe('wiki', () => {
  context('show', () => {
    beforeEach(() => {
      cy.visit('https://zh.wikipedia.org/wiki/Wiki');
    });

    it('title', () => {
      cy.get('#firstHeading').should('have.text', 'wiki');
    });

  });

  context('search', () => {
    beforeEach(() => {
      cy.visit('https://zh.wikipedia.org/wiki/Wiki');
    });

    it('search test', () => {
      cy.get('#searchInput').type(TestData.searchText);
      cy.get('#searchButton').click();
      cy.get('#firstHeading').should('have.text', TestData.searchText);
    });

  });
});