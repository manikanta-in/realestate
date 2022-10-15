const setMyPropertyProducts = (data) => {
    return {
        type: "MY_PROPERTY_SET_PRODUCTS",
        data
    }
}

const setMyPropertyLoader = (data) => {
    return {
        type: "MY_PROPERTY_SET_PROPERTY_LOADER",
        data
    }
}

const setMyPropertyMessage = (data) => {
    return {
        type: "MY_PROPERTY_SET_MESSAGE_DATA",
        data
    }
}

const setMyPropertyMessageLoader = (data) => {
    return {
        type: "MY_PROPERTY_SET_MESSAGE_LOADER",
        data
    }
}

export const actions = {
    setMyPropertyProducts,
    setMyPropertyLoader,
    setMyPropertyMessage,
    setMyPropertyMessageLoader
};
