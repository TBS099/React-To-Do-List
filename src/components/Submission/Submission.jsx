import React from "react";
import "./Submission.css";
import Cookies from "js-cookie";

class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskCount: 1,
      formInput: "",
    };

    this.inputChange = this.inputChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  inputChange(event) {
    this.setState({ formInput: event.target.value });
  }

  addTask(e) {
    e.preventDefault();
    let count = Cookies.get("count");
    if (count) {
      count = parseInt(count);
      count = count + 1;
    } else {
      count = 1;
    }

    this.setState({
      formInput: "",
    });

    const newItem = {
      text: this.state.formInput,
      id: count,
      key: Date.now(),
    };

    const tasksCookie = Cookies.get("tasks");
    let updatedTasks = [];

    if (tasksCookie) {
      const tasks = JSON.parse(tasksCookie);
      tasks.push(newItem);
      updatedTasks = JSON.stringify(tasks);
    } else {
      updatedTasks = JSON.stringify([newItem]);
    }

    Cookies.set("tasks", updatedTasks);
    Cookies.set("count", count); // Set the "count" cookie with the updated count value
    Cookies.set("newtask", JSON.stringify(newItem));
    this.props.addItem(newItem);
  }

  render() {
    return (
      <div className="form-submit col-4">
        <form onSubmit={this.addTask}>
          <input
            type="text"
            className="input"
            value={this.state.formInput}
            onChange={this.inputChange}
            placeholder="Enter Task Here"
            required
          ></input>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Submission;
