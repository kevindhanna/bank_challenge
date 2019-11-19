describe('TransactionHistory', function() {
  beforeEach(function() {
    this.transactionHistory = new TransactionHistory
  })

  it('stores the transaction history', function() {
    expect(this.transactionHistory.transactions).toEqual([])
  })

  describe('addTransaction', function() {
    it('adds a credit transaction to the history', function() {
      this.transactionHistory.addTransaction('credit', 500, '12-12-2012', 500)

      expect(this.transactionHistory.transactions).toEqual([
        {credit: 500, date: '12-12-2012', balance: 500}
      ])
    })

    it('adds a debit transaction to the history', function() {
      this.transactionHistory.addTransaction('debit', 500, '12-12-2012', 500)

      expect(this.transactionHistory.transactions).toEqual([
        {debit: 500, date: '12-12-2012', balance: 500}
      ])
    })

    it('doesnt allow deposits older than the most recent transaction', function() {
      var self = this
      this.transactionHistory.addTransaction('credit', 500, '12-12-2012', 500)

      expect(function() {self.transactionHistory.addTransaction('credit', 500, '12-12-2011', 500)}).toThrow('Date cannot be older than last transaction')
    })  
  })
})