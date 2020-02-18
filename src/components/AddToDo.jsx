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
            <input type={"text"} defaultValue={""} name={"enter todo"}
                   onChange={event => this.onChange(event)}/>
            <button onClick={description => this.props.onClick(this.state.description)}>ADD</button>
        </div>
    }

}

export default AddToDo;