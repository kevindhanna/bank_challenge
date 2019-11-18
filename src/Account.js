function Account(printer) {
  this.balance = 0
  this.transactions = []
  this.printer = printer

}

Account.prototype = {
  
  deposit: function(amount, date) {
    if(amount <= 0) {
      throw 'Amount must be positive'
    }

    this.transactions.push({
      credit: amount,
      date: date
    })

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