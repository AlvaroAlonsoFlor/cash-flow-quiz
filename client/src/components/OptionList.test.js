import React from 'react';
import { shallow } from 'enzyme';

import OptionList from './OptionList.js'

it('OptionList should render correctly with no props', () => {
    const component = shallow( < OptionList / > );

    expect(component).toMatchSnapshot();
});

