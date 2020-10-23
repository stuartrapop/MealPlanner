import { connect } from 'react-redux';

import { fetchGroupsDatasAction } from '../actions/groups';

import MySpace from '../components/Main/Landing/MySpace';

const mapStateToProps = (state) => ({
  loading: state.groups.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroupsDatas: () => {
    dispatch(fetchGroupsDatasAction());
  },
});

// Container
const MySpaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MySpace);

// == Export
export default MySpaceContainer;
