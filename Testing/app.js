const inquirer = require('inquirer');

async function main() {

    const answers = await inquirer.prompt([

        {
            type: 'list',
            message: 'What it the role?',
            name: 'role',
            choices: [
                'manager',
                'engineer',
                'intern',
            ]
        },

        {
            type: 'input',
            message : 'What is the Name of the employee?',
            name: 'Name',
        },
        {
            type: 'input',
            message : 'What is the email of the employee?',
            name: 'email',
        },        
        {
            type: 'input',
            message : 'What is the ID of the employee?',
            name: 'ID',
        },

    ])

}

main();


// An app that asks questions to generate a team profile. 


// will keep asking to add new employees until we say enough

// ID, name email

// manager
// Office Number

// engineer
// GitHub

// intern
// School


// once we have got an employee, stoe it

// once the user says enough we will generate the HTML based on all employees collected








