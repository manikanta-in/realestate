

const setProductsSearch = (data) => {
    return {
        type: "SEARCH_SET_PRODUCTS",
        data
    }
}


const setSearchPropertyLoader = (data) => {
    return {
        type: "SEARCH_SET_PROPERTY_LOADER",
        data
    }
}

const setSearchResult = (data) => {
    return {
        type: "SEARCH_SET_RESULT",
        data
    }
}


const setSearchResultLoader = (data) => {
    return {
        type: "SEARCH_SET_RESULT_LOADER",
        data
    }
}

export const actions = {
    setProductsSearch,
    setSearchPropertyLoader,
    setSearchResult,
    setSearchResultLoader
};
