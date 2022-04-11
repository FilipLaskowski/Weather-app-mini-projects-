import React from "react";

const Search = ({ setQuery }) => {
  // Functions
  const searchHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.children[0].value);
  };
  return (
    <div className="search-container">
      <form onSubmit={searchHandler}>
        <input type="text" className="search-bar" placeholder="Search..." />
      </form>
    </div>
  );
};

export default Search;
