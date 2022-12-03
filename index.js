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
                name: "position",
                message: "What position is this employee?",
                choices: ["Manager", "Intern", "Engineer"],
            },
            {
                type: "input",
                name: "id",
                message: "What is the id of this employee?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the email of this employee?",
            },
        ])
        .then(({ position, name, email, id }) => {
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
                            employees.push(
                                new Manager(name, id, email, officeNumber)
                            );

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
                            employees.push(new Intern(name, id, email, school));

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
                            employees.push(
                                new Engineer(name, id, email, github)
                            );

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
            else renderHTMLFile(employees);
        });
}

newEmployee();
