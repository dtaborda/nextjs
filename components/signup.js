import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from 'react-jsonschema-form';
import Layout from './layout';

const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
  }
`;

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


class SignupForm extends Component {
  static get propTypes() {
    return {
      error: PropTypes.string,
      user: PropTypes.object,
      loading: PropTypes.bool.isRequired,
      onRegistration: PropTypes.func.isRequired,
      onRedirect: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      error: null,
      user: null,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      schema: {
        type: 'object',
        required: [
          'first_name',
          'last_name',
          'email',
          'password',
          'password_confirmation',
        ],
        properties: {
          first_name: { type: 'string', title: 'Firstname' },
          last_name: { type: 'string', title: 'Lastname' },
          email: { type: 'string', title: 'email' },
          password: { type: 'string', title: 'Password' },
          password_confirmation: { type: 'string', title: 'Password Confirmation' },
        },
      },
      uiSchema: {
        password: {
          'ui:widget': 'password',
        },
        password_confirmation: {
          'ui:widget': 'password',
        },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.user !== this.props.user) {
      this.setState({ formData: {} });
      this.props.onRedirect();
    }
  }

  handleSubmit = (form) => {
    const formData = form.formData;
    this.setState({ formData });
    this.props.onRegistration(form);
  };

  renderLoading() {
    if (this.props.loading) {
      return <ContainerLoading><Loading /></ContainerLoading>;
    }
    return null;
  }

  renderShowError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger">
          <strong>Error! </strong> {this.props.error}
        </div>
      );
    }
    return null;
  }

  render() {
    const { schema, uiSchema, formData } = this.state;
    return (
      <Layout title="Yachtlife">
        <div>
          {this.renderLoading()}
          {this.renderShowError()}
          <Form
            schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onSubmit={this.handleSubmit}
          />
        </div>
      </Layout>
    );
  }
}

export default SignupForm;
