import React, {Component} from "react";
import ToDoNote from "./ToDoNote";

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.toDoList.map(toDo =>
                    <li key={toDo.id}>
                        <ToDoNote toDo={toDo}/>
                    </li>)}
            </div>
        );
    }
}

export default ToDoList;
