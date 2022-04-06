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

    chooseTool(tool){
        cy.get(toolsDropDown).select(tool)
    }

    chooseFrontLanguag(language){
        cy.get(frontLanguageDropDown).select(language)
    }

}

export const dropDownCheckboxesRadiobuttonsPage = new DropDownCheckboxesRadiobuttonsPage()