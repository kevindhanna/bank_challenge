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

  function makeLine(trans) {
    return `\n${trans.date} || ${trans.credit || ""} || ${trans.debit || ""} || ${trans.balance}\n`
  }

  exports.StatementPrinter = StatementPrinter

})(this)