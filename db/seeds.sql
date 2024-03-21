INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", 1, 100000),
       ("Salesperson", 1, 80000),
       ("Lead Engineer", 2, 150000),
       ("Software Engineer", 2, 120000),
       ("Account Manager", 3, 160000),
       ("Accountant", 3, 125000),
       ("Legal Team Lead", 4, 250000),
       ("Lawyer", , 190000);

INSERT INTO employee (first_name, last_name, department_id, salary, manager_id)
VALUES 
       ("John", "Doe", 1, 100000, NULL ),
       ("Mike", "Chan", 1, 80000, 1 ),
       ("Ashley", "Rodriguez", 150000, NULL);