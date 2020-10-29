import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Header, Icon, Modal, Dropdown, Search,
} from 'semantic-ui-react';

import './styles.scss';

const GroupMembers = ({
  userInfos,
  groupMembers,
  memberSearchAction,
  usersList, // liste de tous les utilisateurs du site
  toggleAddMemberModal,
  addMemberModalBool,
  showResults,
  membersSearchResults,
  membersSearchValue,
  addMemberToGroup,
}) => {
  const roleOptions = [
    { key: '1', text: 'Ecriture', value: '1' },
    { key: '2', text: 'Lecture', value: '2' },
  ];

  const source = usersList.pseudoArray.map((user) => ({
    key: user.userId,
    title: user.pseudo,
    description: `${user.firstName}  ${user.lastName}`,
  }));

  const handleMemberSearchChange = (evt, data) => {
    memberSearchAction(data.value);
    const possibleMembers = source.filter((member) => member.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(data.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()));
    showResults(possibleMembers);
  };

  const openAddMemberModal = () => {
    toggleAddMemberModal();
  };

  const handleMemberSelection = (evt, data) => {
    addMemberToGroup(groupMembers.groupId, data.result.key);
  };

  // eslint-disable-next-line max-len
  const userDetailsInGroup = groupMembers.groupMemberArray.find((user) => user.userId = userInfos.userId);
  console.log(userDetailsInGroup);
  const userRoleInGroup = userDetailsInGroup.userRole;
  console.log(userRoleInGroup);

  return (
    <div className="group_members_container">
      <h1>Membres du groupe {groupMembers.groupName}</h1>
      <ul className="member_list">
        {groupMembers.groupMemberArray.map((member) => (
          <div>
            {userRoleInGroup === 'Propriétaire' && (
            <li key={member.id} className="user">
              <div className="full_name">{member.firstName} {member.lastName}</div>
              <Dropdown
                id="select__member__role"
                inline
                options={roleOptions}
                scrolling
                defaultValue={member.userRole}
                text={member.userRole}
              />
              <Icon name="trash" />
            </li>
            )}
            {userRoleInGroup !== 'Propriétaire' && (
              <li key={member.id} className="user">
                <div className="full_name">{member.firstName} {member.lastName}</div>
                <div className="display__members__role">{member.userRole}</div>
              </li>
            )}
          </div>
        ))}
      </ul>
      <Modal
        basic
        onClose={openAddMemberModal}
        onOpen={openAddMemberModal}
        open={addMemberModalBool}
        size="small"
        trigger={(
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="23.5" fill="white" stroke="#2ECC71" strokeWidth="3" />
            <line x1="25.5" y1="17" x2="25.5" y2="34" stroke="#2ECC71" strokeWidth="3" />
            <line x1="34" y1="25.5" x2="17" y2="25.5" stroke="#2ECC71" strokeWidth="3" />
          </svg>
          )}
      >
        <Header icon>
          <Icon name="group" />
          Recherchez un utilisateur
        </Header>
        <Modal.Content>
          <Search
            id="add__group__modal"
            onResultSelect={handleMemberSelection}
            onSearchChange={handleMemberSearchChange}
            results={membersSearchResults}
            value={membersSearchValue}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={openAddMemberModal}>
            <Icon name="remove" /> Annuler
          </Button>
          <Button color="green" inverted onClick={openAddMemberModal}>
            <Icon name="checkmark" /> Inviter
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default GroupMembers;

GroupMembers.propTypes = {
  targetedGroup: PropTypes.shape({
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
