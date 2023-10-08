import Bank from "../src/Bank";
import Customer from "../src/Customer";

test("Bank can add customers", () => {
  const bank = new Bank();
  const customer = new Customer("Alice", 100);
  bank.addCustomer(customer);
  expect(bank.customers).toContain(customer);
});

test("Bank can get the total balance", () => {
  const bank = new Bank();
  const customer1 = new Customer("Alice", 100);
  const customer2 = new Customer("Bob", 200);
  bank.addCustomer(customer1);
  bank.addCustomer(customer2);
  expect(bank.getTotalBalance()).toBe(300);
});

// Add more test cases for deposit, withdraw, and transfer functions
