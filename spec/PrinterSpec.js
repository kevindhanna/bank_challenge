describe('StatementPrinter', function() {
  beforeEach(function() {
    this.statementPrinter = new StatementPrinter
  })

  describe('print', function() {
    it('returns a table of transactions in markdown', function() {
      expect(this.statementPrinter.print()).toEqual("date || credit || debit || balance")
    })
  })
})