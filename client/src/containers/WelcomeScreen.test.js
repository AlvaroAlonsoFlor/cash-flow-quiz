import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import WelcomeScreen from './WelcomeScreen.js'

configure({adapter: new Adapter()});

describe('WelcomeScreen renders', () => { 
    it('WelcomeScreen should render correctly with no props', () => {
        const component = shallow( < WelcomeScreen / > );

        expect(component).toMatchSnapshot();
    });
});