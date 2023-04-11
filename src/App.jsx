import React from "react";
import "./App.css";
import Submission from "./components/Submission/Submission";
import TasksList from "./components/TasksList/TasksList";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks:[]
    }

    this.addItem = this.addItem.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addItem(item) {
    this.setState((prevState) => {
      return { 
        tasks: prevState.tasks.concat(item) 
      };
    });
  }

  removeTask(taskid) {
    const updatedTasks = this.state.tasks.filter(task => task.id !== taskid);
    this.setState({ tasks: updatedTasks });
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
