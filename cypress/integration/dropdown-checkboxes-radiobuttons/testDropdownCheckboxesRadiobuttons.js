/// <reference types="cypress" />
import  { dropDownCheckboxesRadiobuttonsPage } from "../../support/pages/dropDownCheckboxesRadiobuttonsPage.js"

describe('Tests for Dropdown, radio buttons and checkboxes', function(){
  
  beforeEach(function() {
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
    })
    dropDownCheckboxesRadiobuttonsPage.navigate()
  })

  it('Check First Dropdown', function() {
    for (var i = 0; i< this.testdata.backendLanguage.length; i++){ 
      dropDownCheckboxesRadiobuttonsPage.chooseBackendLanguage(this.testdata.backendLanguage[i])
    }
  })

  it('Check Second Dropdown', function() {
    for (var i = 0; i< this.testdata.tools.length; i++){ 
      dropDownCheckboxesRadiobuttonsPage.chooseTool(this.testdata.tools[i])
    }
  })

  it('Check Third Dropdown', function() {
    for (var i = 0; i< this.testdata.frontLanguage.length; i++){ 
      dropDownCheckboxesRadiobuttonsPage.chooseFrontLanguag(this.testdata.frontLanguage[i])
    }
  })
})
