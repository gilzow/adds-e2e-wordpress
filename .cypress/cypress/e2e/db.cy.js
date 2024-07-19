describe('Adds a user via custom command', ()=>{
  before(()=>{
    cy.beforeCreateUser('biz123')
  })
  it('adds a user', ()=> {
      cy.createUser('biz123')
    })
})

