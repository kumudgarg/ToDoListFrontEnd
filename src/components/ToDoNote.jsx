import React, {Component} from "react";

class ToDoNote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let toDo = this.props.toDo;
        return (
            <div>
                <input id={"isComplete"} type={"checkbox"} />
                <input id={"description"} type={"text"} defaultValue={toDo.description}/>
            </div>
        );
    }
}

export default ToDoNote;