import axios from "axios";
import { actions as MyPropertyActions } from '../my-property-actions';

const { setMyPropertyProducts, setMyPropertyLoader, setMyPropertyMessage, setMyPropertyMessageLoader } = MyPropertyActions;

const getMyPropertyProducts = (url) => {
    return async dispatch => {
        dispatch(setMyPropertyLoader(true));
        try {
            let res = await axios.get(url);
            res = res.data;
            dispatch(setMyPropertyProducts(res));
        } catch (error) {
            dispatch(setMyPropertyProducts(null));
        } finally {
            dispatch(setMyPropertyLoader(false));
        }
    }
}

const getMyPropertyMessage = (url) => {
    return async dispatch => {
        dispatch(setMyPropertyMessageLoader(true));
        try {
            let res = await axios.get(url);
            res = res.data;
            dispatch(setMyPropertyMessage(res));
        } catch (error) {
            dispatch(setMyPropertyMessage(null));
        } finally {
            dispatch(setMyPropertyMessageLoader(false));
        }
    }
}


export const apiActions = {
    getMyPropertyProducts,
    getMyPropertyMessage
};