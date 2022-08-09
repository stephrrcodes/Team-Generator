const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('John', 75, 'john@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});

test('getName() function', () => {
    const employee = new Employee('John', 75, 'john@gmail.com');

    expect(employee.getName()).toBe('John');
});

test('getID() function', () => {
    const employee = new Employee('John', 75, 'john@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('getEmail function', () => {
    const employee = new Employee('John', 75, 'john@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('getROle() function', () => {
    const employee = new Employee('John', 75, 'john@gmail.com');

    expect(employee.getRole()).toBe('Employee');
}); 