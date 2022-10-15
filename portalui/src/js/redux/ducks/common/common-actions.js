const setCurrentPage = (data) => {
    return {
        type: "SET_CURRENT_PAGE",
        data
    }
}

const setToken = (data) => {
    return {
        type: "SET_TOKEN",
        data
    }
}

const setCommonLoader = (data) => {
    return {
        type: "COMMON_LOADER",
        data
    }
}

const setMetaData = (data) => {
    return {
        type: "SET_META_DATA",
        data
    }
}

const setPropertTypes = (data) => {
    return {
        type: "SET_PROPERTY_TYPES",
        data
    }
}

const setPropertSubTypes = (data) => {
    return {
        type: "SET_PROPERTY_SUB_TYPES",
        data
    }
}


const setOtp = (data) => {
    return {
        type: "SET_OTP",
        data
    }
}


export const actions = {
    setCurrentPage,
    setToken,
    setCommonLoader,
    setMetaData,
    setPropertTypes,
    setPropertSubTypes,
    setOtp
};
