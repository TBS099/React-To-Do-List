import React from "react";
import "./TasksList.css";
import Tasks from "../Tasks/Tasks";

class TasksList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
export default TasksList;
