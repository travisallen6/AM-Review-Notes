// ############################################### //
// #------------------ CLASSES ------------------# //
// ############################################### //

// ========================================================================= //
// === Open quokka to view output                                        === //
// === Install quokka vscode extension                                   === //
// === Open command palette - windows = CTRL + SHIFT + P, mac = ⇧ ⌘ P   === //
// === Type Quokka                                                       === //
// === Select Quokka.js: Start on Current File                           === //
// ========================================================================= //

// Classes are "syntactical sugar" for constructor functions.
// Constructor functions are special functions that help us build a framework to structure objects using the same "template"

////////// PROBLEM 1 //////////

/*
  Make a class to help us build all of the employees.
  Each employee has the following properties:
    - first_name
    - last_name
    - email
    - age
  Each employee has the following methods:
    - makeWidget
      - This returns a string equal to the employees first name + last name + the word widget
      - Example: "Dave Smith Widget"

  Call your class Employee and receive all the data in the constructor in the order listed above.
*/

//Code Here
class Employee {
    // Since every employee will have a different first name, last name, email, and age, we will need to identify those as parameters in our constructor function. When we create a new instance of this class, we will pass this information as arguments when we invoke the class.
    constructor(first_name, last_name, email, age){
      
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.age = age;
    }
  
    makeWidget(){
      let { first_name, last_name, email, age } = this
      return first_name + ' ' + last_name + ' ' + 'Widget'
    }
  }

  let kevinMalone = new Employee('Kevin', 'Malone', 'k-money@dundermifflin.com', 38)

  // As you can see, this now builds an employee object following the structure that we defined in the Employee class
  console.log(kevinMalone)
  
  
  ////////// PROBLEM 2 //////////
  
  /*
    Next, make a manager for Widget Co.
    The manager has all the same properties as an Employee.
    Each manager has the following additional properties:
      - reports (other employees) that defaults to an empty array
    Each manager has the following additional methods:
      - hire (employee)
        - Accepts a new employee as a parameter and pushes it to their list of reports.
      - fire (index)
        - Fire removes employees from their list of reports at the given index
  
    Call your new class Manager
  */
  
  //Code Here
   
  
  class Manager extends Employee {
    // We can create a class that keeps all of the properties from another class, and can add additional properties and methods.
    // In this case, if we want to define a manager, we know that a manager is still an employee with a first name, last name, and could still make widgets with the makeWidget method, but we also want managers to be able to do other things. We can accomplish this by using the 'extends' keyword
  
    constructor(firstName, lastName, email, age){
      // When we create a new manager, we still want to define their first name, last name, email, and age when we create a new instance
      super(firstName, lastName, email, age)
      // The cool thing is that we can invoke a special function called "super" which will call the "parent's" constructor method, in this case the Employee class constructor method is being called.
      // By calling super, we don't need to define this.first_name = firstName etc. because the parent class takes care of that already.

      // We can also identify new properties that we want to add on top of the properties inherited from the parent class
      this.reports = [];
    }
  
    // This method adds an employee to this.reports
    hire(employee) {
      this.reports.push(employee)
    }
  
    // This method removes an employee from the this.reports given their index in the array
    fire(index) {
      this.reports.splice(index, 1)
    }
  
  }

  let michaelScott = new Manager('Michael', 'Scott', 'michael@dundermifflin.com', 42)
  // As you can see, Michael still has a first name, last name, email, age; even though we did not need to explicitly define this.first_name. That means these properties were inherited from the employee class
  console.log(michaelScott)
  // You will also notice that Michael has a reports array since we defined that in the Manager class
  
  // Lets give Michael an underling
  michaelScott.hire(kevinMalone)
  console.log(michaelScott.reports)
  // Bob was added to Michael's

  // We can also fire kevin as well, as long as we know his index in the array which is 0
  michaelScott.fire(0)
  console.log(michaelScott.reports)
  // The array is now empty since Kevin was fired
  
  
  
  ////////// PROBLEM 3 //////////
  
  /*
    Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
    Progressive Managers have all the same properties as the manager,
    but they also have the following additional properties:
      - title - default 'Not a manager'
      - bonus - default 0
  
    When employees are added or removed we need to check and update their title. Their titles are as follows:
      0 : Not a manager
      1-3 : Barely Manager
      4-10 : Mostly Manager
      11-50 : Manager
      51-100 : Manager Plus
      101+ : Bestest Manager
  
    Everytime they fire an employee they get $100 added to their bonus.
  
    Call your new class ProgressiveManager
  */
  
  //Code Here
  class ProgressiveManager extends Manager {
    // By extending the manager class, this call will inherit all properties from the Manager class and the Employee class
    constructor(firstName, lastName, email, age) {
      // We still need to define a custom first name, last name, email, and age for each employee
      super(firstName, lastName, email, age)
      // We call super to invoke the parent's constructor method in this case Manager. Manager wil then call super on the employee which will set this employees first name, last name, email, and age

      // We can also give this class additional properties: title and bonus
      this.title = 'Not a manager'
      this.bonus = 0
    }

    // Since we will need to update the ProgressiveManager's title if we call hire, or fire, we can use one method to update their title after a report is hired or fired   
    updateTitle() {
      let numReports = this.reports.length
      if(numReports >= 101) {
        this.title = 'Bestest Manager'
      } else if(numReports >= 51) {
        this.title = 'Manager Plus'
      } else if(numReports >= 11) {
        this.title = 'Manager'
      } else if(numReports >= 4) {
        this.title = 'Mostly Manager'
      } else if(numReports >= 1) {
        this.title = 'Barely Manager'
      } else {
        this.title = 'Not a Manager'
      }
    }
    
    // Although we do inherit the hire and fire methods from the Manager class, we want these methods to behave a little differently than the parent, so we will re-define them here
    hire(employee) {
      // In this case we want to update the ProgressiveManager's title if an employee is hired
      this.reports.push(employee)
      this.updateTitle()
    }
  
    fire(index) {
      // If a ProgressiveManager's report is fired we need to update their title and give them a bonus
      this.reports.splice(index, 1)
      this.updateTitle()
      this.bonus += 100
    }
  }

  let dwightSchrute = new ProgressiveManager('Dwight', 'Schrute', 'dwight@dundermifflin.com', 34)

  console.log(dwightSchrute)
  // We were able to keep first_name, last_name, email, age from the Employee class
  // We were able to keep reports from the Manager class
  // We added a title and a bonus to the ProgressiveManager class and also modified the hire and fire methods

  // Lets give Dwight some employees
  dwightSchrute.hire(michaelScott)
  dwightSchrute.hire(kevinMalone)
  console.log(dwightSchrute.reports.length)

  // By hiring 2 employees, we Dwight's title should be 'Barely Manager'
  console.log(dwightSchrute.title)

  // If we fire one of dwight's reports, Dwight should get a $100 bonus and his reports array should get shorter by 1
  // Lets fire Kevin again and see what happens to Dwight's bonus and his reports array
  dwightSchrute.fire(1)
  console.log(dwightSchrute.bonus)
  console.log(dwightSchrute.reports.length)

  // Now lets fire Michael which should give Dwight an additonal $100 bonus, shorten his reports array by 1, and change his title to 'Not a Manager'
  dwightSchrute.fire(0)
  console.log(dwightSchrute.bonus)
  console.log(dwightSchrute.reports.length)
  console.log(dwightSchrute.title)
  
// If you have any questions about these review notes, feel free to slack me!