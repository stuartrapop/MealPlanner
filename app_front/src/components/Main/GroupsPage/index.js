import React from 'react';
import PropTypes from 'prop-types';
import GroupMembers from './GroupMembers';

import './styles.scss';
const GroupsPage = ({ groups }) => (
  <div className="groups_details_container">
    <div className="my_groups">
      <h1>Mes Groupes</h1>
      <ul>
        {groups.map((group) => {
          return (
            <li key={group.id} className="group">
              {group.name}
              <a>Supprimer</a>
            </li>
          )
        } )}
      </ul>
      <a className="add_group">Créer un groupe</a>
    </div>
    <div className="group_members">
      <GroupMembers targetGroup={groups[0]} />
    </div>
  </div>
);

export default GroupsPage;

GroupsPage.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          firstname: PropTypes.string,
          lastname: PropTypes.string,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};
