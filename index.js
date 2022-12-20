// Referring to the title docs
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Extensions we need
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// Publishing
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

// HTML generator
const html = require("./src/htmlgenerator");

// Team goes here
const teamProfile = [];

// Constructor function for manager
const managerPrompt = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: `What is the name of the Manager?`,
            },
            {
                type: "input",
                name: "id",
                message: `What is the ID number of the Manager?`,
            },
            {
                type: "input",
                name: "email",
                message: `What is the e-mail address of the Manager?`,
            },
            {
                type: "input",
                name: "office",
                message: `What is the Manager's office number?`,
            },
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            teamProfile.push(manager);
            resolve();
        })
    });
};



function Employee(name, id, email, last) {
    this.name = name;
    this.id = id;
    this.email = email;
    // this.last = last;
    this.getName()
    this.getId()
    this.getEmail()
    this.getRole()// —returns 'Employee'

}

// const employeePrompt = [
//     {
//         type: "list",
//         name: "employeeType",
//         message: "Please pick an employee category to add the next employee:",
//         choices: [
//             "Engineer",
//             "Intern",
//             {
//                 name: "Finished entering employees",
//                 value: false
//             }
//         ]
//     }
// ]
// function getEmployeeInfo(answers) {
//     const employee = answers.employee;
//     const employeeArray = [];
//     for (let i = 0; i < employee.length; i++) {
//         const position = employee[i];
//         employeeArray.push(
//             {
//                 type: "input",
//                 name: "name",
//                 message: `What is the name of the ${position}?`,
//             },
//             {
//                 type: "input",
//                 name: "id",
//                 message: `What is the ID number of the ${position}?`,
//             },
//             {
//                 type: "input",
//                 name: "email",
//                 message: `What is the e-mail address of the ${position}?`,
//             },
//         )
//     }
// }

// Constructor function for other employees
const employeePrompt = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Please pick an employee category to add the next employee:",
                choices: [
                    "Engineer",
                    "Intern",
                    {
                        name: "Finished entering employees",
                        value: false
                    }
                ]
            },
        ])
        .then function getEmployeeInfo(answers) {
            const employee = answers.employee;
            const employeeArray = [];
            for (let i = 0; i < employee.length; i++) {
                const position = employee[i];
                employeeArray.push(
                    {
                        type: "input",
                        name: "name",
                        message: `What is the name of the ${position}?`,
                    },
                    {
                        type: "input",
                        name: "id",
                        message: `What is the ID number of the ${position}?`,
                    },
                    {
                        type: "input",
                        name: "email",
                        message: `What is the e-mail address of the ${position}?`,
                    },
                )
            }
        }
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            teamProfile.push(manager);
            resolve();
        })
    });
};

// How do we start with the manager and then prompt for adding either an engineer or an intern?

// This will start the user prompts
function init() {
    // inquirer.prompt(questions)
    //     .then((inquirerResponse, data) => {
    //         console.log(inquirerResponse);
    // Need to write the data somewhere
    // })
    managerPrompt().then(() => {
        return employeePrompt();
    }).then(() => {
        const html = render(teamProfile)
        createHTMLFile(html);
    }).catch((err) => {
        console.log(err);
    });
}