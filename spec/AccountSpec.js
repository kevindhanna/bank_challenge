describe('Account', function() {
  beforeEach(function() {
    this.account = new Account
  })

  describe('deposit', function() {
    it('returns the new balance', function() {
      expect(this.account.deposit(500)).toEqual(500)
    })

    it('adds to the existing balance', function() {
      this.account.deposit(500)

      expect(this.account.deposit(500)).toEqual(1000)
    })

    it('doesnt allow negative deposits', function() {
      var self = this

      expect(function() {self.account.deposit(-500)}).toThrow('Amount must be positive')
    })

    it('adds the transaction to the transaction history', function() {
      this.account.deposit(500, "12-12-2012")
      
      expect(this.account.transactions).toEqual([{
        credit: 500,
        date: "12-12-2012"
      }])
    })
  })
  
  describe('withdraw', function() {
    beforeEach(function() {
      this.account.deposit(2000)
    })
    
    it('returns the new reduced balance', function() {
      expect(this.account.withdraw(500)).toEqual(1500)
    })
    
    it('doesnt allow negative withdrawls', function() {
      var self = this
  
      expect(function() {self.account.withdraw(-500)}).toThrow('Amount must be positive')
    })

    it('doesnt allow withdrawls that exceed current balance', function() {
      var self = this
      
      expect(function() {self.account.withdraw(5000)}).toThrow("Withdrawl amount exceeds current balance")
    })
  })
  
  describe('printStatement', function() {
    beforeEach(function() {
      this.printer = jasmine.createSpyObj('printer', ['print'])
      this.account = new Account(this.printer)
    })

    it('sends the account information to the printer', function() {
      this.account.printStatement()

      expect(this.printer.print).toHaveBeenCalled()
    })
  })
})