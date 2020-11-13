/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {
  Button, Header, Icon, Modal, Dropdown, Search, Message,
} from 'semantic-ui-react';



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
  removeUserAction,
  errorMessageDisplayed,
  toggleErrorMessageDisplay,
  changeRoleAction,
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
    // On test pour voir si le résultat potentiel n'est pas déjà dans le groupe
    const showMemberList = possibleMembers.filter((possible) => !groupMembers.groupMemberArray.find((gm) => gm.pseudo === possible.title));
    showResults(showMemberList);
  };

  const openAddMemberModal = () => {
    toggleAddMemberModal();
  };

  const handleMemberSelection = (evt, data) => {
    const memberIsPresent = groupMembers.groupMemberArray.find(((element) => element.userId === data.result.key));
    if (!memberIsPresent) {
      addMemberToGroup(groupMembers.groupId, data.result.key);
    }
    else {
      toggleErrorMessageDisplay();
    }
  };

  const removeUserClick = (evt, data) => {
    removeUserAction(groupMembers.groupId, data.memberid);
  };

  // eslint-disable-next-line max-len
  const userDetailsInGroup = groupMembers.groupMemberArray.find((user) => user.userId === userInfos.userId);
  const userRoleInGroup = userDetailsInGroup.userRole;

  const changeRoleClick = (evt, data) => {
    changeRoleAction(evt.target.textContent, data.linkeduser);
  };

  return (
    <div className="group_members_container">
      <h1>Membres du groupe {groupMembers.groupName}</h1>
      <ul className="member_list">
        {groupMembers.groupMemberArray.map((member) => (
          <div key={member.userId}>
            {userRoleInGroup === 'Propriétaire' && (
              <li key={member.userId} className="user">
                <div className="full_name">{member.firstName} {member.lastName}</div>
                {member.userRole !== 'Propriétaire' && (
                <>
                  <Dropdown
                    id="select__member__role"
                    inline
                    options={roleOptions}
                    scrolling
                    onChange={changeRoleClick}
                    placeholder={member.userRole}
                    linkeduser={member.userId}
                  />
                  <Icon name="trash" memberid={member.userId} onClick={removeUserClick} />
                </>
                )}
                {member.userRole === 'Propriétaire' && (
                <>
                  <Dropdown
                    id="select__member__role"
                    inline
                    defaultValue={member.userRole}
                    text={member.userRole}
                  />
                  <Icon name="child" />
                </>
                )}
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
      {userRoleInGroup === 'Propriétaire' && (
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
          {errorMessageDisplayed && (
          <Message negative>
            <Message.Header>Oups, le membre fait déjà parti du groupe !</Message.Header>
          </Message>
          )}
        </Modal>
      )}
    </div>
  );
};

export default GroupMembers;

GroupMembers.propTypes = {
  userInfos: PropTypes.object.isRequired,
  groupMembers: PropTypes.object.isRequired,
  memberSearchAction: PropTypes.func.isRequired,
  usersList: PropTypes.object.isRequired, // liste de tous les utilisateurs du site
  toggleAddMemberModal: PropTypes.func.isRequired,
  addMemberModalBool: PropTypes.bool.isRequired,
  showResults: PropTypes.func.isRequired,
  membersSearchResults: PropTypes.array.isRequired,
  membersSearchValue: PropTypes.string.isRequired,
  addMemberToGroup: PropTypes.func.isRequired,
  removeUserAction: PropTypes.func.isRequired,
  errorMessageDisplayed: PropTypes.bool.isRequired,
  toggleErrorMessageDisplay: PropTypes.func.isRequired,
  changeRoleAction: PropTypes.func.isRequired,
};
