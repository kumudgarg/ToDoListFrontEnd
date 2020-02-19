import React, {Component} from "react";
import ToDoNote from "./ToDoNote";

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div align={"center"}>
                {this.props.toDoList.map(toDo =>
                    <li key={toDo.id}>
                        <ToDoNote toDo={toDo}
                                  onDelete={(id) => this.props.onDelete(id)}
                                  onUpdate={(toDo) => this.props.onUpdate(toDo)}
                        />
                    </li>
                )}
                </div>
         )
    }
}
export default ToDoList;
