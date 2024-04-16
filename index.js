require('dotenv');
const inquirer = require('inquirer');
const SQLQueries = require('./Queries/SQL-queries');
const fs = require('fs');
const {Client} = require('pg');
const PATH = require('path');  
const client = new Client({
    host:"localhost",
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
});

const questions = [{
    type:'list',
    name:'tables',
    choices:["View all Departments","View all roles","view all employees","Add department","add a role","add an employee","update an employee role"],
    message:'What would you like to do?'
},
];
// additional questions
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
 await client.connect();
 const answers = await inquirer.prompt(questions);
 console.log('data',answers);
 if(answers.tables === "View all Departments"){
    
    client.query('SELECT * FROM  department',(error,output)=>{
        if(error){
            console.error('error occured:',error)
        }
        console.table(output.rows);
    });
 } else if(answers.tables === "View all roles"){
    client.query('SELECT * FROM roles',(error,output)=>{
            if(error){
            console.error('error occured:',error)
        }
        console.log(output.rows);
    });
 } else if(answers.tables === "view all employees"){
    client.query('SELECT * FROM employee',(error,output)=>{
        if(error){
            console.error('error occured:',error)
        }
        console.log(output.rows);
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


