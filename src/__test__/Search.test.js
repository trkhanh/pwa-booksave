import React from 'react'
import { shallow } from 'enzyme'

import Search from '../components/Search'


import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const wrapper = shallow(<Search />, {
    context: { store: mockStore() }
})

describe('Search', () => {
    it('renders without crashing', () => {
        expect(typeof wrapper.props()).toBeTruthy
    })
})
