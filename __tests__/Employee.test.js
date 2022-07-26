const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Fred Jones', 1111, 'fredjones@internet.com');

    expect(employee.name).toBe("Fred Jones");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks methods for employee classes', () => {
    const employee = new Employee('Fred Jones', 1111, 'fredjones@internet.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})