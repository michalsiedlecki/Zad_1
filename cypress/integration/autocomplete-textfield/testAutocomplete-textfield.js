/// <reference types="cypress" />
import  { autocompleteTextfield } from "../../support/pages/autocompleteTextfield.js"

describe('Tests for Autocomptete-textfield', function(){
  
  beforeEach(function() {
    autocompleteTextfield.navigate()
  })

  it('Check autocoplete textfield', function() {
    cy.fixture('autocompleteTextfield').then( function(testdata){
      this.testdata = testdata
      autocompleteTextfield.setTextFromList(this.testdata.wordInput, this.testdata.index)
      autocompleteTextfield.checkTextfieldValue(this.testdata.wordResult)
    })
    
    })  
})