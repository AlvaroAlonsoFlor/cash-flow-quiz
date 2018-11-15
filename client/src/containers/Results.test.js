import React from 'react';
import { shallow } from 'enzyme';

import Results from './Results.js'

describe('Results renders', () => { 
    it('Results should render correctly with no props', () => {
        const component = shallow( < Results / > );

        expect(component).toMatchSnapshot();
    });
});