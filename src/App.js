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
            this.setState({toDoNotes: []})
        })
    }

    onCreate = (description) => {
        if (!this.toDoExists(description)) {
            addToDo(description).then(res => {
                console.log(res)
                this.getData()
            }).catch((err) => {
                console.log(err)
                alert("unable to add todo")
            })
        } else {
            alert("todo already exists!!")
        }
    }

    onDelete = id => {
        deleteToDo(id).then(res => {
            console.log(res)
            this.getData()
        }).catch((err) => {
            console.log(err)
            alert("unable to delete todo")
        })
    }

    onUpdate = toDo => {
        updateToDo(toDo).then(res => {
            console.log(res)
            this.getData()
        }).catch((err) => {
            console.log(err)
            alert("unable to update todo")
        })
    }

    toDoExists = description => {
        let exists = false
        this.state.toDoNotes.map(toDo => {
            if (toDo.description === description) {
                exists = true;
                return
            }
        })
        return exists
    }

    render() {
        return (
            <div className="MainBlock">
                <AddToDo onClick={(description) => this.onCreate(description)}/>
                <div className={"MainBlock"}>
                    {this.state.toDoNotes.length !== 0 && <ToDoList toDoList={this.state.toDoNotes}
                                                                    onDelete={(id) => this.onDelete(id)}
                                                                    onUpdate={(toDo) => this.onUpdate(toDo)}/>
                    || <h3>no notes to display!!</h3>}
                </div>
            </div>
        );
    }
}

export default App;