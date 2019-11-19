(function(exports) {
  
  var self

  function Account(printer) {
    this.balance = 0
    this.transactions = []
    this.printer = printer
    
    self = this
  }
  
  
  Account.prototype = {
    
    deposit: function(amount, date) {
      if(amount <= 0) {
        throw 'Amount must be positive'
      } 
      if (this.transactions.length > 0) {
        checkDate(date)
      }
      
      this.balance += amount
      addTransaction('credit', amount, date)
      
      return this.balance 
    },
    
    withdraw: function(amount, date) {
      if(amount > this.balance) {
        throw 'Withdrawl amount exceeds current balance'
      } else if (amount <= 0) {
        throw 'Amount must be positive'
      }
      
      this.balance -= amount
      addTransaction('debit', amount, date)
  
      return this.balance
    },
  
    printStatement: function() {
      return this.printer.print(this.transactions)
    }
    
  }
    
  function addTransaction(method, amount, date) {
    self.transactions.unshift({
      [method]: amount,
      date: date,
      balance: self.balance
    })
  }

  function checkDate(date) {
    var compareDate = date.split().reverse().join()
    var lastTransactionDate = self.transactions[0].date.split().reverse().join()
    if (new Date(compareDate) < new Date(lastTransactionDate)) {
      throw 'Date cannot be older than last transaction'
    }
  }

  exports.Account = Account

})(this)
