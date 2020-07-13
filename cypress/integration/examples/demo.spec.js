describe('百度', () => {
  it('能搜索', () => {
    cy.visit('https://baidu.com')
    cy.get('input#kw').eq(0).type('A-Tione的博客')
    cy.contains('百度一下').click()
    cy.contains('项目管理,CSS,JS领域博主- CSDN博客').should('exist')
    cy.contains('JavaScript,TypeScript,HTTPS,ECMAScript 6方面的内容').should('exist')
  })
})
