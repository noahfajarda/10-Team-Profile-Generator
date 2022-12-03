const fs = require("fs");

function renderHTMLFile(employees) {
    fs.writeFileSync(
        "./index.html",
        /*html*/ `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>P</title>
    </head>
    <body>
        <header>My Team</header>

    ${employees
        .map((employee) => {
            const role = employee.getRole();
            let extra;

            extra = {
                // add extra roles
                Manager: `Office Number: ${employee.officeNumber}`,
                Engineer: `Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`,
                Intern: `School: ${employee.school}`,
            };

            return /*html*/ `
        <section>
            <ul>
                <li>Name: ${employee.getName()}</li>
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>${role}</li>
                <li>${extra[role]}</li>
            </ul>
        </section>
    `;
        })
        .join("")}
</body>
</html>`
    );
}

module.exports = renderHTMLFile;
