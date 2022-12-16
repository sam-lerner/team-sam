const fs = require('fs');
const inquirer = require('inquirer');

// Constructor function for prompts
function Employee(name, id, email, last){
    this.name = name;
    this.id = id;
    this.email = email;
    this.last = last;
}

// Array for positions
const position = ['Manager', 'Engineer', 'Intern'];

// Array for final field
const final = ['Office number', 'Github username', 'school'];

// Array for questions
const questions = [
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
    {
        type: "input",
        name: "last",
        message: `What is the ${final} of the ${position}?`,
    },
];

// How do we start with the manager and then prompt for adding either an engineer or an intern?

// This will start the user prompts
function init(){
inquirer.prompt(questions)
.then((inquirerResponse, data) => {
    console.log(inquirerResponse);
    // Need to write the data somewhere
})
}