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

    it('adds the credit to the transaction history', function() {
      this.account.deposit(500, this.date)

      expect(this.account.transactions).toEqual([{
        credit: 500,
        date: this.date
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
      
      expect(function() {self.account.withdraw(5000, this.date)}).toThrow("Withdrawl amount exceeds current balance")
    })

    it('adds the debit to the transaction history', function() {
      this.account.withdraw(500, this.date)
      
      expect(this.account.transactions[1]).toEqual({
        debit: 500,
        date: this.date
      })
    })
  })

  describe('printStatement', function() {
    beforeEach(function() {
      this.printer = jasmine.createSpyObj('printer', ['print'])
      this.account = new Account(this.printer)
    })

    it('sends the account information to the printer', function() {
      this.account.printStatement()

      expect(this.printer.print).toHaveBeenCalledWith(this.account.transactions)
    })
  })
})