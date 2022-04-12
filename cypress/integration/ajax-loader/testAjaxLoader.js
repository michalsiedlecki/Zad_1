/// <reference types="cypress" />
import  { ajaxLoader } from "../../support/pages/ajaxLoader.js"

describe('Tests for Ajax-loader', function(){
  
  beforeEach(function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    ajaxLoader.navigate()
  })

  it('Check Ajax-loader', function() {
      ajaxLoader.waitForPageToLoad(7000)
      ajaxLoader.clickGreenButton()
    })  
})