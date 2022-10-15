const setPropertyDetails = (data) => {
    return {
        type: "SET_PROPERTY_DETAILS",
        data
    }
}

const setPropertyDetailsLoader = (data) => {
    return {
        type: "SET_PROPERTY_DETAILS_LOADER",
        data
    }
}

const setPropertyDetailsMsg = (data) => {
    return {
        type: "SET_PROPERTY_DETAILS_MSG",
        data
    }
}

const setPropertyDetailsMsgLoader = (data) => {
    return {
        type: "SET_PROPERTY_DETAILS_MSG_LOADER",
        data
    }
}

const setFavCount = (data) => {
    return {
        type: "SET_FAV_COUNT",
        data
    }
}

const setFavFlag = (data) => {
    return {
        type: "SET_HAS_FAV",
        data
    }
}

export const actions = {
    setPropertyDetails,
    setPropertyDetailsLoader,
    setPropertyDetailsMsg,
    setPropertyDetailsMsgLoader,
    setFavCount,
    setFavFlag
};
