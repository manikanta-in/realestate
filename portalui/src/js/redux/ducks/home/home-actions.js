const setHomeProducts = (data) => {
    return {
        type: "HOME_SET_PRODUCTS",
        data
    }
}

const setPropertyLoader = (data) => {
    return {
        type: "HOME_SET_PROPERTY_LOADER",
        data
    }
}

const setTestimonialData = (data) => {
    return {
        type: "HOME_SET_TESTIMONIAL_DATA",
        data
    }
}

const setTestimonialLoader = (data) => {
    return {
        type: "HOME_SET_TESTIMONIAL_LOADER",
        data
    }
}

export const actions = {
    setHomeProducts,
    setPropertyLoader,
    setTestimonialData,
    setTestimonialLoader
};
