import React from 'react'

import {
    SearchBar,
    SearchLabel,
    SearchInput,
} from './base/SearchBar';

function Search({ value, handlechange }) {
    return <SearchBar>
        <SearchLabel htmlFor="search"> Search for books</SearchLabel>
        <SearchInput
            id="search"
            value={value}
            onChange={handleChange}
            placeholder="Search for books"
            required
        />
    </SearchBar>
}

export default Search;