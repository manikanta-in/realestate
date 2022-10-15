const initState = {
    searchResult: [],
    searchProperties: [],
    searchPropertiesLoader: false,
    searchResultLoader: false
}

const searchPropertyReducer = (state = initState, action) => {
    switch (action.type) {
        case "SEARCH_SET_PRODUCTS": {
            let res = null;
            if (action.data != null) {
                res = action.data.properties || null;
            }
            return {
                ...state,
                searchProperties: res
            }
        }
        case "SEARCH_SET_PROPERTY_LOADER": return {
            ...state,
            searchPropertiesLoader: action.data
        }
        case "SEARCH_SET_RESULT": {
            let res = null;
            if (action.data != null) {
                res = action.data || null;
            }
            return {
                ...state,
                searchResult: res
            }
        }
        case "SEARCH_SET_RESULT_LOADER": return {
            ...state,
            searchResultLoader: action.data
        }

        default:
            return state;

    }
}

export default searchPropertyReducer;