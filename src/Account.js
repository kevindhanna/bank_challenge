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
    var obj = {}
    obj[method] = amount
    obj.date = date
    obj.balance = self.balance
    self.transactions.unshift(obj)
  }

  exports.Account = Account

})(this)
