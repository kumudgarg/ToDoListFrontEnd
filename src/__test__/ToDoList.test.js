import React from "react";
import { shallow, mount } from "enzyme";
import ToDoList from "../components/ToDoList";
import ToDoNote from "../components/ToDoNote";

describe('Add todo component', () => {

    let mockedToDo1 = {id:1 , completed : false, description: "buy food"}
    let mockedToDo2 = {id:2 , completed : false, description: "eat food"}
    let mockedToDoList = [mockedToDo1,mockedToDo2]
    let deleteFn = jest.fn().mockImplementation(id=>{return id})
    let updateFn = jest.fn().mockImplementation((toDo) => toDo)

    it('should render an input box and add button', () => {
        const wrapper = shallow(<ToDoList toDoList={mockedToDoList} onDelete={deleteFn} onUpdate={updateFn}/>);
        expect(wrapper.find('div').length).toBe(1)
        expect(wrapper.find('li').length).toBe(2)
    });

    it('should render ToDoNote component two times when given two notes', () => {
        const wrapper = shallow(<ToDoList toDoList={mockedToDoList} onDelete={deleteFn} onUpdate={updateFn}/>);
        expect(wrapper.find('ToDoNote').length).toBe(2)
        expect(wrapper.find('ToDoNote').length).toBe(2)
    });

    it('should render ToDoNote component with correct props', function () {
        const wrapper = mount(<ToDoList toDoList={mockedToDoList} onDelete={(id)=>deleteFn(id)} onUpdate={(mockData) =>updateFn(mockData)}/>);
        const note = wrapper.find('ToDoNote')
        expect(JSON.stringify(note.at(0).props())).toEqual(JSON.stringify({toDo :{id:1 , completed : false, description: "buy food"}, onDelete :(id)=>deleteFn(id), onUpdate:(mockData)=>updateFn(mockData)} ))
        expect(JSON.stringify(note.at(1).props())).toEqual(JSON.stringify({toDo :{id:2 , completed : false, description: "eat food"}, onDelete :(id)=>deleteFn(id), onUpdate:(mockData)=>updateFn(mockData)} ))
    });

})