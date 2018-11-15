import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import OptionList from './OptionList.js'

it('OptionList should render correctly with no props', () => {
    const component = shallow( < OptionList / > );

    expect(component).toMatchSnapshot();
});

