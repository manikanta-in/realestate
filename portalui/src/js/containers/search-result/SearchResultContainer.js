import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchResultComponent } from '../../components/search-result';
import { actions as commonActions } from '../../redux/ducks/common';
import { Layout } from '../../layouts';
import { apiActions } from '../../redux/ducks/search-property/api';
import { apiActions as commonApi } from '../../redux/ducks/common/api';
import { actions as searchPropertyActions } from '../../redux/ducks/search-property';
import { useParams } from 'react-router';

export const SearchResultContainer = props => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const appDefaultLogin = () => {
      props.appLogin().then((res) => {
        props.validateToken("/api/authUser").then((res) => {
        });
      });
    }
    appDefaultLogin();
    return () => {}
  }, [])
  
  

  return (<Layout>
    <SearchResultComponent {...props}/>
  </Layout>);
}


const mapStateToProps = ({
  common, searchProperty
}) => ({
  ...searchProperty,
  ...common
});

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, { ...searchPropertyActions, ...commonActions, ...apiActions, ...commonApi }), dispatch
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultContainer);
