(function(exports){

  var HEADER = "date || credit || debit || balance"
  
  function StatementPrinter() {

  }
  
  StatementPrinter.prototype = {
    printStatement: function(transactions) {
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
    return `\n${trans.date} || ${twoPlacedFloat(trans.credit)} || ${twoPlacedFloat(trans.debit)} || ${twoPlacedFloat(trans.balance)}`
  }

  function twoPlacedFloat(number) {
    if (number) {
      return parseFloat(number).toFixed(2)
    }
    return ""
   }

  exports.StatementPrinter = StatementPrinter

})(this)
