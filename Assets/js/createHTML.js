const fs = require("fs");
let imageIndicies = [1, 2, 3, 4, 5, 6];

// function to remove element from array
function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

function arrayRemoveAlt(arr, val) {
    arr.splice(arr.indexOf(val), 1);
}

// get indicies if its 'male' or 'female'
function getIndicies(count) {
    var imageNumber = Math.floor(Math.random() * 3) + count;
    // ACCOUNT FOR DUPLICATES
    while (!imageIndicies.includes(imageNumber)) {
        imageNumber = Math.floor(Math.random() * 3) + count;
    }
    // remove element from array
    arrayRemoveAlt(imageIndicies, imageNumber);
    return imageNumber;
}

function renderHTMLFile(employees) {
    fs.writeFileSync(
        "./../../index.html",
        /*html*/ `

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- google fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&family=Raleway:wght@600&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="./Assets/css/style.css" />
        <title>Workplace Team</title>
    </head>
    <body>
        <header>
            <h1 class="title">Meet The Team!</h1>
            <h6 class="subtitle">Hover over each card to meet us!</h6>
        </header>


        <main>
            
            ${employees
                .map((employee) => {
                    // get gender & reset employee variable
                    var gender = employee[1];
                    var employee = employee[0];
                    const role = employee.getRole();
                    let extra;
                    let imageNumber;

                    if (imageIndicies.length == 0) {
                        imageIndicies = [1, 2, 3, 4, 5, 6];
                    }

                    var presets = {
                        Male: {
                            Elliot: 1,
                            "Mr. Robot": 2,
                            Tyrell: 3,
                        },
                        Female: {
                            Darlene: 4,
                            Dominique: 5,
                            Angela: 6,
                        },
                    };

                    var name = employee.getName();
                    // LOGIC FOR GENDER
                    // MALE = 1, 2, 3; FEMALE = 4, 5, 6
                    if (gender == "Male") {
                        imageNumber = getIndicies(1);
                        // see if it matches the actual characters
                        if (name in presets.Male) {
                            imageNumber = presets.Male[name];
                        }
                    } else if (gender == "Female") {
                        imageNumber = getIndicies(4);
                        // see if it matches the actual characters
                        if (name in presets.Female) {
                            imageNumber = presets.Female[name];
                        }
                    }

                    extra = {
                        // add extra roles
                        Manager: [
                            `Office: ${employee.officeNumber}`,
                            "Hello, I am a Manager within this team. The Manager is responsible for all actions taken by the organization.",
                            "💼 Manager",
                            // svg icon for 'office number'
                            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                            <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
                            </svg>`,
                        ],
                        Engineer: [
                            `Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`,
                            "Hello, I am an Engineer within this team. The Engineer is responsible for maintaining all operations within the organization.",
                            "⚙️ Engineer",
                            // svg icon for 'github'
                            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>`,
                        ],
                        Intern: [
                            `School: ${employee.school}`,
                            "Hello, I am an Intern within this team. The Intern is responsible for getting coffee for the team.",
                            "👨🏽‍💼 Intern",
                            // svg icon for 'school'
                            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                            </svg>`,
                        ],
                    };

                    return /*html*/ `
            <div class="card">
                <div class="card-container">
                    <section class="heading-card">
                        <img src="./Assets/images/headshot${imageNumber}.png" alt="headshot_${imageNumber}" class="headshot"/>
                        <p class="name">${employee.getName()}</p>
                        <p class="role">${extra[role][2]}</p>
                    </section>
                    <section class="info-card">
                        <p class="description">
                            ${extra[role][1]}
                        </p>
                        <section class="info-content">
                            <h3>
                                <!-- refer to this stie for icons: https://icons.getbootstrap.com/ -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-person-badge"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                                    />
                                    <path
                                        d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"
                                    />
                                </svg>
                                ID: #${employee.getId()}
                            </h3>
                            <h3>${extra[role][3]}${extra[role][0]}</h3>
                            <h3>
                                Email:
                                <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                            </h3>
                        </section>
                    </section>
                </div>
            </div>
            `;
                })
                .join("")}
        
        </main>
    </body>
</html>`
    );
}

module.exports = renderHTMLFile;
