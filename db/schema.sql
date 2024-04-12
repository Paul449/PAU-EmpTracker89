DROP DATABASE IF EXISTS Employees_db;

CREATE DATABASE Employees_db;

/c:Employees_db;

CREATE TABLE department(
    id: SERIAL PRIMARY KEY,
    name: VARCHAR(30) UNIQUE NOT NULL,
);
CREATE TABLE roles(
    id: SERIAL PRIMARY KEY,
    title: VARCHAR(30) UNIQUE NOT NULL,
    salary: DECIMAL NOT NULL,
    department_id: INTEGER NOT NULL,
);
CREATE TABLE employee(
    id: SERIAL PRIMARY KEY,
    firstName: VARCHAR(30) UNIQUE NOT NULL,
    lastName: VARCHAR(30) UNIQUE NOT NULL,
    role_id: INTEGER NOT NULL,
    manager_id: INTEGER,
);