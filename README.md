# 10-Team-Profile-Generator

## Description

This project is an attempt to create a program, with the help of the external 'Inquirer' package, that will generate a custom 'Team Profile' page based on a user's input. The user can create employees using the CLI and can include an employee's name, gender, position, and id. Different additional questions are asked depending on the user's input for the employee's positions. For example, if the user selects 'Engineer' as the employee's position, the user is prompted for the employee's github username. On the other hand, if the user sets the employee's position as 'Manager', the user is prompted for the employee's office number. After the user completes all questions, the user data is returned as an array of employee objects that are created with classes. Each position that can be selected is created with subclasses that include unique parameters and extend a parent class 'Employee'. An HTML file is, then, generated based on the inputted information. Each employee will have a dedicated card that can be viewed to show their personal information based on the user's input.

This project was developed with specific tests to ensure that the 'Employee' class & it's subclasses were built correctly.

![](https://github.com/noahfajarda/10-Team-Profile-Generator/blob/main/Assets/visuals/README_assets/PROFILE-GENERATOR-DEMO.gif)

## Screenshot

![App Screenshot](https://github.com/noahfajarda/10-Team-Profile-Generator/blob/main/Assets/visuals/README_assets/Screenshot1.png)
![App Screenshot](https://github.com/noahfajarda/10-Team-Profile-Generator/blob/main/Assets/visuals/README_assets/Screenshot2.png)
