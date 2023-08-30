const employee = {
    "name": "Elliott Smith",
    "streetAddress": "15 W. Easy St."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newInfo = {...employee };
    newInfo[key] = value;
    return newInfo
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const deleteKey = {...employee};
    delete deleteKey[key];
    return deleteKey
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
