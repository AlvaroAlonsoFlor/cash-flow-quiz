import React from 'react';
import { shallow } from 'enzyme';

import WelcomeScreen from './WelcomeScreen.js'

describe('WelcomeScreen renders', () => { 
    it('WelcomeScreen should render correctly with no props', () => {
        const component = shallow( < WelcomeScreen / > );

        expect(component).toMatchSnapshot();
    });
});