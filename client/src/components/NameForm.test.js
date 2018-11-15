import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import NameForm from './NameForm.js'

configure({adapter: new Adapter()});

describe('NameForm renders', () => { 
    it('NameForm should render correctly with no props', () => {
        const component = shallow( < NameForm / > );

        expect(component).toMatchSnapshot();
    });
});



