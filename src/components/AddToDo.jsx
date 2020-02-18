import React, {Component} from "react";

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }

    render() {
        return <div id={"addToDoPane"}>
            <input type={"text"} defaultValue={""} name={"enter todo"}
                   onChange={event => this.updateDescription(event)}/>
            <button onClick={description => this.props.onCreate(this.state.description)}>ADD</button>
        </div>
    }

    updateDescription = (event) => {
        this.setState({description: event.target.value})
    }
}