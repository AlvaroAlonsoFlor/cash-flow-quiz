import React from 'react';
import { shallow } from 'enzyme';

import Question from './Question.js'

describe('Question renders', () => { 
    it('Question should render correctly with no props', () => {
        const component = shallow( < Question / > );

        expect(component).toMatchSnapshot();
    });
});