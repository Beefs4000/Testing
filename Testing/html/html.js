const fs = require('fs');
const path = require('path');
const cardTemplatePath = path.join(__dirname, 'templates', 'card.html');
const mainTemplatePath = path.join(__dirname, 'templates', 'main.html');


function createCard(employee){

    // read the card template 
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8');

    // replace the placeholders with actual data
    let replaced = cardTemplate.replace('{{name}}', employee.getName())
    .replace('{{id}}', employee.getId())
    .replace('{{email}}', employee.getEmail())
    .replace('{{role}}', employee.getRole());

    
    if(employee.getRole() === 'Manager'){
        replaced = replaced.replace('{{attr_key}}', 'Office Number')
        .replace('{{attr_value}}', employee.getOfficeNumber())
    }
    if(employee.getRole() === 'Engineer'){
        replaced = replaced.replace('{{attr_key}}', 'GitHub')
        .replace('{{attr_value}}', employee.getGithub())
    }
    if(employee.getRole() === 'Intern'){
        replaced = replaced.replace('{{attr_key}}', 'School')
        .replace('{{attr_value}}', employee.getSchool())
    }
    
    return replaced;
}


function generateHtml(employees){

const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8');
// loop through each employee
// generate a card for each employee
const cards = employees.map(createCard).join('')

// once done
// join cards in big string


// replace the body with the card string
return mainTemplate.replace('{{body}}', cards);


}



module.exports = generateHtml;