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
      <figure className="pic__container">
        <SearchBar />
        <img className="pic__header" src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="header logo" />
      </figure>
      <RecipesPart />
    </section>
  );
};

Recipes.propTypes = {
  fetchrecipes: PropTypes.func.isRequired,
};
export default Recipes;
