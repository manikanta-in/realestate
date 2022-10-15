

const setProductsBuy = (data) => {
    return {
        type: "BUY_SET_PRODUCTS",
        data
    }
}


const setBuyPropertyLoader = (data) => {
    return {
        type: "BUY_SET_PROPERTY_LOADER",
        data
    }
}

export const actions = {
    setProductsBuy,
    setBuyPropertyLoader
};
