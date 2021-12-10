// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
   if (license === "None") {
      return "";
   } else {
      return (
         // create an image with a link
         // example format: [![alt text](http://www.google.com/images/nav_logo7.png)](http://google.com/)
         "[![" +
         // alt text
         license +
         // shields.io badge
         " License Badge](https://img.shields.io/badge/license-" +
         // license name displayed in the badge. must remove spaces
         license.replaceAll(" ", "_") +
         "-blue)](" +
         // link to license description
         renderLicenseLink(license) +
         ")"
      );
   }
};

// function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
   // reference: https://choosealicense.com/licenses/
   switch (license) {
      case "GNU AGPLv3":
         return "https://choosealicense.com/licenses/agpl-3.0/";

      case "GNU GPLv3":
         return "https://choosealicense.com/licenses/gpl-3.0/";

      case "GNU LGPLv3":
         return "https://choosealicense.com/licenses/lgpl-3.0/";

      case "Mozilla Public License 2.0":
         return "https://choosealicense.com/licenses/mpl-2.0/";

      case "Apache License 2.0":
         return "https://choosealicense.com/licenses/apache-2.0/";

      case "MIT License":
         return "https://choosealicense.com/licenses/mit/";

      case "Boost Software License 1.0":
         return "https://choosealicense.com/licenses/bsl-1.0/";

      case "The Unlicense":
         return "https://choosealicense.com/licenses/unlicense/";

      default:
         return "";
   }
};

// function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
   if (license === "None") {
      return "This project does not have any license.";
   } else {
      return (
         "This project is licensed under the [" +
         license +
         "](" +
         renderLicenseLink(license) +
         ")."
      );
   }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
   return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents 

- [Description](#Description)
- [Installation Instructions](#Installation Instructions)
- [Examples of Uses](#Examples of Uses)
- [Contribution Guidelines](#Contribution Guidelines)
- [Test Examples](#Test Examples)
- [Questions](#Questions)
- [License](#License)

## Description

${data.description}

## Installation Instructions

${data.installation}

## Examples of Uses

${data.uses}

## Contribution Guidelines

${data.guidelines}

## Test Examples

${data.test}

## Questions

- ${data.name}
- ${data.username}
- ${data.email}

## License

${renderLicenseSection(data.license)}
`;
};

module.exports = generateMarkdown;
