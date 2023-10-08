import Customer from "../src/Customer";

test("Customer can be created with a name and initial deposit", () => {
  const customer = new Customer("Alice", 100);
  expect(customer.name).toBe("Alice");
  expect(customer.balance).toBe(100);
});
