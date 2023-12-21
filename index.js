// assign an employee variable to an Object containing name and streetAddress keys
const employee = {
  name: "Django",
  streetAddress: "123 Elm Street",
};

// should take in three arguments: an employee Object, a key and a value
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  // should not mutate the employee; it should return a new Object that has an updated value for the key passed in
  // create new variable and store employee
  // return new object with updated value
  // change value in copy object

  // const newEmployee = { ...employee };
  // newEmployee[key] = value;
  // return newEmployee;

  // or use Object.assign instead
  return Object.assign({}, employee, { [key]: value });
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  // should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in
  employee[key] = value;
  return employee;
};

// should take in a employee Object and a key
const deleteFromEmployeeByKey = (employee, key) => {
  // should delete the property with that key from the employee Object
  // should not mutate the original employee Object
  // it should return a new Object that doesn't include the identified key-value pair
  const newEmployee = Object.assign({}, employee);

  delete newEmployee[key];
  return newEmployee;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  // should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object
  delete employee[key];
  return employee;
};
