const inquirer = require('inquirer');
const SQLQueries = require('./Queries/SQL-queries');
const fs = require('fs');
const {Pool, Client} = require('pg');
const PATH = require('path');  
require('dotenv').config({
    override:true,
    path: path.join(__dirname,'../development.env')
});
const POOL = new Pool({
    User: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});
const questions = [{
    type:'list',
    name:'tables',
    choices:["View all Departments","View all roles","view all employees","Add department","add a role","add an employee","update an employee role"],
    message:'What would you like to do?'
},
];
// conditional statements for displaying questions on the console
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
 if(answers.tables === "View all Departments"){
    db.query(`SELECT * FROM  department`,(output)=>{
        console.table(output);
    });
 } else if(answers.tables === "View all roles"){
    db.query(`SELECT * FROM roles`,(output)=>{
        console.table(output);
    });
 } else if(answers.tables === "view all employees"){
    db.query(`SELECT * FROM employee`,(output)=>{
        console.table(output);
    });
 }
 else if(answers.tables === "Add department"){
    department();
 } else if(answers.tables === "add a role"){
     role();
 } else if(answers.tables === "add an employee"){
     employee();
 } else if(answers.tables === "update an employee role"){
     updateEmp();
 }
}
promptQuestions();


