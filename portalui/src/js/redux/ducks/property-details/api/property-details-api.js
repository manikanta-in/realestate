import axios from "axios";
import { actions as propertyActions } from '../property-details-actions';

const { setPropertyDetails, setPropertyDetailsLoader, setPropertyDetailsMsg, setPropertyDetailsMsgLoader } = propertyActions;



const getPropertyDetails = (url) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        dispatch(setPropertyDetailsLoader(true));
        try {
            let res = await axios.get(url, { headers });
            res = res.data;
            const data = {
                properties: [
                  {
                    imageUrl: "https://picsum.photos/200/300?random=1",
                    title: "Video"
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=2",
                    title: "Kitchen"
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=3",
                    title: "Master Bedroom"
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=4",
                    title: "Guest Bedroom"
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=5",
                    title: "Childrens Bedroom"
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=6",
                    title: "Master Bathroom"
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=7",
                    title: "Location Pic"
                  }
                ],
                nearBy: [{
                  title: "Near to Schools",
                  iconName: "IconSchool"
                },
                {
                  title: "Near to University",
                  iconName: "IconUniversity"
                }, {
                  title: "Near to Shopping Malls",
                  iconName: "ShoppingMall"
                }, {
                  title: "Near to Metro Station",
                  iconName: "Metro"
                }, {
                  title: "Near to Bus Stand",
                  iconName: "Busstand"
                }, {
                  title: "Near to Hindhu Temples",
                  iconName: "Temple"
                }, {
                  title: "Near to Church",
                  iconName: "Church"
                }],
                favCount: 240,
                position: { lat: 17.385044, lng: 78.486671 },
                nearByProperties: [
                  {
                    imageUrl: "https://picsum.photos/200/300?random=1",
                    propertyType: "agriculturalLand",
                    details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
                    location: "Kondapur",
                    viewCount: 2120,
                    favCount: 451,
                    commentCount: 62,
                    isCertified: true,
                    propertyid: 123456,
                    position: { lat: 17.385662418205893, lng: 78.48237088198344 }
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=2",
                    propertyType: "flat",
                    details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
                    location: "Kondapur",
                    viewCount: 2120,
                    favCount: 451,
                    commentCount: 62,
                    isCertified: false,
                    propertyid: 123458,
                    position: { lat: 17.381120478954095, lng: 78.479529885671 }
                  }, {
                    imageUrl: "https://picsum.photos/200/300?random=3",
                    propertyType: "plot",
                    details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
                    location: "Patancheru",
                    viewCount: 2120,
                    favCount: 451,
                    commentCount: 62,
                    isCertified: true,
                    propertyid: 123453,
                    position: { lat: 17.389929855175264, lng: 78.49145176777652 }
                  },
                  {
                    imageUrl: "https://picsum.photos/200/300?random=4",
                    propertyType: "building",
                    details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
                    location: "Kondapur",
                    viewCount: 2120,
                    favCount: 451,
                    commentCount: 62,
                    isCertified: true,
                    propertyid: 123452,
                    position: { lat: 17.39947593875286, lng: 78.4810147555339 }
                  }
                ],
                nearByPositions: [{ lat: 17.385662418205893, lng: 78.48237088198344 },
                { lat: 17.381120478954095, lng: 78.479529885671 },
                { lat: 17.389929855175264, lng: 78.49145176777652 },
                { lat: 17.39947593875286, lng: 78.4810147555339 }]
              };
            if(res.results.length) { 
                dispatch(setPropertyDetails(data));
            }
        } catch (error) {
            dispatch(setPropertyDetails(null));
        } finally {
            dispatch(setPropertyDetailsLoader(false));
        }
    }
}

const getPropertyDetailsMsg = (url) => {
    document.body.style.overflow = 'hidden';
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return async dispatch => {
        dispatch(setPropertyDetailsMsgLoader(true));
        try {
            let res = await axios.get(url, { headers });
            res = res.data;
            dispatch(setPropertyDetailsMsg(res));
        } catch (error) {
            dispatch(setPropertyDetailsMsg(null));
        } finally {
            dispatch(setPropertyDetailsMsgLoader(false));
        }
    }
}


export const apiActions = {
    getPropertyDetails,
    getPropertyDetailsMsg
};