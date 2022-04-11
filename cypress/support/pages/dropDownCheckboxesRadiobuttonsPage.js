var backendLanguageDropDown = '#dropdowm-menu-1'
var backendLanguageDropDownOptions = '#dropdowm-menu-1 option'
var toolsDropDown = '#dropdowm-menu-2'
var toolsLanguageDropDownOptions = '#dropdowm-menu-2 option'
var frontLanguageDropDown = '#dropdowm-menu-3'
var frontLanguageDropDownOptions = '#dropdowm-menu-3 option'
var radioButtonOptions = '#radio-buttons input'
var urlContactUs = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'

export class DropDownCheckboxesRadiobuttonsPage{
    navigate(){
        cy.visit(urlContactUs)
    }

    checkBackendLanguageDropDownNumberOfOptions(number){
        cy.get(backendLanguageDropDownOptions).should('have.length', number)
    }

    checkToolsDropDownNumberOfOptions(number){
        cy.get(toolsLanguageDropDownOptions).should('have.length', number)
    }

    checkFrontDropDownNumberOfOptions(number){
        cy.get(frontLanguageDropDownOptions).should('have.length', number)
    }

    chooseBackendLanguage(language){
        cy.get(backendLanguageDropDown).select(language)
    }

    checkBackendLanguageValue(language){
        cy.get(backendLanguageDropDown).should('have.value', language.toLowerCase())
    }

    chooseTool(tool){
        cy.get(toolsDropDown).select(tool)
    }

    checkTool(tool){
        cy.get(toolsDropDown).should('have.value', tool.toLowerCase())
    }

    chooseFrontLanguag(language){
        cy.get(frontLanguageDropDown).select(language)
    }

    checkFrontLanguag(language){
        cy.get(frontLanguageDropDown).should('have.value', language.toLowerCase())
    }

<<<<<<< Updated upstream
=======
    checkForCheckbox(checkbox){
        cy.get(checkbox).check().should('be.checked')
    }

    uncheckForCheckbox(checkbox){
        cy.get(checkbox).uncheck().should('not.be.checked')
    }

    checkRadioButtonNumberOfOptions(number){
        cy.get(radioButtonOptions).should('have.length', number)
    }

    chooseRadioButtonColour(colour){
        cy.get(colour).check().should('be.checked')
    }
>>>>>>> Stashed changes
}

export const dropDownCheckboxesRadiobuttonsPage = new DropDownCheckboxesRadiobuttonsPage()