const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name)
        this.officeNumber = officeNumber;
    }

    getRole() {

    }
}

module.exports = Manager;