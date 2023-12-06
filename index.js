// Write your solution in this file!
const employee = {
  name: "Django",
  street: "123 Elm Street",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  // const newEmployee = { ...employee };
  // newEmployee[key] = value;
  // return newEmployee;
  return Object.assign({}, employee, { [key]: value });
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const newObject = Object.assign({}, employee);
  delete newObject[key];
  return newObject;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
