const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name)
        this.school = school;
    }

    getRole() {

    }

    getSchool() {

    }
}

module.exports = Intern;