
describe('', () => {
    it('checks token', () => {
        cy.visit('https://player.smartzer.com/v/5695094313189376')
        cy.checkToken('abc123')

    })
})