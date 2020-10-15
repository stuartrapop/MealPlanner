import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const GroupMembers = ({ targetGroup }) => (
  <div className="group_members_container">
    <h1>Membres du groupe {targetGroup.name}</h1>
    <ul>
      {targetGroup.users.map((user) => {
        const fullname = `${user.firstname} ${user.lastname}`;
        return (
          <li key={user.id} className="user">
            <div className="full_name">{fullname}</div>
            <p>Lecture</p>
            <a>Supprimer</a>
          </li>
        );
      })}
    </ul>
    <a className="add_member">Ajouter un membre</a>
  </div>
);

export default GroupMembers;

GroupMembers.propTypes = {
  targetGroup: PropTypes.shape({
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
};
