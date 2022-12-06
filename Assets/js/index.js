const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// import HTML create
const renderHTMLFile = require("./createHTML");
const inquirer = require("inquirer");

const employees = [];

function newEmployee() {
    //TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of this employee?",
            },
            {
                type: "list",
                name: "gender",
                message: "What is the gender of this employee?",
                choices: ["Male", "Female"],
            },
            {
                type: "list",
                name: "position",
                message: "What position is this employee?",
                choices: ["Manager", "Intern", "Engineer"],
            },
            {
                type: "number",
                name: "id",
                message:
                    "What is the id of this employee (Please enter a NUMBER)?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the email of this employee?",
            },
        ])
        .then(({ position, name, gender, email, id }) => {
            switch (position) {
                case "Manager":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "officeNumber",
                                message: "What is the office number?",
                            },
                        ])
                        .then(({ officeNumber }) => {
                            employees.push([
                                new Manager(name, id, email, officeNumber),
                                gender,
                            ]);

                            another();
                        });
                    break;
                case "Intern":
                    // ask about school
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "school",
                                message: "What is the school?",
                            },
                        ])
                        .then(({ school }) => {
                            employees.push([
                                new Intern(name, id, email, school),
                                gender,
                            ]);

                            another();
                        });
                    break;

                case "Engineer":
                    // ask about github
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "github",
                                message: "What is the github?",
                            },
                        ])
                        .then(({ github }) => {
                            employees.push([
                                new Engineer(name, id, email, github),
                                gender,
                            ]);

                            another();
                        });
                    break;

                default:
                    console.warn("Invalid response.");
            }
        });
}

function another() {
    return inquirer
        .prompt([
            {
                type: "confirm",
                name: "more",
                message: "Create another employee?",
            },
        ])
        .then(({ more }) => {
            if (more) newEmployee();
            else {
                console.log(employees);
                renderHTMLFile(employees);
            }
        });
}

newEmployee();
