import React from 'react';
import { shallow } from 'enzyme';
import SiteNav from '../components/SiteNav';

const wrapper = shallow(<SiteNav />);

describe('SiteNav', () => {
  it('renders without crashing', () => {
    expect(typeof wrapper.props()).toBeTruthy;
  });
});