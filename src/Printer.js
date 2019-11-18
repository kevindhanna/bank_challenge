(function(exports){

  var HEADER = "date || credit || debit || balance"
  
  function StatementPrinter() {

  }
  
  StatementPrinter.prototype = {
    print: function(transactions) {
      if (transactions) {
        var statement = "\n" + HEADER

        transactions.forEach(transaction => {
          statement += makeLine(transaction)
        });
        
        return statement + "\n"
      } else {
        return "\n" + HEADER + "\n" 
      }
    }
  }

  function makeLine(trans) {
    return `\n${trans.date} || ${trans.credit || ""} || ${trans.debit || ""} || ${trans.balance}`
  }

  exports.StatementPrinter = StatementPrinter

})(this)
