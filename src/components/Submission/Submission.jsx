import React from "react";
import "./Submission.css";

class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskCount: 1,
      formInput:""
    };

    this.inputChange = this.inputChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  inputChange(event) {
    this.setState({ formInput: event.target.value });
  } 

  addTask(e) {
    e.preventDefault();
    const newItem = {
        text:this.state.formInput,
        id: this.state.taskCount,
        key: Date.now()
    }
    this.setState({
      taskCount: this.state.taskCount + 1,
      formInput:""
    });
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
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}
export default Submission;
