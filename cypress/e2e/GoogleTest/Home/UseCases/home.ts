import { CONFIG_HOME_LOCATORS } from "../Locators/home";
export default class HomeUseCases {
    goToHome(){
        cy.visit(Cypress.env('BASE_URL_CYPRESS'))
    }
    getSearchField(timeout=1000){
        return cy.get(CONFIG_HOME_LOCATORS.SEARCH_FIELD, { timeout:timeout })         
    }
    inputInToSearchField(text){
        return this.getSearchField()
        .type(text)
    }
    searchWithEnter(text){
        return this.inputInToSearchField(text)
        .type('{enter}')
    }

}