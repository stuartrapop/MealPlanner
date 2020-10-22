import React from 'react';
import AddMeal from './AddMeal';
import Planning from './Planning';

import './styles.scss';

const MySpace = ({ fetchAllGroupsData }) => {
  useEffect(() => {
    fetchAllGroupsData();
  }, []);
  return (
    <div className="myspace__container">
      <AddMeal />
      <Planning />
      <a>Génerer ma liste de courses</a>
    </div>
  );
};

export default MySpace;
