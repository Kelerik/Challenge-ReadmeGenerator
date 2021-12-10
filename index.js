//  Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
   // user info
   { type: "input", name: "name", message: "What is your name?" },
   {
      type: "input",
      name: "username",
      message: "What is your Github username?",
   },
   { type: "input", name: "email", message: "What is your email address?" },
   // project info
   { type: "input", name: "title", message: "Enter the title of your project" },
   {
      type: "input",
      name: "description",
      message: "Write a description of your project",
   },
   {
      type: "input",
      name: "installation",
      message: "Write the installation instructions for your project",
   },
   {
      type: "input",
      name: "uses",
      message: "Describe the uses of your project",
   },
   {
      type: "input",
      name: "guidelines",
      message: "Write the contribution guidelines for your project",
   },
   {
      type: "input",
      name: "test",
      message: "Write the test instructions for your project",
   },
   {
      type: "list",
      name: "license",
      message: "Which license do you wish to use for your project?",
      choices: [
         "GNU AGPLv3",
         "GNU GPLv3",
         "GNU LGPLv3",
         "Mozilla Public License 2.0",
         "Apache License 2.0",
         "MIT License",
         "Boost Software License 1.0",
         "The Unlicense",
      ],
   },
];

// function to write README file
function writeToFile(fileName, data) {
   // init filepath
   const filePath = "./dist/" + fileName + "/README.md";
   // promise
   return new Promise((resolve, reject) => {
      // create folder if doesn't exist
      if (!fs.existsSync(filePath)) {
         fs.mkdirSync(filePath);
      }
      // write file
      fs.writeFile(filePath, data, (err) => {
         // if error, reject the Promise and send error to the Promise's `.catch()` method
         if (err) {
            reject(err);
            return;
         }
         // if success, resolve the Promise and send successful data to the `.then()` method
         resolve(
            "README file successfully created! Save location: " + filePath
         );
      });
   });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
