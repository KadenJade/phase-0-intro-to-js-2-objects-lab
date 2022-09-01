// Write your solution in this file!
const employee ={};

//0 
employee.name = "John";
employee.streetAddress = "Boredem";
//1
function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmployee = {...employee};
newEmployee[key] = value;
return newEmployee
}
//2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
//3
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee
}
//4
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}