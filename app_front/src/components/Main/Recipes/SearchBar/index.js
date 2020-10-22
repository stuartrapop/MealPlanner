import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
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
    <div className="form">
      <h2 className="form__title">Trouvez la recette de vos rêves !</h2>
      <form id="form__searchBar" onSubmit={handleOnSubmit}>
        <Input
          id="form__input"
          onChange={handleOnChange}
          type="text"
          name="recipes"
          placeholder="Fondue savoyarde..."
          icon={<Icon name="search" inverted circular link />}
        />
      </form>
    </div>
  );
};

export default SearchBar;
