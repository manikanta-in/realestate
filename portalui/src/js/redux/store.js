import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import sellPropertyReducer from './ducks/sell-property';
import buyPropertyReducer from './ducks/buy-property';
import searchPropertyReducer from './ducks/search-property';
import MyPropertyReducer from './ducks/my-property';
import PropertyDetailsReducer from './ducks/property-details';
import homeReducer from './ducks/home';
import commonReducer from './ducks/common';


const middlewares = [thunk];

const rootReducer = () => combineReducers({
    sellProperty: sellPropertyReducer,
    buyProperty: buyPropertyReducer,
    common: commonReducer,
    home: homeReducer,
    propertyDetails: PropertyDetailsReducer,
    myProperty: MyPropertyReducer,
    searchProperty: searchPropertyReducer
})


const store = createStore(rootReducer(), compose(
    applyMiddleware(
        ...middlewares,
    )));

export default store;
