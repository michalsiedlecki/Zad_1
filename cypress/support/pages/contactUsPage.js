var email = '[name="email"]'
var firstName = '[name="first_name"]'
var lastName = '[name="last_name"]'
var message = '[name="message"]'
var resetButton = '[type="reset"]'
var submitButton = '[type="submit"]'
var urlContactUs = 'https://webdriveruniversity.com/Contact-Us/contactus.html'

export class ContactUsPage{
    navigate(){
        cy.visit(urlContactUs)
    }

    setFirstName(value){
        cy
        .get(firstName)
        .type(value)
    }

    checkFirstName(value){
        cy
        .get(firstName)
        .should('have.value', value)
    }

    setLastName(value){
        cy
        .get(lastName)
        .type(value)
    }

    checkLastName(value){
        cy
        .get(lastName)
        .should('have.value', value)
    }

    setEmail(value){
        cy
        .get(email)
        .type(value)
    }

    checkEmail(value){
        cy
        .get(email)
        .should('have.value', value)
    }

    setMessage(value){
        cy
        .get(message)
        .type(value)
    }

    checkMessage(value){
        cy
        .get(message)
        .should('have.value', value)
    }

    clickResetButton(){
        cy
        .get(resetButton)
        .click()
    }

    clickSubmitButton(){
        cy
        .get(submitButton)
        .click()
    }
}

export const contactUsPage = new ContactUsPage()