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
  })

  describe('withdraw', function() {
    beforeEach(function() {
      this.account.deposit(2000)
    })

    it('returns the new reduced balance', function() {
      expect(this.account.withdraw(500)).toEqual(1500)
    })

    it('doesnt allow withdrawls that exceed current balance', function() {
      var self = this
      
      expect(function() {self.account.withdraw(5000)}).toThrow("Withdrawl amount exceeds current balance")
    })
  })
})