import React from 'react';
import { shallow, mount } from 'enzyme';

import NameForm from './NameForm.js'

const mockFunction = jest.fn();

describe('NameForm renders', () => { 
    it('NameForm should render correctly with no props', () => {
        const component = shallow( < NameForm / > );

        expect(component).toMatchSnapshot();
    });
});

{/* describe('NameForm registers input', () => {
    it('NameForm should call mockFunction on change', () => {
        const component = mount( <NameForm onChange = {mockFunction}/>);

        component.find('input').simulate('change');
        expect(mockFunction).toHaveBeenCalled();

        component.unmount()

    });
}); */}



