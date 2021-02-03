import React from 'react'
import { shallow } from 'enzyme'

import SearchResults from '../components/SearchResults'


const wrapper = shallow(<SearchResults books={[]} />)

describe('SearchResults', () => {
    it('renders without crashing', () => {
        expect(typeof wrapper.props()).toBeTruthy
    })
})
