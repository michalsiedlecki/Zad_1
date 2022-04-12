var backendLanguageDropDown = '#dropdowm-menu-1'
var toolsDropDown = '#dropdowm-menu-2'
var frontLanguageDropDown = '#dropdowm-menu-3'
var urlContactUs = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'

export class DropDownCheckboxesRadiobuttonsPage{
    navigate(){
        cy.visit(urlContactUs)
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

    checkForCheckbox(checkbox){
        cy.get(checkbox).check().should('be.checked')
    }

    uncheckForCheckbox(checkbox){
        cy.get(checkbox).uncheck().should('not.be.checked')
    }

    chooseRadioButtonColour(colour){
        cy.get(colour).check().should('be.checked')
    }
}

export const dropDownCheckboxesRadiobuttonsPage = new DropDownCheckboxesRadiobuttonsPage()