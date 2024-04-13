class department{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    addDepartment(){
        return`
        INSERT INTO department(id,name)
        VALUES(${id},${name})`;
    }
}
class role{
    constructor(id,title,salary,departmentID){
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentID = departmentID;
    }
    addRole(){
        return`
        INSERT INTO role(id,title,salary,departmentID)
        VALUES(${id},${title},${salary},${departmentID})`;
    }
}
class employee{
    constructor(id,firstName,lastName,roleID,managerID){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleID = roleID;
        this.managerID = managerID;
    }
    addEmployee(){
        return`
        INSERT INTO employee(id,firstName,lastName,roleID,managerID)
        VALUES(${id},${firstName},${lastName},${roleID},${managerID})
        `;
    }
    updateRoleID(){
        return``;
    }
}