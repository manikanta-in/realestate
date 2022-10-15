import {
    AgricultureLand, Media, AgricultureFormHouse, ResidentialPlot, ResidentialFlat,
    ResidentialVilla, CommercialSpace, CommercialBuilding
} from "./sell-property-constants";

const isBlank = str => (str || '').trim().length === 0;

const initState = {
    sellProperties: [],
    agricultureLand: AgricultureLand,
    media: Media,
    agricultureFormHouse: AgricultureFormHouse,
    residentialPlot: ResidentialPlot,
    residentialFlat: ResidentialFlat,
    residentialVilla: ResidentialVilla,
    commercialSpace: CommercialSpace,
    commercialBuilding: CommercialBuilding,
    newFileLoader: false,
    propertyTypes: []
}

const sellPropertyReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS": return {
            ...state,
            productList: action.data
        }
        case "RESET_FORM": {
            let newState = _.cloneDeep(state);
            newState[action.data] = initState[action.data];
            return {
                ...state,
                ...newState
            }
        }
        case "SELL_SET_FIELD_VALUE": {
            let newState = _.cloneDeep(state);
            const { objName, objField, value } = action.data;
            let regExp = newState[objName][objField].regEx || null;
            if (regExp !== null) {
                if (regExp == "NOT_NULL" && !isBlank(value)) {
                    newState[objName][objField].isValid = true;
                }
                else if (!value.match(regExp)) {
                    newState[objName][objField].isValid = false;
                } else {
                    newState[objName][objField].isValid = true;
                }
            }
            newState[objName][objField].value = value;
            return {
                ...state,
                ...newState
            }
        }
        case "SELL_ERROR_FIELDS_UPDATE": {
            let newState = _.cloneDeep(state);
            const { data, formObj } = action.data;
            for (let key in data) {
                if (newState[formObj] !== undefined && newState[formObj][key] !== undefined) {
                    newState[formObj][key].isValid = false;
                }
            }
            return {
                ...state,
                ...newState
            }
        }
        case "SELL_MEDIA": {
            let newState = _.cloneDeep(state);
            if (action.data.index == undefined && action.data.uploadFailed == false) {
                newState.media.push({ title: action.data.fileName, imgUrl: action.data.imgUrl, uploadFailed: false, loading: false, newFile: true })
            } else {
                newState.media[action.data.index].loading = false;
                newState.media[action.data.index].imgUrl = action.data.imgUrl;
                newState.media[action.data.index].uploadFailed = action.data.uploadFailed;

            }
            return {
                ...state,
                ...newState
            }
        }
        case "SELL_MEDIA_DELETE": {
            let newState = _.cloneDeep(state);
            if (newState.media[action.data.index].newFile !== undefined) {
                newState.media.splice(action.data.index, 1);
            } else {
                newState.media[action.data.index].imgUrl = null;
            }
            return {
                ...state,
                ...newState
            }
        }
        case "SELL_MEDIA_LOADER": {
            let newState = _.cloneDeep(state);
            newState.media[action.data.index].loading = action.data.value;

            return {
                ...state,
                ...newState
            }
        }

        case "SET_NEW_FILE_LOADER": return {
            ...state,
            newFileLoader: action.data
        }


        case "SET_PROPERTY_HIGHLIGHTS": {
            let newState = _.cloneDeep(state);
            newState.propertyTypes[action.data.searchTab].location_property_highlights[action.data.index] = action.data.info;

            return {
                ...state,
                ...newState
            }
        }

        case "SELL_SET_GOOGLE_ADDRESS": {
            let newState = _.cloneDeep(state);
            const { objName, objField, value } = action.data;
            newState[objName][objField].value = value;
            return {
                ...state,
                ...newState
            }
        }

        default:
            return state;

    }
}

export default sellPropertyReducer;