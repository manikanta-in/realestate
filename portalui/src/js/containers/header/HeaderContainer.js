import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from '../../components/header';

import { actions as commonActions } from '../../redux/ducks/common';


export const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = ({
  common
}) => ({
  ...common
});

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, { ...commonActions }), dispatch
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
