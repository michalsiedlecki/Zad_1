var div = '#myDiv'
var greenButton = '#button1'
var urlContactUs = 'https://webdriveruniversity.com/Ajax-Loader/index.html'


export class AjaxLoader{
    navigate(){
        cy.visit(urlContactUs)
    }

    waitForPageToLoad(time){
        cy.get(div, {timeout: time}).should('have.css', 'display', 'block')
    }

    clickGreenButton(){
        cy.get(greenButton).click()
    }
}

export const ajaxLoader = new AjaxLoader()