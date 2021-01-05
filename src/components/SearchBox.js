import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <input type="search" placeholder="Search Robots" onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue" />
    );
}
export default SearchBox;