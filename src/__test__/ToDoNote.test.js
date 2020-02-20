import React from "react";
import {mount, shallow} from "enzyme";
import ToDoNote from "../components/ToDoNote";

describe('todo note component', () => {

    let mockedTodo = {
        id: 1,
        completed: false,
        description: "textttt"
    }
    let mockedDeleteFn = jest.fn();
    let mockedUpdateFn = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render 2 input boxes and 2 buttons', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeleteFn} onUpdate={mockedUpdateFn}/>);
        expect(wrapper.find('button').length).toBe(2)
        expect(wrapper.find('input').length).toBe(2)
    });

    it('should react to click on delete button', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeleteFn} onUpdate={mockedUpdateFn}/>);
        wrapper.setState({id:1})
        wrapper.find('#delete').simulate('click');
        expect(mockedDeleteFn.mock.calls.length).toBe(1);
        expect(mockedDeleteFn).toHaveBeenCalledWith(1)
    });

    it('should react to click on update button and send request to update the todo to parent comp', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeleteFn} onUpdate={mockedUpdateFn}/>);
        wrapper.setState({
            id: mockedTodo.id,
            completed: mockedTodo.completed,
            description: mockedTodo.description,
            isDescriptionChanged: true
        })
        wrapper.find('#update').simulate('click');
        expect(mockedUpdateFn).toHaveBeenCalledTimes(1)
        expect(mockedUpdateFn).toHaveBeenCalledWith(mockedTodo)
    });

    it('should not react to click on update button if the state has not been changed', () => {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeleteFn} onUpdate={mockedUpdateFn}/>);
        wrapper.setState({isDescriptionChanged: false})
        wrapper.find('#update').simulate('click');
        expect(mockedUpdateFn).not.toHaveBeenCalled()
    });

    it('should call handleCheckboxChange when checkbox is toggled and manipulate the state.completed properties ', function () {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeleteFn} onUpdate={mockedUpdateFn}/>);
        expect(wrapper.state().completed).toBeFalsy()
        expect(wrapper.state().isDescriptionChanged).toBeFalsy()
        wrapper.find('#isComplete').simulate('change')
        expect(wrapper.state().completed).toBeTruthy()
    });

    it('should call handleCheckboxChange when checkbox is toggled resulting in a call for handleClickUpdate', function () {
        const wrapper = shallow(<ToDoNote toDo={mockedTodo} onDelete={mockedDeleteFn} onUpdate={mockedUpdateFn}/>);
        const instance = wrapper.instance()
        jest.spyOn(instance, 'handleUpdateClick')
        expect(wrapper.state().completed).toBeFalsy()
        expect(wrapper.state().isDescriptionChanged).toBeFalsy()
        wrapper.find('#isComplete').simulate('change')
        expect(wrapper.state().completed).toBeTruthy()
        expect(instance.handleUpdateClick).toHaveBeenCalled()
        expect(wrapper.state().isDescriptionChanged).toBeFalsy()

    });
})