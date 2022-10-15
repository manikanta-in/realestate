import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BuyPropertyContainer,
  SellPropertyContainer,
  HomeContainer,
  SearchResultContainer,
  PropertyDetailsContainer,
  MyPropertiesContainer
} from '../containers';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        exact
        element={<HomeContainer />}
      />
      <Route
        path="/sell"
        exact
        element={<SellPropertyContainer />}
      />
      <Route
        path="/buy"
        exact
        element={<BuyPropertyContainer />}
      />
      <Route
        path="/search"
        exact
        element={<SearchResultContainer />}
      />
      <Route
         path="/property/:propertyid"
        exact
        element={<PropertyDetailsContainer />}
      />
      <Route
        path="/account"
        exact
        element={<MyPropertiesContainer />}
      />
      <Route path="*" element={<HomeContainer />}
      />
    </Routes>
  </Router>
);

export default AppRoutes;
