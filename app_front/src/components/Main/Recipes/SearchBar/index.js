import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'semantic-ui-react';
import './styles.scss';

const SearchBar = ({
  modifySearch,
  searchInput,
}) => {
  const handleOnChange = (event) => {
    modifySearch(event.target.value);
  };
  console.log(event.target.value);
  
  console.log(searchInput);
  return (
    <div className="form__container">
      <form id="form__searchBar">
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
SearchBar.propTypes = {
  modifySearch: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};
export default SearchBar;
