import React from "react";
import "./TasksList.css";
import Tasks from "../Tasks/Tasks";
import Cookies from "js-cookie";

class TasksList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var taskCookie = Cookies.get("tasks");
    if (taskCookie) {
      const tasks = JSON.parse(taskCookie);

      return (
        <div className="tasks-list-container">
          <div className="tasks-list container">
            {tasks.map((task) => (
              <Tasks
                key={task.key}
                text={task.text}
                id={task.id}
                removeTask={this.props.removeTask}
              />
            ))}
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="tasks-list-container">
          <div className="tasks-list container">
            {this.props.tasks.map((task) => (
              <Tasks
                key={task.key}
                text={task.text}
                id={task.id}
                removeTask={this.props.removeTask}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}
export default TasksList;
