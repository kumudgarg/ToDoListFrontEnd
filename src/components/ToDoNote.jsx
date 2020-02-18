import React, {Component} from "react";

class ToDoNote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let toDo = this.props.toDo;
        return (
            <div>
                {console.log("in note"+this.onDelete)}
                <input id={"isComplete"} type={"checkbox"} />
                <input id={"description"} type={"text"} defaultValue={toDo.description}/>
                <button id={"delete"} onClick={()=>this.props.onDelete(toDo.id)}>delete</button>
            </div>
        );
    }
}

export default ToDoNote;