# Bank Challenge

This app creates a bank account that allows withdrawls, deposts and access to a printed statement.

## Install

- `git clone https://github.com/kevindhanna/bank_challenge`
- open `./public/index.html` in a browser
- open browser console
- your account is accessible using the `account` variable

## Run Tests

- run `yarn`
- run `yarn test`
- run `yarn lint`

## How to Use Use

### Deposit
Deposits return the new account balance  
_Browser console..._  
`account.deposit(1000, "19-11-2019")`  
=>  
  `1000`

### Withdrawl
Withdrawl return the new account balance  
_Browser console..._  
`account.withdraw(500, "19-11-2019")`  
=>  
  `500`

### Print Statement
Returns a table showing date, amount, credit, debit, balance  
`account.printStatement()`  
=>  
  ```
  date || credit || debit || balance
  19-11-2019 ||  || 500 || 500
  19-11-2019 || 1000 ||  || 1000
  ```
### Recreate Account

A new account can be created with `var myAccount = new Account`

### Screenshots
![](https://i.imgur.com/WnJctaE.png)


