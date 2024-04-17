const inquirer = require("inquirer");
function viewEmployee(connection, cb) {
    connection.query("SELECT * FROM employee INNER JOIN role ON employee.role_id=role.id", (err, results) => {
      if (err) throw err;
      console.table(results);
      cb();
    });
  };
  