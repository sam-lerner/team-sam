const Employee = require("../lib/Employee")


test('Create an instance of an employee', () => {
    const title = new Employee();
    expect(typeof (title)).toBe('object')
});

test("Employee name", () => {
    const name = "Sam";
    const n = new Employee(name);
    expect(n.name).toBe(name);
});

test('Employee ID', () => {
    const id = 6;
    const n = new Employee("Sam",id);
    expect(n.id).toBe(id);
});
test('Employee email', () => {
    const email = 'info@test.com';
    const n = new Employee("Sam", 6, email);
    expect(n.email).toBe(email);
});
test('getName test', () => {
    const getName = "Sam";
    const n = new Employee(getName);
    expect(n.getName()).toBe(getName);
});
test('getId test', () => {
    const getId = 6;
    const n = new Employee("Sam", getId);
    expect(n.getId()).toBe(getId);
});
test('getEmail test', () => {
    const email = 'info@test.com';
    const n = new Employee("Sam", 6, email);
    expect(n.getEmail()).toBe(email);
});
test('getRole test', () => {
    const getRole = 'Employee';
    const n = new Employee("Sam", 6, 'info@test.com');
    expect(n.getRole()).toBe(getRole);
});