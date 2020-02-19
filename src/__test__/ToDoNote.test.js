import React from "react";
import {mount, shallow} from "enzyme";
import ToDoNote from "../components/ToDoNote";
import AddToDo from "../components/AddToDo";

describe('todo note component', () => {

    let mockedTodo = {
        id :1,
        completed : false,
        description : "textttt"
    }
    let mockedDeletefn = jest.fn();
    let mockedUpdatefn = jest.fn();

    it('should render 2 input boxes and 2 buttons', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeletefn} onUpdate={mockedUpdatefn}/>);
        expect(wrapper.find('button').length).toBe(2)
        expect(wrapper.find('input').length).toBe(2)
    });

    it('should react to click on delete button', () => {
        const wrapper = mount(<ToDoNote toDo={mockedTodo} onDelete={mockedDeletefn} onUpdate={mockedUpdatefn}/>);
        wrapper.find('#delete').simulate('click');
        expect(mockedDeletefn.mock.calls.length).toBe(1);
    });

    it('should react to click on update button', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeletefn} onUpdate={mockedUpdatefn}/>);
        wrapper.instance().handleUpdateClick()
        wrapper.setState({isDescriptionChanged : true})
        wrapper.find('#update').simulate('click');
        expect(mockedUpdatefn).toHaveBeenCalledTimes(1)
    });

    it('should not react to click on update button if the state has not been changed', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeletefn} onUpdate={mockedUpdatefn}/>);
        wrapper.instance().handleUpdateClick()
        wrapper.setState({isDescriptionChanged : false})
        wrapper.find('#update').simulate('click');
        expect(mockedUpdatefn).toHaveBeenCalledTimes(1)
    });

    it('should react to click on update button with correct parameter if the state has been changed', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeletefn} onUpdate={mockedUpdatefn}/>);
        wrapper.instance().handleUpdateClick()
        wrapper.setState({isDescriptionChanged : true})
        wrapper.find('#update').simulate('click');
        expect(mockedUpdatefn).toHaveBeenCalledWith(mockedTodo)
    });

    it('should react to onChange on checkbox value', () => {
        const wrapper = mount(<ToDoNote toDo={mockedTodo} onDelete={mockedDeletefn} onUpdate={mockedUpdatefn}/>);
        expect(wrapper.find('#isComplete').prop('onChange')({currentTarget: {checked:true}}))
        expect(wrapper.find('#isComplete').prop('onChange')({currentTarget: {checked:false}}))
    });
})