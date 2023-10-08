import Customer from "./Customer";

class Bank {
  customers: Customer[] = [];

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  getTotalBalance() {
    return this.customers.reduce(
      (total, customer) => total + customer.balance,
      0
    );
  }

  deposit(customer: Customer, amount: number) {
    customer.balance += amount;
  }

  withdraw(customer: Customer, amount: number) {
    if (customer.balance >= amount) {
      customer.balance -= amount;
    } else {
      throw new Error("Insufficient balance");
    }
  }

  transfer(sender: Customer, receiver: Customer, amount: number) {
    if (sender.balance >= amount) {
      sender.balance -= amount;
      receiver.balance += amount;
    } else {
      throw new Error("Insufficient balance");
    }
  }
}

export default Bank;
