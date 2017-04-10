import React from 'react';

const SearchBar = (props) => {

  return (
    <div className="search-bar">
      <input type="text" />
      <span className="search-icon"><i className="fa fa-search fa-lg" aria-hidden="true"></i></span>
    </div>
  );
}


export default SearchBar;
