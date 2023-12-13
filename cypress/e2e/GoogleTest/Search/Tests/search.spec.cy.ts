import HomeUseCases from "../../Home/UseCases/home"
import SearchUseCases from "../UseCases/search"

//Invoke class
const HOME_USE_CASES = new HomeUseCases()
const SEARCH_USE_CASES = new SearchUseCases()

before(() => {
    HOME_USE_CASES.goToHome()

})

describe('Search area of google', () => {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('data').then((data) => {
            this.data_id_1 = data['id_1']
        })
    })
    it('has text', function () {
        HOME_USE_CASES.searchWithEnter(this.data_id_1.input_data)
        SEARCH_USE_CASES.searchResultShouldHave(this.data_id_1.expected_result)

        
    })
})
// Test design: Check UI
// Functionality Check
