describe('StatementPrinter', function() {
  beforeEach(function() {
    this.statementPrinter = new StatementPrinter
    this.transactions = [
      {credit: 500, date: '12-12-2012', balance: 500}
    ]
  })

  describe('print', function() {
    it('returns a table of transactions in markdown', function() {
      expect(this.statementPrinter.print()).toEqual("\ndate || credit || debit || balance\n")
    })
    
    it('returns the given transaction in the table', function() {
      expect(this.statementPrinter.print(this.transactions)).toEqual(
        "\ndate || credit || debit || balance\n12-12-2012 || 500 ||  || 500\n")
    })
  })
})