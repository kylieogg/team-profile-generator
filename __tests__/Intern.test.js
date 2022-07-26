const { Intern } = require('../lib/Intern');

test('creates a new Intern', () => {
    const employee = new Intern('Fred Jones', 1111, 'fredjones@internet.com', 'OSU');

    expect(employee.name).toBe('Fred Jones');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Checks all Intern class methods', () => {
    const employee = new Intern('Fred Jones', 1111, 'fredjones@internet.com', 'OSU');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})
