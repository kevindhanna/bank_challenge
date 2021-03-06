(function(exports) {
  
  function Account(printer, history) {
    this.balance = 0
    this.history = history || new TransactionHistory
    this.printer = printer || new StatementPrinter
  }
  
  
  Account.prototype = {
    
    deposit: function(amount, date) {
      validateAmount(amount)
      this.history.checkDate(date)
      this.history.addTransaction('credit', amount, date, this.balance += amount)

      return twoPlacedFloat(this.balance)
    },
    
    withdraw: function(amount, date) {
      validateAmount(amount)
      if(amount > this.balance) {
        throw 'Withdrawl amount exceeds current balance'
      } 
      this.history.checkDate(date)
      this.history.addTransaction('debit', amount, date, this.balance -= amount)
      
      return twoPlacedFloat(this.balance)
    },
  
    printStatement: function() {
      return this.printer.printStatement(this.history.transactions)
    }
    
  }

  function validateAmount(amount) {
    if (amount <= 0) {
      throw 'Amount must be positive'
    } 
  }

  function twoPlacedFloat(number) {
   return parseFloat(number).toFixed(2)
  }

  exports.Account = Account

})(this)
