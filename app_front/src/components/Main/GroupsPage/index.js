import React, { useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import {
  Button, Header, Icon, Modal, Input, Message, Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';
import GroupMembers from '../../../containers/GroupMembers';



const GroupsPage = ({
  userInfos,
  fetchGroupMembers,
  handleDeleteGroup,
  handleLeaveGroup,
  toggleCreateGroupModal,
  createGroupModalBool,
  saveGroupNameChange,
  groupNameInputValue,
  handleCreateGroup,
  fetchAllUsers,
  toggleEditGroupNameZone,
  editGroupNameZoneDisplay,
  updateGroupNewNameAction,
  newGroupNameProposal,
  sendNewGroupNameAction,
  groupCreationError,
  gettingAllUsersLoading,
  groupMembersIsDefined,
}) => {
  useEffect(() => {
    fetchAllUsers();
  }, []);
  // useEffect avec getGroupMembers de [0]
  const getGroupMembers = (evt) => {
    fetchGroupMembers(evt.target.id);
  };
  const handleDeleteGroupClick = (evt) => {
    handleDeleteGroup(evt.target.id);
  };
  const handleLeaveGroupClick = (evt) => {
    handleLeaveGroup(evt.target.id, userInfos.userId);
  };
  const openCreateGroupModal = () => {
    toggleCreateGroupModal();
  };
  const handleCreateGroupClick = () => {
    handleCreateGroup(groupNameInputValue, userInfos.userId);
  };
  const handleGroupNameChange = (evt, data) => {
    saveGroupNameChange(data.value);
  };
  const editGroupName = (evt, data) => {
    toggleEditGroupNameZone(data.groupindex);
  };
  const closeAllGroupNameZone = () => {
    toggleEditGroupNameZone(-1);
  };
  const updateGroupNewName = (evt, data) => {
    updateGroupNewNameAction(data.value);
  };
  const sendNewGroupName = (evt, data) => {
    sendNewGroupNameAction(newGroupNameProposal, data.groupid);
  };

  return (
    <div className="groups_details_container">
      {gettingAllUsersLoading && (
      <Segment>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
      )}
      {!gettingAllUsersLoading && (
      <>
        <div className="my_groups">
          <h1 className="groups__title">Mes Groupes</h1>
          <Link to="/">
            <div className="return__MySpace">
              <Icon name="arrow left" />
              Mon Espace
            </div>
          </Link>
          <ul className="group_list">
            {userInfos.groups.map((group, index) => (
              <li key={group.id} className="group">
                <Icon name="edit outline" groupindex={index} onClick={editGroupName} />
                {editGroupNameZoneDisplay === index && (
                <div className="modify__group__name">
                  <Input placeholder="Nouveau nom..." onChange={updateGroupNewName} />
                  <Icon name="check" onClick={sendNewGroupName} groupid={group.id} color="green" />
                  <Icon name="cancel" onClick={closeAllGroupNameZone} color="red" />
                </div>
                )}
                {editGroupNameZoneDisplay !== index && (
                <div className="group__role__action">
                  <h2 onClick={getGroupMembers} id={group.id}>{group.name}</h2>
                  {group.UserBelongsGroup.user_role === 'Propriétaire' && (
                  <a className="delete" id={group.id} onClick={handleDeleteGroupClick}>Supprimer</a>
                  )}
                  {group.UserBelongsGroup.user_role !== 'Propriétaire' && (
                  <a className="delete" id={group.id} onClick={handleLeaveGroupClick}>Quitter</a>
                  )}
                </div>
                )}
              </li>
            ))}
          </ul>
          <Modal
            basic
            onClose={openCreateGroupModal}
            onOpen={openCreateGroupModal}
            open={createGroupModalBool}
            size="small"
            trigger={(
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#68b67c" />
                <line x1="25.5" y1="17" x2="25.5" y2="34" stroke="white" strokeWidth="3" />
                <line x1="34" y1="25.5" x2="17" y2="25.5" stroke="white" strokeWidth="3" />
              </svg>
          )}
          >
            <Header icon>
              <Icon name="group" />
              Choisissez un nom de groupe
            </Header>
            <Modal.Content>
              <Input placeholder="Vacances février 2020..." id="group__name__content" onChange={handleGroupNameChange} />
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="red" inverted onClick={openCreateGroupModal}>
                <Icon name="remove" /> Annuler
              </Button>
              <Button color="green" inverted onClick={handleCreateGroupClick}>
                <Icon name="checkmark" /> Créer mon groupe
              </Button>
            </Modal.Actions>
            {groupCreationError !== '' && (
            <Message negative>
              <Message.Header>{groupCreationError}</Message.Header>
            </Message>
            )}
          </Modal>
        </div>
        <div className="group_members">
          {!groupMembersIsDefined && (
          <h1>Sélectionnez un groupe</h1>
          )}
          {groupMembersIsDefined && (
          <GroupMembers />
          )}
        </div>
      </>
      )}
    </div>
  );
};

export default GroupsPage;

GroupsPage.propTypes = {
  userInfos: PropTypes.object.isRequired,
  fetchGroupMembers: PropTypes.func.isRequired,
  handleDeleteGroup: PropTypes.func.isRequired,
  handleLeaveGroup: PropTypes.func.isRequired,
  toggleCreateGroupModal: PropTypes.func.isRequired,
  createGroupModalBool: PropTypes.bool.isRequired,
  saveGroupNameChange: PropTypes.func.isRequired,
  groupNameInputValue: PropTypes.string.isRequired,
  handleCreateGroup: PropTypes.func.isRequired,
  fetchAllUsers: PropTypes.func.isRequired,
  toggleEditGroupNameZone: PropTypes.func.isRequired,
  editGroupNameZoneDisplay: PropTypes.number.isRequired,
  updateGroupNewNameAction: PropTypes.func.isRequired,
  newGroupNameProposal: PropTypes.string.isRequired,
  sendNewGroupNameAction: PropTypes.func.isRequired,
  groupCreationError: PropTypes.string.isRequired,
  gettingAllUsersLoading: PropTypes.bool.isRequired,
  groupMembersIsDefined: PropTypes.bool.isRequired,
};
