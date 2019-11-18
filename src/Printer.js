(function(exports){

  var HEADER = "date || credit || debit || balance"
  
  function StatementPrinter() {

  }
  
  StatementPrinter.prototype = {
    print: function(transactions) {
      if (transactions) {
        return "\n" + HEADER + makeLine(transactions[0])
      } else {
        return "\n" + HEADER + "\n" 
      }
    }
  }

  function makeLine(transaction) {
    var bar = " || "
    return "\n" + transaction.date + bar + transaction.credit + bar + bar + "\n"
  }

  exports.StatementPrinter = StatementPrinter

})(this)