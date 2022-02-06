import React from 'react';

const Search = ({search, handleSearch}) => {

    return (
        <input
            placeholder='Search by name'
            style = {{height: "30px", margin:"10px"}}
            onChange={handleSearch}
            value= {search}
          />
    );
};

export default Search;