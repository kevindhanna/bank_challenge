(function(exports) {
  
  var self

  function Account(printer) {
    this.balance = 0
    this.transactions = []
    this.printer = printer || new StatementPrinter
    
    self = this
  }
  
  
  Account.prototype = {
    
    deposit: function(amount, date) {
      validateAmount(amount)
      checkDate(date)

      this.balance += amount
      addTransaction('credit', amount, date)
      
      return this.balance 
    },
    
    withdraw: function(amount, date) {
      validateAmount(amount)
      checkDate(date)
      if(amount > this.balance) {
        throw 'Withdrawl amount exceeds current balance'
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
    if (self.transactions.length > 0) {
      var compareDate = date.split().reverse().join()
      var lastTransactionDate = self.transactions[0].date.split().reverse().join()
      
      if (new Date(compareDate) < new Date(lastTransactionDate)) {
        throw 'Date cannot be older than last transaction'
      }
    }
  }

  function validateAmount(amount) {
    if (amount <= 0) {
      throw 'Amount must be positive'
    } 
  }

  exports.Account = Account

})(this)
