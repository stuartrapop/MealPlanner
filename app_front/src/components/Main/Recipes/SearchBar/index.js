import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Icon, Input } from 'semantic-ui-react';


const SearchBar = ({
  modifySearch,
  searchInput,
}) => {
  const handleOnChange = (event) => {
    modifySearch(event.target.value);
  };
  return (
    <div className="form__container">
      <form id="form__searchBar">
        <Input
          id="form__input2"
          onChange={handleOnChange}
          value={searchInput}
          type="text"
          name="recipes"
          placeholder="Fondue savoyarde..."
          icon={<Icon id="search__icon" name="search" inverted circular link />}
        />
        <div className="recipes__title">
          Qu'est ce qu'on mange ce soir ?
        </div>
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  modifySearch: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};
export default SearchBar;
