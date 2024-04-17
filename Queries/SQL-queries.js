
class department{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    addDepartment(id,name){
        return`
        INSERT INTO department(id,name)
        VALUES
            ('${id}','${name}');
        `;
    }
}

class roles{
    constructor(id,title,salary,department_id){
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }
    addRole(id,title,salary,department_id){
        return`
        INSERT INTO roles(id,title,salary,department_id)
        VALUES
            ('${id}','${title}','${salary}','${department_id}');
        `;
    }
}
class employee{
    constructor(id,first_name,last_name,role_id,manager_id){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    addEmployee(id,first_name,last_name,role_id,manager_id){
        return`
        INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
        VALUES
            ('${id}','${first_name}','${last_name}','${role_id}','${manager_id}');
        `;
    }
    updateRoleID(id,role_id){
        return`
        UPDATE employee
        SET name = ${role_id}
        WHERE id = ${id}
        `;
    }
}
module.exports = department;
module.exports = roles;
module.exports = employee;