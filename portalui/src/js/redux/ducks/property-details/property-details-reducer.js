
const initState = {
    propertyDetails: [],
    propertyDetailsLoader: false,
    messageDetails: [],
    nearBy: [],
    messageLoader: false,
    favCount: 0,
    hasFav: false,
    position: null,
    nearByPositions: [],
    nearByProperties: []
    
}

const PropertyDetailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_PROPERTY_DETAILS": {
            let res = null;
            let nearBy = null;
            let favCount = 0;
            let position = null;
            let nearByPositions = [];
            let nearByProperties = [];
            if (action.data != null) {
                res = action.data.properties || null;
                nearBy = action.data.nearBy || null;
                favCount = action.data.favCount || 0;
                position = action.data.position || null;
                nearByPositions = action.data.nearByPositions || [];
                nearByProperties = action.data.nearByProperties || [];
            }
            return {
                ...state,
                propertyDetails: res,
                nearBy,
                favCount,
                position,
                nearByPositions,
                nearByProperties
            }
        }
        case "SET_PROPERTY_DETAILS_LOADER": return {
            ...state,
            propertyDetailsLoader: action.data
        }
        case "SET_PROPERTY_DETAILS_MSG": {
            let res = null;
            if (action.data != null) {
                res = action.data.messages || null;
            }
            return {
                ...state,
                messageDetails: res
            }
        }
        case "SET_PROPERTY_DETAILS_MSG_LOADER": return {
            ...state,
            messageLoader: action.data
        }
        case "SET_FAV_COUNT": return {
            ...state,
            favCount: action.data
        }
        case "SET_HAS_FAV": return {
            ...state,
            hasFav: action.data
        }
        default:
            return state;

    }
}

export default PropertyDetailsReducer;