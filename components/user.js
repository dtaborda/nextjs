import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';

class UserCreated extends Component {
  static get propTypes() {
    return {
      onRedirectHome: PropTypes.func.isRequired,
      user: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      user: null,
    };
  }

  componentDidMount() {
    const {
      user,
      onRedirectHome,
    } = this.props;
    if (!user) {
      onRedirectHome();
    }
  }

  renderUser() {
    const { user } = this.props;
    if (user) {
      return (
        <ul className="list-group">
          <li className="list-group-item">Firstname: <strong>{user.firstname}</strong></li>
          <li className="list-group-item">Lastname: <strong>{user.lastname}</strong></li>
          <li className="list-group-item">Confirmation code: <strong>{user.confirmation_code}</strong></li>
          <li className="list-group-item">Invite code: <strong>{user.invite_code}</strong></li>
          <li className="list-group-item">Token: <strong>{user.token}</strong></li>
        </ul>
      );
    }
    return null;
  }

  render() {
    return (
      <Layout title="Confirmation">
        {this.renderUser()}
      </Layout>
    );
  }
}

export default UserCreated;
