describe('BestFreeFonts functionality tests', () => {
  beforeEach(() => {
    cy.visit('https://bestfreefonts.com/', {
      onBeforeLoad(win) {
        win.addEventListener('unhandledrejection', (event) => {
          event.preventDefault();
        });
        win.addEventListener('error', (event) => {
          event.preventDefault();
          return false;
        });
      }
    })
    cy.on('uncaught:exception', (err) => {
      return false;
    });
  })

  it('should search for fonts using header search bar', () => {
    const searchTerm = 'Marcel'
    cy.xpath('/html/body/div/header/div/div/form/input', { timeout: 10000 })
      .should('be.visible')
      .type(`${searchTerm}{enter}`)
    cy.wait(2000)
  })

  it('should filter fonts using main page input', () => {
    const filterText = 'test'
    cy.xpath('/html/body/div/main/div/div[2]/div[1]/div[1]/input', { timeout: 10000 })
      .should('be.visible')
      .type(filterText)
    cy.wait(2000)
  })

  it('should open a font from the main page', () => {
    cy.xpath('/html/body/div/main/div/div[2]/div[2]/div[1]').click()
    cy.wait(2000)
  })
})
