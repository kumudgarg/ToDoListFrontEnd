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
        }, this.update)
    }

    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value,
            isDescriptionChanged: true
        })
    }

    update = () => {
        if (this.state.isDescriptionChanged) {
            this.setState({isDescriptionChanged: false})
            this.props.onUpdate(this.state)
        }
    }

    render() {
        let toDo = this.props.toDo;
        return (
            <React-Fragment>
                <input className={"NoteLayout"} id={"isComplete"} type={"checkbox"}
                       defaultChecked={this.state.completed} onChange={this.handleCheckBoxChange}/>
                <input className={"NoteCompLayout"} id={"description"} type={"text"} defaultValue={toDo.description}
                       onChange={(e) => this.handleDescriptionChange(e)}/>
                <button className={"NoteCompLayout"} id={"update"} onClick={() => this.update()}>update</button>
                <button className={"NoteCompLayout"} id={"delete"} onClick={() => this.props.onDelete(toDo.id)}>delete
                </button>
            </React-Fragment>
        );
    }
}

export default ToDoNote;