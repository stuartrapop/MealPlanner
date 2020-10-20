import React from 'react';

import './styles.scss';

const SearchBar = ({
  startRecipesSearch,
  updatedSelection,
  value,
}) => {
  const handleOnChange = (event) => {
    startRecipesSearch(event.target.value);
  };

  const handleOnSubmit = (event) => {
    console.log(value);
    event.preventDefault();
    updatedSelection(value);
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Recherchez une recette
        </h1>
        <form id="searchForm" onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search Movies, TV Series ..."
            onChange={handleOnChange}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
