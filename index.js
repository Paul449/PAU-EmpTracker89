const inquirer = require('inquirer');
const pool = require('pg');
const SQLQueries = require('./Queries/SQL-queries');
const questions = [{
    type:'list',
    name:'tables',
    choices:["View all Departments","View all roles","view all employees","Add department","add a role","add an employee","update an employee role"],
    message:'What would you like to do?'
},
/*
//Add department
{
    type:'input',
    name:'department',
    message:'What is the name of the department?'
},
//Add role
{

    type:'input',
    name:'role',
    message:'What is the name of the role?'
},
{
    type:'input',
    name:'salary',
    message:'What is the salary of the role?'
},
{
    type:'list',
    name:'departmentRole',
    choices:["Engineering","Finance","Legal","Sales","service"],
    message:'Which department does the role belong to?'
},
//Add employee
{
    type:'input',
    name:'firstName',
    message:'What is the employee\'s\'first name?'
},
{
    type:'input',
    name:'lastName',
    message:'What is the employee\'s\' last name?'
},
{
    type:'list',
    name:'employeeRole',
    choices:["Sales Lead","Salesperson","Lead Engineer","Software Engineer","Account Manager","Accountant","Legal team lead","Lawyer","Customer Service"],
    message:'What is the employee\'s\' role?'
},
{
    type:'list',
    name:'manager',
    choices:["None","John Doe","Mike Chan","Ashley Rodriguez","Kevin Tupik","Kunal Singh","Malia Brown","Sarah Lourd","Tom Allen","Sam Kash"],
    message:'Who is the employee\'s\' manager?'
},
//update employee
{
    type:'list',
    name:'updateEmployee',
    choices:["John Doe","Mike Chan","Ashley Rodriguez","Kevin Tupik","Kunal Singh","Malia Brown","Sarah Lourd","Tom Allen","Sam Kash"],
    message:'Which employee\'s\' role do you want to update?'
},
{
    type:'list',
    name:'assignRole',
    choices:["Sales Lead","Salesperson","Lead Engineer","Software Engineer","Account Manager","Accountant","Legal team lead","Lawyer","Customer Service"],
    message:'Which role would you like to assign for the selected employee?'
},
*/
];
// conditional statements for displaying questions on the console
/*
let selection = answers.choices;
if(selection === "Add department"){
 
} else if(selection === "Add a role"){

} else if(selection === "add an employee"){

} else if(selection === "update an employee role"){

}
*/
const addDepartment = [
    {
        type:'input',
        name:'department',
        message:'What is the name of the department?'
    }
]
const addRole =[
    {

        type:'input',
        name:'role',
        message:'What is the name of the role?'
    },
    {
        type:'input',
        name:'salary',
        message:'What is the salary of the role?'
    },
    {
        type:'list',
        name:'departmentRole',
        choices:["Engineering","Finance","Legal","Sales","service"],
        message:'Which department does the role belong to?'
    },
]
const addEmployee = [
    {
        type:'input',
        name:'firstName',
        message:'What is the employee\'s\'first name?'
    },
    {
        type:'input',
        name:'lastName',
        message:'What is the employee\'s\' last name?'
    },
    {
        type:'list',
        name:'employeeRole',
        choices:["Sales Lead","Salesperson","Lead Engineer","Software Engineer","Account Manager","Accountant","Legal team lead","Lawyer","Customer Service"],
        message:'What is the employee\'s\' role?'
    },
    {
        type:'list',
        name:'manager',
        choices:["None","John Doe","Mike Chan","Ashley Rodriguez","Kevin Tupik","Kunal Singh","Malia Brown","Sarah Lourd","Tom Allen","Sam Kash"],
        message:'Who is the employee\'s\' manager?'
    },
];
const updateEmployee = [
    {
        type:'list',
        name:'updateEmployee',
        choices:["John Doe","Mike Chan","Ashley Rodriguez","Kevin Tupik","Kunal Singh","Malia Brown","Sarah Lourd","Tom Allen","Sam Kash"],
        message:'Which employee\'s\' role do you want to update?'
    },
    {
        type:'list',
        name:'assignRole',
        choices:["Sales Lead","Salesperson","Lead Engineer","Software Engineer","Account Manager","Accountant","Legal team lead","Lawyer","Customer Service"],
        message:'Which role would you like to assign for the selected employee?'
    },
];

function department(){
    inquirer.prompt(addDepartment).then(answer=>{console.log(answer)}) 
};
function role(){
    inquirer.prompt(addRole).then(answer=>{console.log(answer)}) 
};
function employee(){
    inquirer.prompt(addEmployee).then(answer=>{console.log(answer)}) 
};
function updateEmp(){
    inquirer.prompt(updateEmployee).then(answer=>{console.log(answer)}) 
};

async function promptQuestions(){
 const answers = await inquirer.prompt(questions);
 if(answers.choices === "add department"){
    return department();
 } else if(answers.choices === "add a role"){
    return role();
 } else if(answers.choices === "add an employee"){
    return employee();
 } else if(answers.choices === "update an employee role"){
    return updateEmp();
 }
}
promptQuestions();


