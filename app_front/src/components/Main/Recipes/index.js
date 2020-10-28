import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../../containers/SearchBar';
import RecipesPart from '../../../containers/RecipesPart';

import './styles.scss';

const Recipes = ({ fetchrecipes }) => {
  useEffect(() => {
    fetchrecipes();
  }, []);
  return (
    <section className="recipes__container">
      <SearchBar />
      <div className="recipes__title">
        Qu'est ce qu'on mange ce soir ?
      </div>
      <RecipesPart />
    </section>
  );
};

Recipes.propTypes = {
  fetchrecipes: PropTypes.func.isRequired,
};
export default Recipes;
