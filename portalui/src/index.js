import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './js/App';
import store from './js/redux/store';
import Wrapper from "../src/js/Wrapper";
import { apiActions as initialLoadActions } from './js/redux/ducks/common/api/common-api';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Wrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </Wrapper>
);

const { getSEOMetaKeys } = initialLoadActions;

store.dispatch(getSEOMetaKeys());



