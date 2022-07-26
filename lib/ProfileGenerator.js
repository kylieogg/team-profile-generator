const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Profile {
    constructor() {
        this.Manager;
        this.Engineer;
        this.Intern;
    }

    initialize() {

        inquirer
            .prompt[{
                type: 'text',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'text',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?"
            }]

            .then(
                (managerName, managerOfficeNumber) => {
                this.Manager = new Manager(managerName, managerOfficeNumber);
                print();
            })
    }
}

function print() {
    console.log(Manager.name);
}

module.exports = Profile;