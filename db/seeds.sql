
TRUNCATE TABLE department; --previously had info to test my table--

INSERT INTO department(id,name)
VALUES
      (1,'Sales'),
      (2,'Engineering'),
      (3,'Finance'),
      (4,'Legal');
SELECT * FROM department;

INSERT INTO roles(id,title,salary,department_id)
VALUES
      (1,'Sales Lead',100000,1),
      (2,'Salesperson',80000,2),
      (3,'Lead Engineer',150000,3),
      (4,'Software Engineer',120000,4),
      (5,'Account Manager',160000,1),
      (6,'Accountant',125000,2),
      (7,'Legal Team Manager',250000,3),
      (8,'Lawyer',190000,4);
SELECT * FROM roles;

INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
VALUES
     (1,'John','Doe',1,1),
     (2,'Mike','Chan',2,2),
     (3,'Ashley','Rodriguez',3,3),
     (4,'Kevin','Tupik',4,4),
     (5,'Kunal','Singh',1,5),
     (6,'Malia','Brown',2,6),
     (7,'Sarah','Lourd',3,7),
     (8,'Tom','Allen',4,8);
SELECT * FROM employee;
