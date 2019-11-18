describe('Account', function() {
  beforeEach(function() {
    this.account = new Account
  })
  describe('deposit', function() {
    it('returns the new balance', function() {
      expect(this.account.deposit(500)).toEqual(500)
    })
  })
})