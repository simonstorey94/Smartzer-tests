describe('testing the webpage', () => {
    it('Visits video Jonny sent me.', () => {
      cy.visit('https://player.smartzer.com/v/5695094313189376')
      cy.get('[d="M 10,95 V 5 l 75,45 z"]').click()
      cy.get('.drawerButtonIcon')
      cy.get(':nth-child(1) > .bbtn > .drawerItem > .styles_imageWrapper__234JL > .styles_DrawerItem__37u20 > :nth-child(1) > .responsive-img').click()
      cy.get('[style="width: 100%; height: 100%; padding: 10% 20%; box-sizing: border-box; -webkit-box-orient: vertical; -webkit-box-direction: normal; flex-direction: column; justify-content: space-around; -webkit-box-align: center; align-items: center; overflow: auto;"]')
      cy.contains('Ernest armchair')
    })
  })

