import axios from "axios";
import { actions as BuyActions } from '../buy-property-actions';
const { setProductsBuy, setBuyPropertyLoader } = BuyActions;

const getBuyProducts = (url) => {
    return async dispatch => {
        dispatch(setBuyPropertyLoader(true));
        try {
            let res = await axios.get(url);
            res = res.data;
            dispatch(setProductsBuy(res));
        } catch (error) {
            dispatch(setProductsBuy(null));
        } finally {
            dispatch(setBuyPropertyLoader(false));
        }
    }
}


export const apiActions = {
    getBuyProducts
};