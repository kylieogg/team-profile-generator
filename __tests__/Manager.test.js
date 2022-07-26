const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Fred', '100');

    expect(manager.name).toBe('Fred');
    expect(manager.officeNumber).toBe('100');
});


test('gets employee Name', () => {

})


test('gets employee Id', () => {

})


test('gets employee Email', () => {

})


test('gets employee Role', () => {

})

