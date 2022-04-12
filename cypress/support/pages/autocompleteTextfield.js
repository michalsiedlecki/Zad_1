var autocomplete_list = '#myInputautocomplete-list [type="hidden"]'
var textField = '#myInput'
var urlContactUs = 'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html'

export class AutocompleteTextfield{
    navigate(){
        cy.visit(urlContactUs)
    }

    setTextFromList(word, index){
        cy.get(textField).type(word)
        cy.get(autocomplete_list).eq(index - 1).click({force: true})
    }

    checkTextfieldValue(word){
        cy.get(textField).should('have.value', word)
    }
}

export const autocompleteTextfield = new AutocompleteTextfield()