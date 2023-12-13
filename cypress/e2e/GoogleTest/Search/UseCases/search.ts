import { CONFIG_SEARCH_LOCATORS } from "../Locators/search"

export default class SearchUseCases {
    getSearchArea(timeout=15000){
        return cy.get(CONFIG_SEARCH_LOCATORS.SEARCH_AREA, { timeout: timeout })
        
    }
    searchResultShouldHave(text){
        return this.getSearchArea()
            .should('contain', text)       

    }

}