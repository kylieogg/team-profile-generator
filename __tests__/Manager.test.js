const { Manager } = require('../lib/Manager');

test('creates a new Manager', () => {
    const employee = new Manager('Fred Jones', 1111, 'fredjones@internet.com', 300);

    expect(employee.name).toBe('Fred Jones');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});


test('Checks methods for all Manager classes', () => {
    const employee = new Manager('Fred Jones', 1111, 'fredjones@internet.com', 300);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
})
