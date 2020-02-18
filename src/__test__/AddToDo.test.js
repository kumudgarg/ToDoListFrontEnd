import React from "react";
import { shallow, mount } from "enzyme";
import AddToDo from "../components/AddToDo";

describe('Add todo component', () => {
    it('should render an input box and add button', () => {
        const wrapper = shallow(<AddToDo />);
        expect(wrapper.find('button').length).toBe(1)
        expect(wrapper.find('input').length).toBe(1)
    });

    it('should call react to onChange on input value', () => {
        const onClick = jest.fn();
        const component = mount(<AddToDo onClick={onClick}value="value" />);
        component.find('input').simulate('change', {target: {value: 'My new value'}});
    });

    it('should call onclick when clicked on button to create a todo', () => {
        const onClick = jest.fn();
        const component = mount(<AddToDo onClick={onClick}value="value" />);
        component.find('button').simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });
})