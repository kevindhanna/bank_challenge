describe('Account', function() {
  beforeEach(function() {
    this.printer = {printStatement: function() {}}
    spyOn(this.printer, 'printStatement').and.returnValue('a statement')
    this.transactionHistory = {
      transactions: [],
      checkDate: function() {},
      addTransaction: function() {}
    }
    spyOn(this.transactionHistory, 'transactions')
    spyOn(this.transactionHistory, 'addTransaction')
    spyOn(this.transactionHistory, 'checkDate')

    this.account = new Account (this.printer, this.transactionHistory)
    this.date = '12-12-2012"'
  })

  describe('deposit', function() {
    it('returns the new balance', function() {
      expect(this.account.deposit(500, this.date)).toEqual(500)
    })

    it('adds to the existing balance', function() {
      this.account.deposit(500, this.date)

      expect(this.account.deposit(500, this.date)).toEqual(1000)
    })

    it('doesnt allow negative deposits', function() {
      var self = this

      expect(function() {self.account.deposit(-500, this.date)}).toThrow('Amount must be positive')
    })

    it('checks the date with the transactionHistory', function() {
      this.account.deposit(500, this.date)
      expect(this.transactionHistory.checkDate).toHaveBeenCalledWith(this.date)
    })

    it('adds the credit to the transaction history', function() {
      this.account.deposit(500, this.date)

      expect(this.transactionHistory.addTransaction).toHaveBeenCalledWith('credit', 500, this.date)
    })
  })
  
  describe('withdraw', function() {
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

    it('checks the date with the transactionHistory', function() {
      this.account.withdraw(500, this.date)
      expect(this.transactionHistory.checkDate).toHaveBeenCalledWith(this.date)
    })
    
    it('adds the debit to the transaction history', function() {
      this.account.withdraw(500, this.date)
      
      expect(this.transactionHistory.addTransaction).toHaveBeenCalledWith('debit', 500, this.date)
    })
  })

  describe('printStatement', function() {
    it('sends the account information to the printer', function() {
      this.account.printStatement()
      
      expect(this.printer.printStatement).toHaveBeenCalledWith(this.transactionHistory.transactions)
    })
    
    it('returns the printed statement', function() {
      expect(this.account.printStatement()).toEqual('a statement')
    })
  })
})