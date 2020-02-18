import React, {Component} from "react";

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }

    onChange = (event) => {
        this.setState({description: event.target.value})
    }

    render() {
        return <div id={"addToDoPane"}>
            <input id={"inputBox"} type={"text"} defaultValue={""}
                   onChange={event => this.onChange(event)}/>
            <button id={"saveButton"} onClick={description => this.props.onClick(this.state.description)}>ADD</button>
        </div>
    }

}

export default AddToDo;