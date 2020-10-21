import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'

import Landing from '../components/Main/Landing';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = () => ({});

// Container
const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);

// == Export
export default LandingContainer;
