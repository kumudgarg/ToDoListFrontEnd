import React from "react";
import { shallow, mount } from "enzyme";
import AddToDo from "../components/AddToDo";
import ToDoList from "../components/ToDoList";


describe('Add todo component', () => {

    let toDo = [{id:1 , completed : false, description: "buy food"}]
    let deletefn = jest.fn()
    let updatefn = jest.fn()

    it('should render an input box and add button', () => {
        const wrapper = shallow(<ToDoList toDoList={toDo} onDelete={deletefn} onUpdate={updatefn}/>);
        expect(wrapper.find('div').length).toBe(1)
        expect(wrapper.find('li').length).toBe(1)
    });


})