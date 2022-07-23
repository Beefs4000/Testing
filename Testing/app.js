const inquirer = require('inquirer');
const Engineer = require('./src/employees/Engineer');
const Intern = require('./src/employees/Intern');
const Manager = require('./src/employees/Manager');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./html/html')

const employees = [];
const outputHtmlFile = path.join(__dirname, 'output', 'team.html')

async function main() {

    const managerRole = 'manager';
    const engineerRole = 'engineer';
    const internRole = 'intern';
    

    const answers = await inquirer.prompt([

        {
            type: 'list',
            message: 'What it the role?',
            name: 'role',
            choices: [
                managerRole,
                engineerRole,
                internRole,
            ]
        },

        {
            type: 'input',
            message : 'What is the Name of the employee?',
            name: 'name',
        },
        {
            type: 'input',
            message : 'What is the email of the employee?',
            name: 'email',
        },        
        {
            type: 'input',
            message : 'What is the ID of the employee?',
            name: 'id',
        },

        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office_number',
            when: (answers) => answers.role === managerRole,
        },

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHub',
            when: (answers) => answers.role === engineerRole,
        },
        
        {
            type: 'input',
            message: 'What school do you attend?',
            name: 'school',
            when: (answers) => answers.role === internRole,
        },
        {
            type: 'confirm',
            message: 'Add another?',
            name: 'add_another',
        },
    ]);
    
    // once we have got an employee, store it
    // check for the role
    // create the employee object based on the role
    // add to the employee array
    if(answers.role === managerRole){
        employees.push(new Manager(answers.id, answers.email, answers.name, answers.office_number));
    }

    if(answers.role === engineerRole){
        employees.push(new Engineer(answers.id, answers.email, answers.name, answers.gitHub));
    }

    if(answers.role === internRole){
        employees.push(new Intern(answers.id, answers.email, answers.name, answers.school));
    }

    console.log(employees);

    // once the user says 'no', we will generate the HTML based on all employees collected
    if(!answers.add_another){
        // generate html
        const html = generateHtml (employees);

        // call FS module, write to file
        fs.writeFileSync(outputHtmlFile, html, 'utf-8');

    }else{
       await main();
    }

}

main();












