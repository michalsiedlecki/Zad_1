/// <reference types="cypress" />
import  { datepickerPage } from "../../support/pages/datepickerPage.js"

describe('Tests for Datepicker', function(){
  
  beforeEach(function() {
    cy.fixture('datepicker').then( function(testdata){
      this.testdata = testdata
    })
    datepickerPage.navigate()
  })

  it('Check Datepicker', function() {
    for (var i = 0; i< this.testdata.dates.length; i++){
      datepickerPage.setDateInDatepicker(this.testdata.dates[i])
      datepickerPage.checkDateInDatepicker(this.testdata.dates[i])
      datepickerPage.setCurrentDateInDatepicker(this.testdata.dates[i])
    }
  })
})
