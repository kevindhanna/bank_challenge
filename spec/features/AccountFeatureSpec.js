describe('Bank Account', function() {
  beforeEach(function() {
    this.account = new Account
    this.date = '12-12-2012"'
  })

  describe('Deposit', function() {
    it('returns the new the balance', function(){
      expect(this.account.deposit(1000, '10-01-2012')).toEqual(1000)
    })

    it('adds to the existing balance', function() {
      this.account.deposit(1000, '10-01-2012')

      expect(this.account.deposit(2000, '13-01-2012')).toEqual(3000)
    })

    it('doesnt allow negative deposits', function() {
      var self = this

      expect(function() {self.account.deposit(-500, this.date)}).toThrow('Amount must be positive')
    })
    
    it('doesnt allow deposits older than the most recent transaction', function() {
      var self = this
      this.account.deposit(500, '12-12-2012')

      expect(function() {self.account.deposit(500, '12-12-2011')}).toThrow('Date cannot be older than last transaction')
    })

    it('adds the credit to the transaction history', function() {
      this.account.deposit(500, this.date)

      expect(this.account.history.transactions).toEqual([{
        credit: 500,
        date: this.date,
        balance: 500
      }])
    })
  })

  describe('Withdraw', function() {
    beforeEach(function() {
      this.account.deposit(2000, this.date)
    })
    
    it('returns the new reduced balance', function() {
      expect(this.account.withdraw(500, this.date)).toEqual(1500)
    })
    
    it('doesnt allow negative withdrawls', function() {
      var self = this
  
      expect(function() {self.account.withdraw(-500, this.date)}).toThrow('Amount must be positive')
    })

    it('doesnt allow withdrawls that exceed current balance', function() {
      var self = this
      
      expect(function() {self.account.withdraw(5000, self.date)}).toThrow("Withdrawl amount exceeds current balance")
    })

    it('doesnt allow withdrawls older than the most recent transaction', function() {
      var self = this
      this.account.withdraw(500, '12-12-2012')

      expect(function() {self.account.withdraw(500, '12-12-2011')}).toThrow('Date cannot be older than last transaction')
    })

    it('adds the debit to the transaction history', function() {
      this.account.withdraw(500, this.date)
      
      expect(this.account.history.transactions[0]).toEqual({
        debit: 500,
        date: this.date,
        balance: 1500
      })
    })
  })

  describe('printStatement', function() {
    it('returns the printed statement', function() {
      this.account.deposit(500, '12-12-2012')
      this.account.withdraw(500, '12-12-2013')

      expect(this.account.printStatement()).toEqual(`
date || credit || debit || balance
12-12-2013 ||  || 500 || 0
12-12-2012 || 500 ||  || 500
`)
    })
  })
})