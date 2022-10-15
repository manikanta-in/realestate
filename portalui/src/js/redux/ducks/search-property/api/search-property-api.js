import axios from "axios";
import { actions as SearchActions } from '../search-property-actions';

const { setProductsSearch, setSearchPropertyLoader, setSearchResult, setSearchResultLoader } = SearchActions;

const getSearchProducts = (url) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        dispatch(setSearchPropertyLoader(true));
        try {
            let res = await axios.get(ur, {headers});
            res = res.data;
            dispatch(setProductsSearch(res));
        } catch (error) {
            dispatch(setProductsSearch(null));
        } finally {
            dispatch(setSearchPropertyLoader(false));
        }
    }
}

const getSearchResultProducts = (url, req) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    let queryParams = '';
    Object.keys(req).forEach(key=> {
        if(req[key]){
            queryParams += `${key}=${req[key]}&`;
        }
    });
    return async dispatch => {
        dispatch(setSearchResultLoader(true));
        try {
            let res = await axios.get(`${url}?${queryParams}`, {headers});
            res = res.data;
            dispatch(setSearchResult({properties : res.results}));
        } catch (error) {
            dispatch(setSearchResult(null));
        } finally {
            dispatch(setSearchResultLoader(false));
        }
    }
}

export const apiActions = {
    getSearchProducts,
    getSearchResultProducts
};