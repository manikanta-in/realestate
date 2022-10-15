import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropertyDetailsComponent } from '../../components/property-details';
import { actions as commonActions } from '../../redux/ducks/common';
import { apiActions as commonApi } from '../../redux/ducks/common/api';
import { Layout } from '../../layouts';
import { actions as propertyDetailsActions } from '../../redux/ducks/property-details';
import { apiActions } from '../../redux/ducks/property-details/api';

export const PropertyDetailsContainer = props =>
  <Layout>
    <PropertyDetailsComponent {...props} />
  </Layout>


const mapStateToProps = ({
  common, propertyDetails
}) => ({
  ...common,
  ...propertyDetails
});

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, { ...commonActions, ...propertyDetailsActions, ...apiActions, ...commonApi }), dispatch
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetailsContainer);
