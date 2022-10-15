import React, { useContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SellPropertyComponent } from '../../components/sell-property';
import { actions as sellPropertyActions } from '../../redux/ducks/sell-property';
import { apiActions } from '../../redux/ducks/sell-property/api';
import { actions as commonActions } from '../../redux/ducks/common';
import { apiActions as commonApi } from '../../redux/ducks/common/api';
import { Layout } from '../../layouts';
import { Context } from "../../Wrapper";

export const SellPropertyContainer = props => {
  const context = useContext(Context);
  return (<Layout>
    <SellPropertyComponent {...props} language={context.locale} />
  </Layout>)
}


const mapStateToProps = ({
  sellProperty, common
}) => ({
  ...sellProperty,
  ...common
});

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, { ...sellPropertyActions, ...apiActions, ...commonActions, ...commonApi }), dispatch
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellPropertyContainer);
