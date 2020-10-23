import React, { useEffect } from 'react';
import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AddMeal from '../../../../containers/AddMeal';
import Planning from './Planning';

import './styles.scss';

const MySpace = ({ fetchGroupsDatas, loading }) => {
  // On commence par récupére toutes les données qui seront necessaires au chargement du composant
  useEffect(() => {
    fetchGroupsDatas();
  }, []);
  return (
    <div className="myspace__container">
      {loading && ( 
        <div>
          <Segment>
            <Dimmer active inverted>
              <Loader size="massive">Loading</Loader>
            </Dimmer>

            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        </div>
      )}

      {!loading && (
      <>
        <AddMeal />
        <Planning />
      </>
      )}
      <a>Génerer ma liste de courses</a>
    </div>
  );
};

MySpace.propTypes = {
  fetchGroupsDatas: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MySpace;
