const fs = require("fs");

function renderHTMLFile(employees) {
    fs.writeFileSync(
        "./../../inddex.html",
        /*html*/ `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./Assets/css/style.css" />
        <title>Workplace Team</title>
    </head>
    <body>
        <header class="justify-content-center">
            <h1 class="text-center m-0 title">Meet The Team!</h1>
            <h6 class="text-center m-0">Hover over each card to meet us!</h6>
        </header>

        <main>
            <section class="main-section">
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
                    <!-- CODEPEN CARD -->
                    <div class="card">
                        <section>
                            <ul>
                                <li>Name: ${employee.getName()}</li>
                                <li>ID: ${employee.getId()}</li>
                                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                                <li>${role}</li>
                                <li>${extra[role]}</li>
                            </ul>
                        </section>
                    </div>
                `;
                    })
                    .join("")}
            </section>

            <!-- <section class="main-section">
                <div class="card">Magic Card</div>
                <div class="card">Magic Card</div>
                <div class="card">Magic Card</div>
                <div class="card">Magic Card</div>
                <div class="card">Magic Card</div>
            </section> -->
        </main>
        
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
            integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
            crossorigin="anonymous"
        ></script>
    </body>
</html>`
    );
}

module.exports = renderHTMLFile;
