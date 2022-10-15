const initState = {
    buyProperties: [],
    buyPropertiesLoader: false
}

const buyPropertyReducer = (state = initState, action) => {
    switch (action.type) {
        case "BUY_SET_PRODUCTS": {
            let res = null;
            if (action.data != null) {
                res = action.data.properties || null;
            }
            return {
                ...state,
                buyProperties: res
            }
        }
        case "BUY_SET_PROPERTY_LOADER": return {
            ...state,
            buyPropertiesLoader: action.data
        }

        default:
            return state;

    }
}

export default buyPropertyReducer;