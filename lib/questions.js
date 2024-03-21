const questions = [
    {
      type: "list",
      name: "choices",
      message: "What would you like to do?",
      choices: ["Add employee", "Update an employee role", "View all roles", "Add role", "View all departments", "Add department"],
    },
  ];
  
  const addDepartmentQuestions = [
      {
          type: "input",
          name: "name",
          message: "Please enter department name."
      }
  ];
  
  module.exports = { questions, addDepartmentQuestions};