import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'
import AddToDo from "./components/AddToDo";

describe('App', () => {
  it('should render a  AddToDo component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('').length).toEqual(1);
  });
});