import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BuyPropertyComponent from '../../components/buy-property/BuyPropertyComponent';
import MostViewedPropertiesComponent from '../../components/buy-property/MostViewedPropertiesComponent';
import { actions as buyPropertyActions } from '../../redux/ducks/buy-property';
import { actions as commonActions } from '../../redux/ducks/common';
import { apiActions as commonApi } from '../../redux/ducks/common/api';
import { Layout } from '../../layouts';
import { apiActions } from '../../redux/ducks/buy-property/api';

import { Footer } from '../../components/footer';

export const BuyPropertyContainer = props => {
  const { child } = props;
  if(child) {
    return (
         <BuyPropertyComponent {...props} />
     )
  }

  return (
   <Layout>
      <BuyPropertyComponent {...props} />
    </Layout>
  )
}


const mapStateToProps = ({
  buyProperty, common
}) => ({
  ...buyProperty,
  ...common
});

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, { ...buyPropertyActions, ...commonActions, ...apiActions, ...commonApi }), dispatch
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyPropertyContainer);
