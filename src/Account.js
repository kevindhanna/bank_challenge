function Account(printer) {
  this.balance = 0
  this.printer = printer

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
    } else if (amount <= 0) {
      throw 'Amount must be positive'
    }

    return this.balance -= amount
  },

  printStatement: function() {
    this.printer.print()
  }

}