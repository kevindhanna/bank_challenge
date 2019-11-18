(function(exports){

  function StatementPrinter() {

  }

  StatementPrinter.prototype = {
    print: function() {
      return "date || credit || debit || balance"
    }
  }

  exports.StatementPrinter = StatementPrinter

})(this)