import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import configureStore from '../redux/store';
import SignUp from '../components/signup';
import { onSignUp } from '../redux/auth/signup';

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onRegistration: (form) => {
    dispatch(onSignUp(form.formData));
  },
  onRedirect: () => Router.push('/confirmation'),
});

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(SignUp);
