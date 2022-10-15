import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MyPropertiesComponent } from '../../components/account';
import { Layout } from '../../layouts';

import { actions as commonActions } from '../../redux/ducks/common';
import { actions as myPropertyActions } from '../../redux/ducks/my-property';
import { apiActions } from '../../redux/ducks/my-property/api';


export const MyPropertiesContainer = props =>
  <Layout>
    <MyPropertiesComponent {...props} />
  </Layout>

const mapStateToProps = ({
  myProperty, common
}) => ({
  ...common,
  ...myProperty
});

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, { ...commonActions, ...myPropertyActions, ...apiActions }), dispatch
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPropertiesContainer);
