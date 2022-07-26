const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    internInput() {
        inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: "What is the name of the intern?"
            },

            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID?"
            },

            {
                type: 'input',
                name: 'email',
                message: "What is the email address of the intern?"
            },

            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?"
            }
        ])

        .then(( answers ) => {
            answers.index = addIntern;
            internsArr.push(answers);

            return this.addTeamMember();
        })
    }

    getRole() {

    }

    getSchool() {

    }
}

module.exports = Intern;