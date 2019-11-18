function Account() {

  this.balance = 0

}

Account.prototype = {
  
  deposit: function(amount) {
    if(amount <= 0) {
      throw 'Amount must be positive'
    }
    return this.balance += amount
  },

  withdraw: function(amount) {
    if(amount > this.balance) {
      throw 'Withdrawl amount exceeds current balance'
    }

    return this.balance -= amount
  }

}