const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    engineerInput() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the name of the engineer?"
            },

            {
               type: 'input',
               name: 'id',
               message: "What is the ID of the engineer?" 
            },

            {
                tyep: 'input',
                name: 'email',
                message: "What is the email address of the engineer?"
            },

            {
                type: 'input',
                name: 'github',
                message: 'What is the GitHub username of the engineer?'
            }
        ])

        .then(( answers ) => {
            answers.index = addEngineer;
            engineersArr.push(answers);

            return this.addTeamMember();
        })
    }

    getRole() {

    }

    getGithub() {

    }
}

module.exports = Engineer;