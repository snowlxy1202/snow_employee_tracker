const inquirer = require('inquirer');
const mysql = require('mysql2');
const { questions } = require('./lib/questions');
require('console.table');
const { viewDepartment, addDepartment } = require('./lib/department');
const { viewRole, addRole } = require('./lib/role');
const { viewEmployee, addEmployee, updateEmployee } = require('./lib/employee');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'yy91655619',
    database: 'management_db'
});

function init() {
    inquirer.prompt(questions).then((answers) => {
        switch (answers.questions) {
            case "Add employee":
                addEmployee(connection, init);
                break;
            case "Update an employee role":
                updateEmployee(connection, init);
                break;
            case "View all roles":
                viewRole(connection, init);
                break;
            case "Add role":
                addRole(connection, init);
                break;
            case "View all departments":
                viewDepartment(connection, init);
                break;
            case "Add a department":
                addDepartment(connection, init);
                break;

            default:
                connection.end();
                break;
        }
    });
};

init();