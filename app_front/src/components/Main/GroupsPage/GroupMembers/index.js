import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Header, Icon, Modal, Dropdown, Search,
} from 'semantic-ui-react';

import './styles.scss';

const GroupMembers = ({
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
    { key: '1', text: 'Propriétaire', value: '1' },
    { key: '2', text: 'Ecriture', value: '2' },
    { key: '3', text: 'Lecture', value: '3' },
  ];

  console.log(usersList);

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

  return (
    <div className="group_members_container">
      <h1>Membres du groupe {groupMembers.groupName}</h1>
      <ul className="member_list">
        {groupMembers.groupMemberArray.map((member) => {
          const fullname = `${member.firstName} ${member.lastName}`;
          return (
            <li key={member.id} className="user">
              <div className="full_name">{fullname}</div>
              <Dropdown
                id="select__member__role"
                floating
                inline
                options={roleOptions}
                scrolling
                defaultValue={member.userRole}
              />{' '}
              <a className="delete">Supprimer</a>
            </li>
          );
        })}
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
