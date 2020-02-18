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
        this.setState({completed : !this.state.completed})
        this.update()
    }

    update = () => {
        this.props.onUpdate(this.state)
    }

    render() {
        let toDo = this.props.toDo;
        return (
            <div>
                {console.log("in note" + this.onDelete)}
                <input id={"isComplete"} type={"checkbox"} onChange={this.handleCheckBoxChange}/>
                <input id={"description"} type={"text"} defaultValue={toDo.description}/>
                <button id={"update"} onClick={() => this.update()}>update</button>
                <button id={"delete"} onClick={() => this.props.onDelete(toDo.id)}>delete</button>
            </div>
        );
    }
}

export default ToDoNote;