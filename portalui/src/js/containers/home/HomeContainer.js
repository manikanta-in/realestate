import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HomeComponent } from '../../components/home';
import { Layout } from '../../layouts';

import { actions as commonActions } from '../../redux/ducks/common';
import { actions as homeActions } from '../../redux/ducks/home';
import { apiActions } from '../../redux/ducks/home/api';

export const HomeContainer = props =>
  <Layout>
    <HomeComponent {...props} />
  </Layout>

const mapStateToProps = ({
  home, common
}) => ({
  ...home,
  ...common
});

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, { ...commonActions, ...apiActions, ...homeActions }), dispatch
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
