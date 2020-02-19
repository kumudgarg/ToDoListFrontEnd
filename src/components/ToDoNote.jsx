import React, {Component} from "react";

class ToDoNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.toDo.id,
            completed: this.props.toDo.completed,
            description: this.props.toDo.description
        }
    }

    handleCheckBoxChange = () => {
        this.setState({completed: !this.state.completed})
        this.update()
    }

    update = () => {
        this.props.onUpdate(this.state)
    }

    handleDescriptionChange = event => {
        this.setState({description : event.target.value})
    }

    render() {
        let toDo = this.props.toDo;
        return (
            <React-Fragment>
                <input id={"isComplete"} type={"checkbox"} defaultChecked={this.state.completed} onChange={this.handleCheckBoxChange}/>
                <input id={"description"} type={"text"} defaultValue={toDo.description}
                       onChange={(e)=>this.handleDescriptionChange(e)}/>
                <button id={"update"} onClick={() => this.update()}>update</button>
                <button id={"delete"} onClick={() => this.props.onDelete(toDo.id)}>delete</button>
            </React-Fragment>
        );
    }
}

export default ToDoNote;