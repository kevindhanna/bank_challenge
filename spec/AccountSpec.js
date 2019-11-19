describe('Account', function() {
  beforeEach(function() {
    this.account = new Account
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
    
    it('doesnt allow deposits older than the most recent transaction', function() {
      var self = this
      this.account.deposit(500, '12-12-2012')

      expect(function() {self.account.deposit(500, '12-12-2011')}).toThrow('Date cannot be older than last transaction')
    })

    it('adds the credit to the transaction history', function() {
      this.account.deposit(500, this.date)

      expect(this.account.transactions).toEqual([{
        credit: 500,
        date: this.date,
        balance: 500
      }])
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

    it('doesnt allow withdrawls older than the most recent transaction', function() {
      var self = this
      this.account.withdraw(500, '12-12-2012')

      expect(function() {self.account.withdraw(500, '12-12-2011')}).toThrow('Date cannot be older than last transaction')
    })

    it('adds the debit to the transaction history', function() {
      this.account.withdraw(500, this.date)
      
      expect(this.account.transactions[0]).toEqual({
        debit: 500,
        date: this.date,
        balance: 1500
      })
    })
  })

  describe('printStatement', function() {
    beforeEach(function() {
      this.printer = {print: function() {}}
      spyOn(this.printer, 'print').and.returnValue('a statement')
      this.account = new Account(this.printer)
    })

    it('sends the account information to the printer', function() {
      this.account.printStatement()
      
      expect(this.printer.print).toHaveBeenCalledWith(this.account.transactions)
    })
    
    it('returns the printed statement', function() {
      expect(this.account.printStatement()).toEqual('a statement')
    })
  })
})