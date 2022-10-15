import axios from "axios";
import { actions as HomeActions } from '../home-actions';

const { setHomeProducts, setPropertyLoader, setTestimonialData, setTestimonialLoader } = HomeActions;

const getHomeProducts = (url) => {
    return async dispatch => {
        dispatch(setPropertyLoader(true));
        try {
            let res = await axios.get(url);
            res = res.data;
            dispatch(setHomeProducts(res));
        } catch (error) {
            dispatch(setHomeProducts(null));
        } finally {
            dispatch(setPropertyLoader(false));
        }
    }
}

const getTestimonialData = (url) => {
    return async dispatch => {
        dispatch(setTestimonialLoader(true));
        try {
            let res = await axios.get(url);
            if (res.status == 200) {
                res = res.data;
                dispatch(setTestimonialData(res.data));
            } else {
                dispatch(setTestimonialData(null));
            }
        } catch (error) {
            dispatch(setTestimonialData(null));
        } finally {
            dispatch(setTestimonialLoader(false));
        }
    }
}


export const apiActions = {
    getHomeProducts,
    getTestimonialData
};