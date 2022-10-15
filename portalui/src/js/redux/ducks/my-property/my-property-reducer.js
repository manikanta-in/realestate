const initState = {
    productList: [],
    propertyLoader: false,
    messageList: [],
    messageLoader: false
}

const MyPropertyReducer = (state = initState, action) => {
    switch (action.type) {
        case "MY_PROPERTY_SET_PRODUCTS": {
            let res = null;
            if (action.data != null) {
                res = action.data || null;
            }
            return {
                ...state,
                productList: res
            }
        }
        case "MY_PROPERTY_SET_PROPERTY_LOADER": return {
            ...state,
            propertyLoader: action.data
        }
        case "MY_PROPERTY_SET_MESSAGE_DATA": {
            let res = null;
            if (action.data != null) {
                res = action.data.messages || null;
            }
            return {
                ...state,
                messageList: res
            }
        }
        case "MY_PROPERTY_SET_MESSAGE_LOADER": return {
            ...state,
            messageLoader: action.data
        }
        default:
            return state;

    }
}

export default MyPropertyReducer;