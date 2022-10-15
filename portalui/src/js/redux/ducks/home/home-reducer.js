const initState = {
    productList: [],
    propertyLoader: false,
    testimonialList: [],
    testimonialLoader: false
}

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case "HOME_SET_PRODUCTS": {
            let res = null;
            if (action.data != null) {
                res = action.data.properties || null;
            }
            return {
                ...state,
                productList: res
            }
        }
        case "HOME_SET_PROPERTY_LOADER": return {
            ...state,
            propertyLoader: action.data
        }
        case "HOME_SET_TESTIMONIAL_DATA": {
            let res = null;
            if (action.data != null) {
                res = action.data || null;
            }
            return {
                ...state,
                testimonialList: res
            }
        }
        case "HOME_SET_TESTIMONIAL_LOADER": return {
            ...state,
            testimonialLoader: action.data
        }
        default:
            return state;

    }
}

export default homeReducer;