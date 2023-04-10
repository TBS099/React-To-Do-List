import React from "react";
import './Tasks.css';

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor:""
        }
    
        this.removeTask = this.removeTask.bind(this);
        this.markDone = this.markDone.bind(this);
    }
    
    markDone() {
        if (this.state.backgroundColor === "") {
            this.setState({ backgroundColor: 'rgb(144,238,144, 0.5)' });
        } else {
            this.setState({backgroundColor: ''});
        }
    }    

    removeTask(){
        this.props.removeTask(this.props.id);
    }

    render() {
        console.log(this.props.id)
        return(
        <div className="row wide" style={{backgroundColor:this.state.backgroundColor}}>
            <h5 className='sn-width'>{this.props.id}</h5>
            <h5 className='texts'>{this.props.text}</h5>
            <div className="buttons-container">
                <button className="done-button" onClick={this.markDone}>Completed</button>
                <button className="delete-button" onClick={this.removeTask}>X</button>
            </div>
        </div>
        )
    }
}
export default Tasks;