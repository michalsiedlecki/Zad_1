/// <reference types="cypress" />
import  { dropDownCheckboxesRadiobuttonsPage } from "../../support/pages/dropDownCheckboxesRadiobuttonsPage.js"

describe('Tests for Dropdown, radio buttons and checkboxes', function(){
  
  beforeEach(function() {
    dropDownCheckboxesRadiobuttonsPage.navigate()
  })

  it("Check that First Dropdown has the correct value for the option to choose from", function (){
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageDropDownNumberOfOptions(this.testdata.backendLanguage.length)
    })
  })

  it("Check that Second Dropdown has the correct value for the option to choose from", function (){
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageDropDownNumberOfOptions(this.testdata.tools.length)
    })
  })

  it("Check that Third Dropdown has the correct value for the option to choose from", function (){
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageDropDownNumberOfOptions(this.testdata.frontLanguage.length)
    })
  })
  
  it('Check First Dropdown', function() {
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      for (var i = 0; i< this.testdata.backendLanguage.length; i++){ 
        dropDownCheckboxesRadiobuttonsPage.chooseBackendLanguage(this.testdata.backendLanguage[i])
        dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageValue(this.testdata.backendLanguage[i])
      }
    })
  })

  it('Check Second Dropdown', function() {
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      for (var i = 0; i< this.testdata.tools.length; i++){ 
        dropDownCheckboxesRadiobuttonsPage.chooseTool(this.testdata.tools[i])
        dropDownCheckboxesRadiobuttonsPage.checkTool(this.testdata.tools[i])
      }
    })
  })

  it('Check Third Dropdown', function() {
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      for (var i = 0; i< this.testdata.frontLanguage.length; i++){ 
        dropDownCheckboxesRadiobuttonsPage.chooseFrontLanguag(this.testdata.frontLanguage[i])
        dropDownCheckboxesRadiobuttonsPage.checkFrontLanguag(this.testdata.frontLanguage[i])
      }
    })
  })

  it('Test checkboxes', function() {
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      for (var i = 0; i< this.testdata.checkboxes.length; i++){
        dropDownCheckboxesRadiobuttonsPage.checkForCheckbox(this.testdata.checkboxes[i]) 
      }
      for (var i = 0; i< this.testdata.checkboxes.length; i++){
        if(i%2==0){
        dropDownCheckboxesRadiobuttonsPage.uncheckForCheckbox(this.testdata.checkboxes[i])
        }
      }
    })
  })

  it("Check value of radio buttons", function (){
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      dropDownCheckboxesRadiobuttonsPage.checkRadioButtonNumberOfOptions(this.testdata.radioButtons.length)
    })
  })

  it('Test radiobuttons', function() {
    cy.fixture('dropDownCheckboxesRadiobuttons').then( function(testdata){
      this.testdata = testdata
      for (var i = 0; i< this.testdata.radioButtons.length; i++){ 
        dropDownCheckboxesRadiobuttonsPage.chooseRadioButtonColour(this.testdata.radioButtons[i])      
      }
    })
  })

})
