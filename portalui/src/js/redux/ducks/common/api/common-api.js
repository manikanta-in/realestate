import axios from "axios";
import { actions as commonActions } from '../common-actions';

const { setToken, setCommonLoader, setMetaData, setPropertTypes, setPropertSubTypes, setOtp } = commonActions;
const validateToken = (url) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        dispatch(setCommonLoader(true));
        try {
            let res = await axios.get(url, { headers });
            let payload = {};
            payload.profilePic = res.data.user.imageUrl;
            payload.hasToken = true;
            payload.name = res.data.user.name;
            document.body.style.overflow = 'auto';
            dispatch(setToken(payload));
            return res;
        } catch (error) {
            dispatch(setToken(null));
        } finally {
            dispatch(setCommonLoader(false));
        }
    }
}

const validateCode = (url, req) => {
    return async dispatch => {
        dispatch(setCommonLoader(true));
        try {
            let res = await axios.post(url, req);
            if (res.status == 200) {
                if (res.data && res.data.data.status == "verified") {
                    let payload = {};
                    payload.profilePic = "https://i.pravatar.cc/150?img=56";
                    payload.hasToken = true;
                    payload.name = "Test User";
                    document.body.style.overflow = 'auto';
                    dispatch(setToken(payload));
                }
            }
            return res;
        } catch (error) {
            dispatch(setToken(null));
            return error.response;
        } finally {
            dispatch(setCommonLoader(false));
        }
    }
}

const generateCode = (url, req) => {
    return async () => {
        try {
            let res = await axios.post(url, req);
            return res;
        } catch (error) {
            return error.response;
        }
    }
}

const appLogin = () => {
    return async dispatch => {
        dispatch(setCommonLoader(true));
        try {
            const payload = {
                "username": "admin",
                "password": "admin"
            }
            let res = await axios.post("api/property/token/", payload);
            localStorage.setItem("token", res.data.access);
            payload.hasToken = true;
            payload.token = res.data.access;
            dispatch(setToken(payload));
        } catch (error) {
            dispatch(setToken(null));
        } finally {
            dispatch(setCommonLoader(false));
        }
    }
}

const getSEOMetaKeys = () => {
    return async dispatch => {
        try {
            let res = await axios.get("http://20.197.3.174:8008/api/SEO-metakeys");
            if (res.status == "200") {
                dispatch(setMetaData(res.data.data));
            } else {
                dispatch(setMetaData(null));
            }
            //
        } catch (error) {
            dispatch(setMetaData(null));
        }
    }
}

const getPropertyTypes = (url) => {
    const data = [{
        "id": 1,
        "description": "Agriculture"
    },
    {
        "id": 2,
        "description": "Residential"
    },
    {
        "id": 3,
        "description": "Commercial"
    }];

    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        try {
            const res = await axios.get(url, { headers });
            if (res.status == 200) {
                dispatch(setPropertTypes(res.data.data));
                // if(res.data.results.length ===0 ) {
                //     dispatch(setPropertTypes(data));
                // } else {
                //     dispatch(setPropertTypes(res.data.results));
                // }
            } else {
                dispatch(setPropertTypes([]));
            }
        } catch (error) {
            dispatch(setPropertTypes([]));
        }
    }
}

const getPropertySubTypes = (url) => {


    const data = [
        {
            "id": 1,
            "proptypeid": 1,
            "imageuploadlimit": 5,
            "videouploadlimit": 1,
            "description": "Agriculture Lands",
            "status": "A"
        },
        {
            "id": 2,
            "proptypeid": 1,
            "imageuploadlimit": 10,
            "videouploadlimit": 3,
            "description": "Form House",
            "status": "A"
        },
        {
            "id": 3,
            "proptypeid": 2,
            "imageuploadlimit": 5,
            "videouploadlimit": 1,
            "description": "Plots",
            "status": "A"
        },
        {
            "id": 4,
            "proptypeid": 2,
            "imageuploadlimit": 10,
            "videouploadlimit": 3,
            "description": "Flats",
            "status": "A"
        },
        {
            "id": 5,
            "proptypeid": 2,
            "imageuploadlimit": 20,
            "videouploadlimit": 5,
            "description": "Villas",
            "status": "A"
        },
        {
            "id": 6,
            "proptypeid": 3,
            "imageuploadlimit": 5,
            "videouploadlimit": 2,
            "description": "Open Spaces",
            "status": "A"
        },
        {
            "id": 7,
            "proptypeid": 3,
            "imageuploadlimit": 25,
            "videouploadlimit": 5,
            "description": "Buildings",
            "status": "A"
        }
    ];


    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        try {
            const res = await axios.get(url, { headers });
            if (res.status == 200) {
                if(res.data.results.length ===0 ) {
                    dispatch(setPropertSubTypes(data));
                } else {
                    dispatch(setPropertSubTypes(res.data.results));
                }
            } else {
                dispatch(setPropertSubTypes([]));
            }
        } catch (error) {
            dispatch(setPropertSubTypes([]));
        }
    }
}


const getOTP = (url, req) => {
    return async dispatch => {
        dispatch(setCommonLoader(true));
        try {
            let res = await axios.post(url, req);
            const data = res.data.data;
            dispatch(setOtp(data));
        } catch (error) {
            return error.response;
        } finally {
            dispatch(setCommonLoader(false));
        }
    }
}


const verifyOTP = (url, req) => {
    return async dispatch => {
        dispatch(setCommonLoader(true));
        try {
            let res = await axios.post(url, req);
            return res;
        } catch (error) {
            return error.response;
        }
        finally {
            dispatch(setCommonLoader(false));
        }
    }
}


export const apiActions = {
    validateToken,
    appLogin,
    getSEOMetaKeys,
    generateCode,
    validateCode,
    getPropertyTypes,
    getPropertySubTypes,
    getOTP,
    verifyOTP,
};