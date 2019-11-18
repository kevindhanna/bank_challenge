function Account() {
  this.balance = 0
}

Account.prototype = {
  deposit: function(amount) {
    return this.balance += amount
  },
  withdraw: function(amount) {
    return this.balance -= amount
  }
}