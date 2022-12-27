// Homework №1

var customer = {
    Name: "Meerim",
    Surname: "Abdiraimova",
    CustomerType: 1
}
console.log("Customer name is", customer.Name);
console.log("Customer surname is", customer.Surname);

var customerBankAccount = {
    accountBalance: 5000,
    accountNumber: "40817810500000000335",
    accountCurrency: "Som",
    customerAccountBranch: {
        accountNomination: "03071030710",
        accountAddress: "Kyrgyzstan"
    }    
}

//Conditions 

if (customer.CustomerType == 1) {
    console.log("Лицо: Физическое");
  } else {
    console.log("Лицо: Юридическое");
  }
