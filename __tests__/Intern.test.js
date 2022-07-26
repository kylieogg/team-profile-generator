const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Fred', 'https://github.com/fred01');

    expect(intern.name).toBe('Fred');
    expect(intern.school).toBe('Ohio State University');
});