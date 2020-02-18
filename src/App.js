import React, {Component} from 'react';
import ToDoList from "./components/ToDoList";
import {addToDo, deleteToDo, getToDoLists, updateToDo} from "./service/ToDoService"
import './App.css';
import AddToDo from "./components/AddToDo";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoNotes: []
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        getToDoLists().then(value => {
            this.setState({toDoNotes: value.data})
        }).catch((err) => {
            console.log(err)
        })
    }

    onClick = (description) => {

            addToDo(description).then(res => {
                console.log(res)
            }).catch((err) => {
            console.log(err)
        })
        this.getData()
    }

    onDelete = id => {
        deleteToDo(id).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).catch((err) => {
            console.log(err)
        })
        this.getData()
    }

    onUpdate = toDo => {
        updateToDo(toDo).then(res => {
            console.log(res)
        })
        this.getData()
    }

    render() {
        return (
            <div className="MainBlock">
                <AddToDo onClick={(description) => this.onClick(description)}/>
                {this.state.toDoNotes && <ToDoList toDoList={this.state.toDoNotes}
                                                   onDelete={(id) => this.onDelete(id)}
                                                   onUpdate={(toDo) => this.onUpdate(toDo)}/>}
            </div>
        );
    }
}

export default App;