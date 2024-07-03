// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

/* 
Create empty array called employeesArray
Collect employee data
Add data to array
Output the array information
*/
 

  /* 
  gather information for one employee: f name, l name, salary
  add that information to 'employeesArray'
  ask if we want to do it again
    if yes, repeat the process
    if no, do nothing

 */


    function genRandomNumber(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min)
    }


let employeesArray = []

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  addEmployees()
  
    function addEmployees(){

    let newEmployee = {
        firstName: '',
        lastName: '',
        salary: 0
      }
      
      newEmployee.firstName = prompt('Enter First Name:')
      newEmployee.lastName = prompt('Enter Last Name:')
      newEmployee.salary = Number(prompt('Enter Salary:'))
      if (isNaN(newEmployee.salary)) {
        newEmployee.salary = 0
      }

      employeesArray.push(newEmployee)

      if (confirm('Do you want to add another employee?') === true) {
        addEmployees()
      }
    }
	
  return employeesArray
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const salaries = []

  for (let i = 0; i < employeesArray.length; i++) {
    employeesArray[i].salary
    const salary = employeesArray[i].salary;
    salaries.push(salary)
  }

  console.log(salaries)

  let sum = 0

  for (let i = 0; i < salaries.length; i++){
    sum += salaries[i];
  }

console.log(`Average salary: ${sum / salaries.length}
No. of employees: ${employeesArray.length}`)
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    randomNum = genRandomNumber(0, employeesArray.length - 1)
    console.log(`Congratulations to ${employeesArray[randomNum].firstName} ${employeesArray[randomNum].lastName}, our random drawing winner!`)
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
