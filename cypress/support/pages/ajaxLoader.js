var clickButton = '#myDiv'
var urlContactUs = 'https://webdriveruniversity.com/Ajax-Loader/index.html'


export class AjaxLoader{
    navigate(){
        cy.visit(urlContactUs)
    }

    waitForPageToLoad(time){
        cy.get(clickButton, {timeout: time}).should('have.css', 'display', 'block')
    }
}

export const ajaxLoader = new AjaxLoader()