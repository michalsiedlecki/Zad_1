/// <reference types="cypress" />
import  { contactUsPage } from "../../support/pages/contactUsPage.js"

describe('Tests for Contact-Us', function(){
  
  beforeEach(function() {
    cy.fixture('contactUs').then( function(testdata){
      this.testdata = testdata
    })
    contactUsPage.navigate()
  })
  it('Check Reset button', function() {
    contactUsPage.setFirstName(this.testdata.firstName)
    contactUsPage.checkFirstName(this.testdata.firstName)
    contactUsPage.setLastName(this.testdata.lastName)
    contactUsPage.checkLastName(this.testdata.lastName)
    contactUsPage.setEmail(this.testdata.email)
    contactUsPage.checkEmail(this.testdata.email)
    contactUsPage.setMessage(this.testdata.message)
    contactUsPage.checkMessage(this.testdata.message)
    contactUsPage.clickResetButton()
    contactUsPage.checkFirstName('')
    contactUsPage.checkLastName('')
    contactUsPage.checkEmail('')
    contactUsPage.checkMessage('')
  })

  it('Check error message for empty fields', function(){
    contactUsPage.setFirstName(this.testdata.firstName)
    contactUsPage.setEmail(this.testdata.email)
    contactUsPage.clickSubmitButton()
    contactUsPage.checkErrorMessage(this.testdata.errorMessageForEmptyFields)
  })

  it('Check error message for invalid email', function(){
    contactUsPage.setFirstName(this.testdata.firstName)
    contactUsPage.setLastName(this.testdata.lastName)
    contactUsPage.setEmail(this.testdata.message)
    contactUsPage.setMessage(this.testdata.message)
    contactUsPage.clickSubmitButton()
    contactUsPage.checkErrorMessage(this.testdata.errorMessageForInvalidEmail)
  })

})
