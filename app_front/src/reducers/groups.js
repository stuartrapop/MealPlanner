import {
  SEND_GROUPS_DATAS,
  CHOOSE_GROUP,
  TOGGLE_MEAL_MODAL,
  SAVE_NEW_MEAL,
  SEND_ERROR_MESSAGE,
  CHANGE_ACTIVE_ENTRY_ID,
  START_SEARCH,
  SHOW_RESULTS_ACTION,
  SEND_NUMBER_PEOPLE_ACTION,
  SEND_GROUP_MEMBERS,
  TOGGLE_CREATE_GROUP_MODAL_ACTION,
  SAVE_GROUP_NAME_CHANGE,
  SEND_ALL_USERS,
  TOGGLE_ADD_MEMBER_MODAL_ACTION,
  SHOW_POSSIBLE_MEMBERS_ACTION,
  MEMBER_SEARCH_INPUT_ACTION,
  RESET_ACTIVE_ENTRY_ACTION,
  TOGGLE_ERROR_MESSAGE_DISPLAY,
  TOGGLE_EDIT_GROUP_NAME_ZONE,
  UPDATE_GROUP_NEW_NAME_ACTION,
  SEND_GROUP_CREATION_ERROR,
} from '../actions/groups';
import {
  SAVE_USER,
  REMOVE_ACCOUNT,
} from '../actions/user';

export const initialState = {
  userInfos: {},
  loading: true,
  activeGroup: 0,
  activeGroupId: 0,
  mealModalDisplayed: false,
  errorMessageBoolean: false,
  groupValueDropdown: '',
  addMealEntryActive: 0,
  recipesSearchLoading: false,
  recipesSearchResults: [],
  recipesSearchValue: '',
  numberPeople: 2,
  createGroupModalBool: false,
  groupNameInputValue: '',
  usersList: [],
  addMemberModalBool: false,
  membersSearchResults: [],
  membersSearchValue: '',
  errorMessageDisplayed: false,
  editGroupNameZoneDisplay: -1,
  newGroupNameProposal: '',
  groupCreationError: '',
  groupMembers: {},
  gettingAllUsersLoading: true,
  groupMembersIsDefined: false,
};

const groupsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_GROUPS_DATAS:
      return {
        ...state,
        userInfos: action.data,
        activeGroupId: action.data.groups[state.activeGroup].id,
        groupValueDropdown: action.data.groups[state.activeGroup].name,
        loading: false,
      };
    case CHOOSE_GROUP:
      return {
        ...state,
        activeGroup: action.targetIndexValue,
        activeGroupId: action.targetIdValue.id,
        groupValueDropdown: action.targetedGroupValue,
      };
    case TOGGLE_MEAL_MODAL:
      return {
        ...state,
        mealModalDisplayed: !state.mealModalDisplayed,
      };
    case SAVE_NEW_MEAL:
      return {
        ...state,
        mealModalDisplayed: false,
        errorMessageBoolean: false,
      };
    case SEND_ERROR_MESSAGE:
      return {
        ...state,
        errorMessageBoolean: true,
      };
    case CHANGE_ACTIVE_ENTRY_ID:
      return {
        ...state,
        addMealEntryActive: action.entryId,
      };
    case START_SEARCH:
      return {
        ...state,
        recipesSearchValue: action.input,
      };
    case SHOW_RESULTS_ACTION:
      return {
        ...state,
        recipesSearchResults: action.possibleResults,
      };
    case SEND_NUMBER_PEOPLE_ACTION:
      return {
        ...state,
        numberPeople: action.nbPeople,
      };
    case SEND_GROUP_MEMBERS:
      return {
        ...state,
        groupMembers: action.data,
        groupMembersIsDefined: true,
      };
    case TOGGLE_CREATE_GROUP_MODAL_ACTION:
      return {
        ...state,
        createGroupModalBool: !state.createGroupModalBool,
      };
    case SAVE_GROUP_NAME_CHANGE:
      return {
        ...state,
        groupNameInputValue: action.input,
      };
    case SEND_ALL_USERS:
      return {
        ...state,
        usersList: action.usersList,
        gettingAllUsersLoading: false,
      };
    case TOGGLE_ADD_MEMBER_MODAL_ACTION:
      return {
        ...state,
        addMemberModalBool: !state.addMemberModalBool,
        errorMessageDisplayed: false,
        membersSearchValue: '',
      };
    case SHOW_POSSIBLE_MEMBERS_ACTION:
      return {
        ...state,
        membersSearchResults: action.possibleMembers,
      };
    case MEMBER_SEARCH_INPUT_ACTION:
      return {
        ...state,
        membersSearchValue: action.input,
      };
    case RESET_ACTIVE_ENTRY_ACTION:
      return {
        ...state,
        addMealEntryActive: 0,
        recipesSearchValue: '',
      };
    case TOGGLE_ERROR_MESSAGE_DISPLAY:
      return {
        ...state,
        errorMessageDisplayed: !state.errorMessageDisplayed,
      };
    case SAVE_USER:
      return {
        ...state,
      };
    case TOGGLE_EDIT_GROUP_NAME_ZONE:
      return {
        ...state,
        editGroupNameZoneDisplay: action.groupIndex,
      };
    case UPDATE_GROUP_NEW_NAME_ACTION:
      return {
        ...state,
        newGroupNameProposal: action.input,
      };
    case SEND_GROUP_CREATION_ERROR:
      return {
        ...state,
        groupCreationError: action.errorMsg.message,
      };

    case REMOVE_ACCOUNT:
      return {
        ...state,
        userInfos: {},
      };
    default:
      return state;
  }
};

export default groupsReducer;
