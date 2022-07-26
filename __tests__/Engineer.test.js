const { Engineer } = require('../lib/Engineer');

test('Creates new Engineer', () => {
    const employee = new Engineer('Fred Jones', 1111, 'fredjones@internet.com', 'fredjones');

    expect(employee.name).toBe("Fred Jones");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test('Checks methods for Engineer classes', () => {
    const employee = new Engineer('Fred Jones', 1111, 'fredjones@internet.com', 'fredjones');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGitHub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
})

