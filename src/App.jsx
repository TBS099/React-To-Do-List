import React from "react";
import "./App.css";
import Submission from "./components/Submission/Submission";
import TasksList from "./components/TasksList/TasksList";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.addItem = this.addItem.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addItem(item) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(item),
      };
    });
  }

  removeTask(taskId) {
    const tasksCookie = Cookies.get("tasks"); // Get the tasks cookie
    if (!tasksCookie) return; // No tasks cookie found

    const tasks = JSON.parse(tasksCookie); // Parse the tasks cookie value
    const updatedTasks = tasks.filter((task) => task.id !== taskId); // Filter out the task with the given taskId

    Cookies.set("tasks", JSON.stringify(updatedTasks)); // Update the tasks cookie with the modified array

    this.setState({ tasks: updatedTasks }); // Update the component state if necessary
  }

  render() {
    return (
      <main>
        <h1 className="page-header">To Do List</h1>
        <div className="page-body row">
          <Submission addItem={this.addItem}/>
          <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
        </div>
      </main>
    );
  }
}
export default App;
