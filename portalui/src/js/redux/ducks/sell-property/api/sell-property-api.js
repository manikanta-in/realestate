import axios from "axios";
import { actions as sellPropertyActions } from '../sell-property-actions';

const { setProducts, setMedia, setMediaLoader, setNewFileLoader, setResetForm, setErrorFields } = sellPropertyActions;

const getData = (url) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        try {
            const res = await axios.get(url, { headers });
            dispatch(setProducts(res));
        } catch (error) {
            dispatch(setProducts("Error"));
        }
    }
}

const setPostProperty = (url, req, formObj) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        try {
            const res = await axios.post(url, req, { headers });
            if (res.status == 200) {
                dispatch(setResetForm(formObj));
            }
            return res;
        } catch (error) {
            if (error.response.status == 400) {
                dispatch(setErrorFields({ data: error.response.data, formObj }));
            }
            return error.response;
        }
    }
}


const setUploadFile = (url, req, formData) => {
    return async dispatch => {
        if (req.currentIndex != undefined) {
            let payload = {};
            payload.index = req.currentIndex;
            payload.value = true;
            dispatch(setMediaLoader(payload));
        } else {
            dispatch(setNewFileLoader(true));
        }
        try {
            const token = localStorage.getItem("token");
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
            let res = await axios.post(url, formData, { headers });
            let payload = {};
            payload.index = req.currentIndex;
            payload.uploadFailed = false;
            payload.imgUrl = res.data.imgUrl;
            payload.fileName = req.fileName;
            dispatch(setMedia(payload));
            if (req.currentIndex == undefined) {
                dispatch(setNewFileLoader(false));
            }
        } catch (error) {
            let payload = {};
            payload.index = req.currentIndex;
            payload.uploadFailed = true;
            dispatch(setMedia(payload));
            if (req.currentIndex == undefined) {
                dispatch(setNewFileLoader(false));
            }
        }
    }
}

export const apiActions = {
    getData,
    setUploadFile,
    setPostProperty
};