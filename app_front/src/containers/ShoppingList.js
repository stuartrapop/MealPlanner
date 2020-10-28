import { connect } from 'react-redux';
import ShoppingList from '../components/Main/ShoppingList';
import { fetchGroupsDatasAction } from '../actions/groups';

const mapStateToProps = (state) => {
  console.log('userInfo ', state.groups);
  return (

    {
      userInfos: state.groups.userInfos,
      groupId: 1,
    });
};

const mapDispatchToProps = (dispatch) => ({
  fetchGroupsDatas: () => {
    dispatch(fetchGroupsDatasAction());
  },
});

// Container
const ShoppingListContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

// == Export
export default ShoppingListContainer;
