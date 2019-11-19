(function(exports) {

  var self
  function TransactionHistory() {
    this.transactions = []
    self = this
  }
  
  TransactionHistory.prototype = {
    addTransaction: function(method, amount, date, balance) {
      checkDate(date)
      this.transactions.unshift({
        [method]: amount,
        date: date,
        balance: balance
      })
    }
  }
    
  function checkDate(date) {
    if (self.transactions.length > 0) {
      var compareDate = new Date(date.split().reverse().join())
      var lastTransactionDate = new Date(self.transactions[0].date.split().reverse().join())
      
      if (compareDate < lastTransactionDate) {
        throw 'Date cannot be older than last transaction'
      }
    }
  }

  exports.TransactionHistory = TransactionHistory
})(this)