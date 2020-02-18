import axios from "axios";

export const getToDoLists = () => {
     return axios.get("http://localhost:8080/toDo/")
}

export const addToDo = toDoNote => {
     return axios.post("http://localhost:8080/toDo/add")
}

