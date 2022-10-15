const initState = {
    currentPage: "home",
    hasToken: false,
    profilePic: null,
    name: null,
    commonLoader: false,
    metaData: null
}

const commonReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE": return {
            ...state,
            currentPage: action.data
        }

        case "SET_TOKEN": {
            let hasToken = null;
            let profilePic = null;
            let name = null;
            if (action.data != null) {
                hasToken = action.data.hasToken;
                profilePic = action.data.profilePic;
                name = action.data.name;
            }
            return {
                ...state,
                hasToken,
                profilePic,
                name
            }
        }

        case "COMMON_LOADER": return {
            ...state,
            commonLoader: action.data
        }
        case "SET_PROPERTY_TYPES": return {
            ...state,
            propertyTypes: action.data
        }
        case "SET_PROPERTY_SUB_TYPES": return {
            ...state,
            propertySubTypes: action.data
        }

        case "SET_META_DATA": return {
            ...state,
            metaData: action.data
        }
        case "SET_OTP": return {
            ...state,
            otp: action.data
        }

        default:
            return state;

    }
}

export default commonReducer;