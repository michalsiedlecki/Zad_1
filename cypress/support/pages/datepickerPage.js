var calendarLogo = '.input-group-addon'
var calendarDay = '.day'
var calendarLeftArrow = '.datepicker-days .prev'
var calendarRightArrow = '.datepicker-days .next'
var monthAndYear = '.datepicker-switch'
var selectedDate = ".form-control"
var urlContactUs = 'https://webdriveruniversity.com/Datepicker/index.html'

function checkIfDateToSetIsInThePast(selectedDateInDatepicker, dateToSet){
    var isPastDate 
    if (dateToSet < selectedDateInDatepicker) isPastDate = true 
    else isPastDate = false
    return isPastDate
}

function setDate(dateToSetMonthAndYear, dateToSetDay, isPastDate){
    cy.get(calendarLogo).click()
    cy.get(monthAndYear).then( ($month) =>{
        if($month.text().includes(dateToSetMonthAndYear)){
            cy.get(calendarDay).contains(dateToSetDay).click()      
        }else if(!isPastDate){
            cy.get(calendarRightArrow).click()
            setDate(dateToSetMonthAndYear, dateToSetDay)
        }else{
            cy.get(calendarLeftArrow).click()
            setDate(dateToSetMonthAndYear, dateToSetDay, isPastDate)
        }
    })

}

export class DatepickerPage{
    navigate(){
        cy.visit(urlContactUs)
    }

    setCurrentDateInDatepicker(selectedDate, dateToSet){
        var dateToSet = new Date ();
        var selectedDateInDatepicker = new Date(selectedDate)
        var dateToSetDay = dateToSet.toLocaleString('default', {day: "numeric"})    
        var dateToSetMonth = dateToSet.toLocaleString('default', {month: 'long'})
        var dateToSetYear = dateToSet.toLocaleString('default', {year: 'numeric'})
        var dateToSetMonthAndYear = dateToSetMonth +" " + dateToSetYear
        setDate(dateToSetMonthAndYear, dateToSetDay, checkIfDateToSetIsInThePast(selectedDateInDatepicker, dateToSet))
    }

    setDateInDatepicker(date){
        var currentDate = new Date()
        var dateToSet = new Date (date);
        var dateToSetDay = dateToSet.toLocaleString('default', {day: "numeric"})    
        var dateToSetMonth = dateToSet.toLocaleString('default', {month: 'long'})
        var dateToSetYear = dateToSet.toLocaleString('default', {year: 'numeric'})
        var dateToSetMonthAndYear = dateToSetMonth +" " + dateToSetYear
        setDate(dateToSetMonthAndYear, dateToSetDay, checkIfDateToSetIsInThePast(currentDate, dateToSet))
    }

    checkDateInDatepicker(date){
        date = date.replaceAll('/', '-')
        cy.get(selectedDate).should('have.value', date)
    }
}

export const datepickerPage = new DatepickerPage()