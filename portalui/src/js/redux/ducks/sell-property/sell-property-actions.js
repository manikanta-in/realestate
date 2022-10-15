const setProducts = (data) => {
    return {
        type: "SET_PRODUCTS",
        data
    }
}

const setSellFieldValue = (data) => {
    return {
        type: "SELL_SET_FIELD_VALUE",
        data
    }
}

const setMedia = (data) => {
    return {
        type: "SELL_MEDIA",
        data
    }
}

const setMediaLoader = (data) => {
    return {
        type: "SELL_MEDIA_LOADER",
        data
    }
}

const setMediaDelete = (data) => {
    return {
        type: "SELL_MEDIA_DELETE",
        data
    }
}

const setNewFileLoader = (data) => {
    return {
        type: "SET_NEW_FILE_LOADER",
        data
    }
}

const setResetForm = (data) => {
    return {
        type: "RESET_FORM",
        data
    }
}

const setErrorFields = (data) => {
    return {
        type: "SELL_ERROR_FIELDS_UPDATE",
        data
    }
}



const setPropertyHighlights = (data) => {
    return {
        type: "SET_PROPERTY_HIGHLIGHTS",
        data
    }
}

const setGoogleAddress = (data) => {
    return {
        type: "SELL_SET_GOOGLE_ADDRESS",
        data
    }
}

export const actions = {
    setProducts,
    setSellFieldValue,
    setMedia,
    setMediaLoader,
    setMediaDelete,
    setNewFileLoader,
    setResetForm,
    setErrorFields,
    setPropertyHighlights,
    setGoogleAddress
};
