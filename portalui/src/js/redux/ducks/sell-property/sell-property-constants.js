
export const AgricultureLand = {
    village_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.village",
        isValid: true,
        type: "primary",
        titleId: "sell.village.locality",
        googleMapAddressKey: "locality"
    },
    mandal_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.mandal",
        isValid: true,
        type: "primary",
        titleId: "sell.mandal"
    },
    owner_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.owner"
    },
    contact_num1: {
        value: "",
        regEx: "[0-9]",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.contact"
    },
    property_title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.title",
        isValid: true,
        type: "primary",
        titleId: "sell.title"
    },
    extent_in_acre: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.acrs",
        titleId: "sell.extent.in",
        width: "19%"
    },
    extent_in_gunta: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.guntas",
        titleId: null,
        width: "22%"
    },
    road_size_feet: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.feet",
        titleId: "sell.road.size",
        width: "19%"
    },
    offer_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.offer.price",
        width: "19%"
    },
    market_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.market.value",
        width: "19%"
    },
    distance_from_orr: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.orr",
        width: "19%"
    },
    distance_from_hyd: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.hyd",
        width: "19%"
    },
    approachroad_id: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: null,
        isValid: true,
        type: "dropdown",
        titleId: "sell.approach.road",
        options: [{ id: 1, value: "sell.black.top" }, { id: 2, value: "sell.metal.road" },
        { id: 2, value: "sell.kacha.road" }, { id: 2, value: "sell.no.road" }]
    }
}

export const AgricultureFormHouse = {
    owner_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.owner"
    },
    contact_num1:  {
        value: "",
        regEx: "[0-9]",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.contact"
    },
    title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.title",
        isValid: true,
        type: "title",
        titleId: "sell.title"
    },
    city_town: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.city",
        isValid: true,
        type: "primary",
        titleId: "sell.city.town"
    },
    prop_facing_id: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: null,
        isValid: true,
        type: "dropdown",
        titleId: "sell.facing",
        options: ["sell.east", "sell.west", "sell.north", "sell.south", "sell.south.east", "sell.south.west", "sell.north.east", "sell.north.west"]
    },
    age_of_property: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.years",
        titleId: "sell.age",
        width: "19%"

    },
    plinth_area: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sft",
        titleId: "sell.plinth.area",
        width: "19%"
    },
    plot_area: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sqyrds",
        titleId: "sell.plot.area",
        width: "19%"
    },
    offer_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.offer.price",
        width: "19%"
    },
    market_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.market.value",
        width: "19%"
    },
    distance_from_orr: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.orr",
        width: "19%"
    },
    distance_from_hyd: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.hyd",
        width: "19%"
    }
}

export const ResidentialPlot = {
    village_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.village",
        isValid: true,
        type: "primary",
        titleId: "sell.village"
    },
    mandal_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.mandal",
        isValid: true,
        type: "primary",
        titleId: "sell.mandal"
    },
    owner_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.owner"
    },
    contact_num1: {
        value: "",
        regEx: "[0-9]",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.contact"
    },
    title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.title",
        isValid: true,
        type: "title",
        titleId: "sell.title"
    },
    extent_in_acre: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.acrs",
        titleId: "sell.extent.in",
        width: "19%"
    },
    extent_in_gunta: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.guntas",
        titleId: null,
        width: "22%"
    },
    offer_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.offer.price",
        width: "19%"
    },
    market_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.market.value",
        width: "19%"
    },
    distance_from_orr: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.orr",
        width: "19%"
    },
    distance_from_hyd: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.hyd",
        width: "19%"
    },
    approachroad_id: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: null,
        isValid: true,
        type: "dropdown",
        titleId: "sell.approach.road",
        options: [{ id: 1, value: "sell.black.top" }, { id: 2, value: "sell.metal.road" },
        { id: 2, value: "sell.kacha.road" }, { id: 2, value: "sell.no.road" }]

    }
}

export const ResidentialFlat = {
    owner_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.owner"
    },
    contact_num1: {
        value: "",
        regEx: "[0-9]",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.contact"
    },
    title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.title",
        isValid: true,
        type: "title",
        titleId: "sell.title"
    },
    property_title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.project"
    },
    prop_facing_id: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: null,
        isValid: true,
        type: "dropdown",
        titleId: "sell.facing",
        options: ["sell.east", "sell.west", "sell.north", "sell.south", "sell.south.east", "sell.south.west", "sell.north.east", "sell.north.west"]
    },
    road_size_feet: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.feet",
        titleId: "sell.road.size",
        width: "19%"
    },
    no_of_bathroom: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.bathrooms",
    },
    no_of_bedroom: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.bedrooms",
    },
    age_of_property: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.years",
        titleId: "sell.age.apartment",
        width: "19%"
    },
    rental_value: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.rental.value",
        width: "19%"
    },
    venture_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.venture"
    },
    pin_code: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.pincode"
    },
    plinth_area: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sft",
        titleId: "sell.plinth.area",
        width: "19%"
    },
    car_parking: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.cars",
        titleId: "sell.car.parking",
        width: "33%"
    },
    offer_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.offer.price",
        width: "19%"
    },
    market_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.market.value",
        width: "19%"
    },
    distance_from_orr: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.orr",
        width: "19%"
    },
    distance_from_hyd: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.hyd",
        width: "19%"
    }
}

export const ResidentialVilla = {
    owner_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.owner"
    },
    contact_num1: {
        value: "",
        regEx: "[0-9]",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.contact"
    },
    title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.title",
        isValid: true,
        type: "title",
        titleId: "sell.title"
    },
    city_town: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.city",
        isValid: true,
        type: "primary",
        titleId: "sell.city.town"
    },
    property_title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.project"
    },
    prop_facing_id: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: null,
        isValid: true,
        type: "dropdown",
        titleId: "sell.facing",
        options: ["sell.east", "sell.west", "sell.north", "sell.south", "sell.south.east", "sell.south.west", "sell.north.east", "sell.north.west"]
    },
    age_of_property: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.years",
        titleId: "sell.age",
        width: "19%"
    },
    plinth_area: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sft",
        titleId: "sell.plinth.area",
        width: "19%"
    },
    plot_area: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sqyrds",
        titleId: "sell.plot.area",
        width: "19%"
    },
    no_of_floors: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.floors"
    },
    rental_value: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.years",
        titleId: "sell.rental.value",
        width: "19%"
    },
    no_of_bathroom: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.bathrooms",
    },
    no_of_bedroom: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.bedrooms",
    },
    suitable_for_id: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: null,
        isValid: true,
        type: "dropdown",
        titleId: "sell.suitable.for",
        options: ["sell.schools", "sell.Office"]
    },
    offer_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.offer.price",
        width: "19%"
    },
    price_sft: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.price.sft",
        width: "19%"
    },
    market_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.market.value",
        width: "19%"
    },
    distance_from_orr: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.orr",
        width: "19%"
    },
    distance_from_hyd: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.kms",
        titleId: "sell.distance.hyd",
        width: "19%"
    }
}

export const CommercialSpace = {
    owner_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.owner"
    },
    contact_num1: {
        value: "",
        regEx: "[0-9]",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.contact"
    },
    title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.title",
        isValid: true,
        type: "title",
        titleId: "sell.title"
    },
    city_town: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.city",
        isValid: true,
        type: "primary",
        titleId: "sell.city.town"
    },
    extent_in_sqryrds: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sqyrds",
        titleId: "sell.extent.in",
        width: "19%"
    },
    offer_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.offer.price",
        width: "19%"
    },
    market_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.market.value",
        width: "19%"
    }
}

export const CommercialBuilding = {
    owner_name: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.name",
        isValid: true,
        type: "primary",
        titleId: "sell.name.owner"
    },
    contact_num1: {
        value: "",
        regEx: "[0-9]",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "primary",
        titleId: "sell.contact"
    },
    title: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.title",
        isValid: true,
        type: "title",
        titleId: "sell.title"
    },
    city_town: {
        value: "",
        regEx: "NOT_NULL",
        errorMessage: "sell.validation.city",
        isValid: true,
        type: "primary",
        titleId: "sell.city.town"
    },
    age_of_property: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.years",
        titleId: "sell.age",
        width: "19%"
    },
    plinth_area: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sft",
        titleId: "sell.plinth.area",
        width: "19%"
    },
    plot_area: {
        value: "",
        regEx: "^[0-9]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.sqyrds",
        titleId: "sell.plot.area",
        width: "19%"
    },
    offer_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.offer.price",
        width: "19%"
    },
    market_price: {
        value: "",
        regEx: "^[0-9,]*$",
        errorMessage: "sell.validation.number",
        isValid: true,
        type: "addon",
        addOn: "sell.rupee",
        titleId: "sell.market.value",
        width: "19%"
    }
}

export const Media = [
    // {
    //     title: "Image",
    //     imgUrl: null,
    //     uploadFailed: false,
    //     loading: false
    // },
    // {
    //     title: "Kitchen",
    //     imgUrl: null,
    //     uploadFailed: false,
    //     loading: false
    // },
    // {
    //     title: "Master Bedroom",
    //     imgUrl: null,
    //     uploadFailed: false,
    //     loading: false
    // },
    // {
    //     title: "Guest Bedroom",
    //     imgUrl: null,
    //     uploadFailed: false,
    //     loading: false
    // },
    // {
    //     title: "Childrens Bedroom",
    //     imgUrl: null,
    //     uploadFailed: false,
    //     loading: false
    // },
    // {
    //     title: "Master Bathroom",
    //     imgUrl: null,
    //     uploadFailed: false,
    //     loading: false
    // },
    // {
    //     title: "Location Pic",
    //     imgUrl: null,
    //     uploadFailed: false,
    //     loading: false
    // },
];
