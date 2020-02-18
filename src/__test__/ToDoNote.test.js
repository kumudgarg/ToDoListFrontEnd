import React from "react";
import {mount, shallow} from "enzyme";
import ToDoNote from "../components/ToDoNote";
import AddToDo from "../components/AddToDo";

describe('todo note component', () => {

    let todo = {
        id :1,
        completed : false,
        description : "textttt"
    }
    let deletefn = jest.fn();
    let updatefn = jest.fn();

    it('should render 2 input boxes and 2 buttons', () => {
        const wrapper = shallow(<ToDoNote toDo={todo} onDelete={deletefn} onUpdate={updatefn}/>);
        expect(wrapper.find('button').length).toBe(2)
        expect(wrapper.find('input').length).toBe(2)
    });

    it('should react to clicks on buttons update and delete', () => {
        const wrapper = shallow(<ToDoNote toDo={todo} onDelete={deletefn} onUpdate={updatefn}/>);
        wrapper.find('#update').simulate('click');
        wrapper.find('#delete').simulate('click');
        expect(deletefn.mock.calls.length).toBe(1);
        expect(updatefn.mock.calls.length).toBe(1);
    });

    it('should react to onChange on checkbox value', () => {
        const wrapper = mount(<ToDoNote toDo={todo} onDelete={deletefn} onUpdate={updatefn}/>);
        expect(wrapper.find('#isComplete').prop('onChange')({currentTarget: {checked:true}}))
    });
})