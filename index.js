// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
   // user info
   "What is your name?",
   "What is your Github username?",
   "What is your email address?",
   // project info
   "Enter the title of your project",
   "Write a description of your project",
   "Write the installation instructions for your project",
   "Describe the uses of your project",
   "Write the contribution guidelines for your project",
   "Write the test instructions for your project",
];

// TODO: Create a function to write README file
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
