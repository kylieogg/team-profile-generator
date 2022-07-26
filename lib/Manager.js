const Employee = require('./Employee');

const managerInputArr = [

    {
        type: 'input',
        name: 'name',
        message: "What is the name of the manager?"
    },

    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID?"
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the email address of the manager?"
    },

    {
        type: 'input',
        name: 'name',
        message: "What is the office number of the manager?"
    },
]

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
        }

    getOfficeNumber() {
        return this.officeNumber;
        }
}

module.exports = { Manager, managerInputArr };