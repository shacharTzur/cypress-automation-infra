// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const hiredScoreUrl = 'https://www.hiredscore.com/'
describe('Carrer page test', () => {
    it('Visits the HiredScore webPage and verify career tab, open position', () => {
        const expectedCareersPageUrl = "https://www.hiredscore.com/careers#career-listing"
        const aboutTab = "About"
        const carrersTab = "Careers"
        const viewCarrersButton = "View Careers"
        const headingName = ".hero-heading.career-hero-heading" //class H1 name for positionName
        const positionName = "Growth Marketing Manager"
        //visit hiredScoreUrl
        cy.visit(hiredScoreUrl)
        //go to career page by : aboutTab -> drop down to: viewCarrersButton -> click on:
        //assert url is as expectedCareersPageUrl
        cy.contains(aboutTab).trigger('mouseover'),
            cy.contains(carrersTab).click()
        cy.contains(viewCarrersButton).click({force: true})
        cy.url().should('eq', expectedCareersPageUrl)
        //click on first position appear: "Growth Marketing Manager"

        cy.contains(positionName).click()
        cy.get(headingName).contains(positionName)

        //back to careers page
        cy.contains(aboutTab).trigger('mouseover'),
            cy.contains(carrersTab).click()
    })
})
    describe('Resources page test', () => {
        it('Visits the HiredScore webPage and verify resources tab url', () => {
            const resourcesTab = "Resources"
            const pressTab = "Press & Awards"
            const expectedPressPageUrl = "https://www.hiredscore.com/press"
            cy.visit(hiredScoreUrl)
            cy.contains(resourcesTab).trigger('mouseover'),
            cy.contains(pressTab).click()
            cy.url().should('eq', expectedPressPageUrl)
        })
    })