import React from 'react';
import PropTypes from 'prop-types';
import GroupMembers from '../../../containers/GroupMembers';

import './styles.scss';

const GroupsPage = ({ userInfos, fetchGroupMembers, groupMembers }) => {
  console.log(userInfos.groups);
  console.log(groupMembers);
  const getGroupMembers = (evt) => {
    fetchGroupMembers(evt.target.groupid);
  };
  return (
    <div className="groups_details_container">
      <div className="my_groups">
        <h1>Mes Groupes</h1>
        <ul className="group_list">
          {userInfos.groups.map((group) => (
            <li key={group.id} className="group">
              <a onClick={getGroupMembers} groupid={group.id}>{group.name}</a>
              <a className="delete">Supprimer</a>
            </li>
          ))}
        </ul>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#2ECC71" />
          <line x1="25.5" y1="17" x2="25.5" y2="34" stroke="white" strokeWidth="3" />
          <line x1="34" y1="25.5" x2="17" y2="25.5" stroke="white" strokeWidth="3" />
        </svg>
      </div>
      <div className="group_members">
        {/* {groupMembers !== {} && (
          <GroupMembers />
        )} */}
      </div>
    </div>
  );
};

export default GroupsPage;

GroupsPage.propTypes = {
  userInfos: PropTypes.arrayOf(
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
