import React from "react";
import {mount, shallow} from "enzyme";
import ToDoNote from "../components/ToDoNote";

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
})