const Employee = require('./Employee');

const engineerInputArr = [
        
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

        ]

        class Engineer extends Employee {
            constructor(name, id, email, github) {
                super(name, id, email);
                this.github = github;
            }

            getRole() {
                return 'Engineer';
            }

            getGitHub() {
                return this.github;
            }



        
}

module.exports = { Engineer, engineerInputArr };