describe('StatementPrinter', function() {
  beforeEach(function() {
    this.statementPrinter = new StatementPrinter
    this.transactions = [
      {credit: 500, date: '12-12-2012', balance: 500}
    ]
  })

  describe('print', function() {
    it('returns a table of transactions in markdown', function() {
      expect(this.statementPrinter.printStatement()).toEqual("\ndate || credit || debit || balance\n")
    })
    
    it('returns the given transaction in the table', function() {
      expect(this.statementPrinter.printStatement(this.transactions)).toEqual(
        "\ndate || credit || debit || balance\n12-12-2012 || 500.00 ||  || 500.00\n"
      )
    })
      
    it('returns multiple transactions', function() {
      this.transactions.unshift(
        {debit: 500, date: '13-12-2013', balance: 0}
        )
        
      expect(this.statementPrinter.printStatement(this.transactions)).toEqual(
      `
date || credit || debit || balance
13-12-2013 ||  || 500.00 || 
12-12-2012 || 500.00 ||  || 500.00
`
      )
    })
  })
})