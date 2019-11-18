function Account() {

  this.balance = 0

}

Account.prototype = {
  
  deposit: function(amount) {
    return this.balance += amount
  },

  withdraw: function(amount) {
    if(amount > this.balance) {
      throw 'Withdrawl amount exceeds current balance'
    }
    return this.balance -= amount
  }

}