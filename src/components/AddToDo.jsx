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

    handleCreateToDoSubmit = () => {
        if(this.state.description.length > 0) {
            this.props.onClick(this.state.description)
        } else {
            console.log("cannot add empty todo")
        }
    }

    render() {
        return <div id={"addToDoPane"} className={"AddToDoBox"}>
            <input id={"inputBox"} type={"text"} defaultValue={""} className={"AddToDoCompLayout"}
                   onChange={event => this.onChange(event)}/>
            <button id={"saveButton"} className={"AddToDoCompLayout"}
                    onClick={this.handleCreateToDoSubmit}>ADD
            </button>
        </div>
    }
}

export default AddToDo;