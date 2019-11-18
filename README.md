# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### interface

``` ruby
deposit(1000, "10-01-2012")
=> balance: 1000
deposit(2000, "13-01-2012")
=> balance: 3000
withdraw(500, "14-01-2012")
=> balance: 2500
print_statement
=>
  date || credit || debit || balance
  14/01/2012 || || 500.00 || 2500.00
  13/01/2012 || 2000.00 || || 3000.00
  10/01/2012 || 1000.00 || || 1000.00

withdraw(5000, "16-01-2012")
=> err: insufficient balance
withdraw(-500, "16-01-2012")
deposit(-500, "16-01-2012")
=> err: must be positive
deposit(500)
=> balance 3000
print_statement
=>  
  date || credit || debit || balance
  18-11-2019 || 500 ||  || 3000.00
  14/01/2012 || || 500.00 || 2500.00
  13/01/2012 || 2000.00 || || 3000.00
  10/01/2012 || 1000.00 || || 1000.00
```

### Stories
I would like to be able to withdraw money
I would like to be able to deposit money
I would like to be able to print my statement