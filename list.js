import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let adtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "when you want to add in your todo?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(adtask.todo);
    condition = adtask.addMore;
    console.log(todos);
}
