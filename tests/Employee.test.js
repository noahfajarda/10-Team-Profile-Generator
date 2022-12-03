const Employee = require("../lib/Employee");

// PASSED
test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
});

// PASSED
test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

// PASSED
test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

// PASSED
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

// PASSED
test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

// PASSED
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

// PASSED
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return 'Employee'", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
