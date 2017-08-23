import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import configureStore from '../redux/store';
import User from '../components/user';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = () => ({
  onRedirectHome: () => Router.push('/'),
});

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(User);
