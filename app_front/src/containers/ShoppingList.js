import { connect } from 'react-redux';
import ShoppingList from '../components/Main/ShoppingList';
import { fetchGroupsDatasAction } from '../actions/groups';

const mapStateToProps = (state) => (
  {
    userInfos: state.groups.userInfos,
    groupId: state.groups.activeGroupId,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchGroupsDatas: () => {
    dispatch(fetchGroupsDatasAction());
  },
});

// Container
const ShoppingListContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

// == Export
export default ShoppingListContainer;
