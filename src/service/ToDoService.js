import axios from "axios";

export const getToDoLists = () => {
     return axios.get("http://localhost:8080/toDo/")
}

export const addToDo = description => {
     return axios.post("http://localhost:8080/toDo/add",{
          completed : false,
          description : description
     })
}

export const deleteToDo = id => {
     return axios.delete("http://localhost:8080/toDo/delete/"+id)
}

export const updateToDo = (toDo) => {
    let dto = {
        completed : toDo.completed,
        description : toDo.description
    }
    return axios.put("http://localhost:8080/toDo/update/"+toDo.id,dto)
}

