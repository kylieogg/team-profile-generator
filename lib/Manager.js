const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        this.name = name;
        this.officeNumber = officeNumber;
    }

    getName() {
        return {
            name: this.name
        }
    }

    getOfficeNumber() {
        return {
            officeNumber = this.officeNumber
        }
    }
}

module.exports = Manager;