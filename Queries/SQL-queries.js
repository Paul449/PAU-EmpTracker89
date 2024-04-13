class department{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
class roles{
    constructor(id,title,salary,department){
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department = department;
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
}