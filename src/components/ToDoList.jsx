import React, {Component} from "react";
import ToDoNote from "./ToDoNote";

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {console.log("in list"+this.props.onDelete)}

                {this.props.toDoList.map(toDo =>
                    <li key={toDo.id}>
                        <ToDoNote toDo={toDo} onDelete={(id)=>this.props.onDelete(id)} />
                    </li>)}
            </div>
        );
    }
}



export default ToDoList;
