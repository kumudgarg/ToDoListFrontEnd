import React, {Component} from "react";

class ToDoNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.toDo.id,
            completed: this.props.toDo.completed,
            description: this.props.toDo.description,
            isDescriptionChanged: false
        }
    }

    handleCheckBoxChange = () => {
        this.setState({
            completed: !this.state.completed,
            isDescriptionChanged: true
        }, this.handleUpdateClick)
    }

    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value,
            isDescriptionChanged: true
        })
    }

    handleUpdateClick = () => {
        if (this.state.isDescriptionChanged) {
            this.setState({isDescriptionChanged: false})
            let updatedToDo = this.state;
            let toDoDto = {
                id: updatedToDo.id,
                completed: updatedToDo.completed,
                description: updatedToDo.description,
            }
            this.props.onUpdate(toDoDto)
        }
    }

    render() {
        let toDo = this.props.toDo;
        return (
            <React-Fragment>
                <input className={"NoteLayout"} id={"isComplete"} type={"checkbox"}
                       defaultChecked={this.state.completed} onChange={this.handleCheckBoxChange}/>
                <input className={"NoteCompLayout"} id={"description"} type={"text"} value={toDo.description}
                       onChange={(e) => this.handleDescriptionChange(e)}/>
                <button className={"NoteCompLayout"} id={"update"} onClick={this.handleUpdateClick}>update</button>
                <button className={"NoteCompLayout"} id={"delete"} onClick={() => this.props.onDelete(toDo.id)}>delete
                </button>
            </React-Fragment>
        );
    }
}

export default ToDoNote;