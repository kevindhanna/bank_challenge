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
  
      addTransaction('credit', amount, date)
  
      return this.balance += amount
    },
  
    withdraw: function(amount, date) {
      if(amount > this.balance) {
        throw 'Withdrawl amount exceeds current balance'
      } else if (amount <= 0) {
        throw 'Amount must be positive'
      }
  
      addTransaction('debit', amount, date)
  
      return this.balance -= amount
    },
  
    printStatement: function() {
      this.printer.print(this.transactions)
    }
    
  }
    

  function addTransaction(method, amount, date) {
    obj = {}
    obj[method] = amount
    obj.date = date
    self.transactions.push(obj)
  }

  exports.Account = Account

})(this)
