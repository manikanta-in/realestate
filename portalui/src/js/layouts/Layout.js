import React from 'react';
import { HeaderContainer } from '../containers/header';
import { Footer } from '../components/footer';
const Layout = (props) => {


  return (
    <React.Fragment>
      <HeaderContainer />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};


export default Layout;
