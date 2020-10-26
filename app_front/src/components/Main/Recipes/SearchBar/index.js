import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './styles.scss';

const SearchBar = ({
  updatedSelection,
  value,
  modifySearch,
  searchInput
}) => {
  const handleOnChange = (event) => {
    modifySearch(event.target.value);
  };
  const handleOnSubmit = (event) => {
    console.log(value);
    event.preventDefault();
    updatedSelection(value);
  };
  return (
    <div className="form__container">
      <form id="form__searchBar" onSubmit={handleOnSubmit}>
        <Input
          id="form__input"
          onChange={handleOnChange}
          value={searchInput}
          type="text"
          name="recipes"
          placeholder="Fondue savoyarde..."
          icon={<Icon id="search__icon" name="search" inverted circular link />}
        />
      </form>
    </div>
  );
};

export default SearchBar;
