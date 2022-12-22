// Referring to the title docs
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Extensions we need
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// Publishing
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

// HTML generator
const createTeam = require("./src/htmlgenerator.js");

// Team goes here
const teamProfile = [];

// Constructor function for manager
const managerPrompt = () => {
    return inquirer.prompt([
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
        {
            type: "list",
            name: "employeeType",
            message: "Please pick an employee category to add the next employee:",
            choices: [
                "Engineer",
                "Intern",
                "Finished entering employees",
            ]
        },
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        teamProfile.push(manager);
        if (answers.employeeType == "Engineer") {
            return engineerPrompt();
        } else if (answers.employeeType == "Intern") {
            return internPrompt();
        } return generateHTML();

    })

};
// Engineer Questions
const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `What is the name of the Engineer?`,
        },
        {
            type: "input",
            name: "id",
            message: `What is the ID number of the Engineer?`,
        },
        {
            type: "input",
            name: "email",
            message: `What is the e-mail address of the Engineer?`,
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's GitHub username?",
        },
        {
            type: "list",
            name: "employeeType",
            message: "Please pick an employee category to add the next employee:",
            choices: [
                "Engineer",
                "Intern",
                "Finished entering employees",
            ]
        },]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamProfile.push(engineer);
            if (answers.employeeType == "Engineer") {
                return engineerPrompt();
            } else if (answers.employeeType == "Intern") {
                return internPrompt();
            } return generateHTML();
        })
}

// Intern Questions
const internPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `What is the name of the Intern?`,
        },
        {
            type: "input",
            name: "id",
            message: `What is the ID number of the Intern?`,
        },
        {
            type: "input",
            name: "email",
            message: `What is the e-mail address of the Engineer?`,
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the Intern's school name?",
        },
        {
            type: "list",
            name: "employeeType",
            message: "Please pick an employee category to add the next employee:",
            choices: [
                "Engineer",
                "Intern",
                "Finished entering employees",
            ]
        },]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamProfile.push(intern);
            if (answers.employeeType == "Engineer") {
                return engineerPrompt();
            } else if (answers.employeeType == "Intern") {
                return internPrompt();
            } return generateHTML();
        })
};

// Create the team
function generateHTML() {
    fs.writeFileSync(outputPath, createTeam(teamProfile), (err) =>
        err ? console.log(err)
            : console.log("Success!")
    )
}


// How do we start with the manager and then prompt for adding either an engineer or an intern?

// This will start the user prompts
function init() {
    managerPrompt()
}

init();

