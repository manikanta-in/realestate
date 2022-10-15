
import React, { useEffect, useMemo, useState } from 'react';
import FormLand from "../../assets/images/icon-formLand.svg";
import HouseIcon from "../../assets/images/icon-house.svg";
import CommercialIcon from "../../assets/images/icon-commercial.svg";
import AgriIcon from "../../assets/images/icon-agri.svg";
import FormhouseIcon from "../../assets/images/icon-formhouse.svg";
import PlotIcon from "../../assets/images/plot.svg";
import VillaIcon from "../../assets/images/icon-villa.svg";
import SpaceIcon from "../../assets/images/icon-space.svg";
import BuildingsIcon from "../../assets/images/icon-buildings.svg";
import FlatsIcon from "../../assets/images/icon-flats.svg";
import IndehouseIcon from "../../assets/images/icon-indehouse.svg";
import QRCode from "../../assets/images/qrcode.png";
import LocationImg from "../../assets/images/Location.png";
import { useNavigate } from "react-router-dom";
import SellAgricultureLandsComponent from "./SellAgricultureLandsComponent";
import SellPostData from "./SellPostData";
import SellHighlightsComponent from "./SellHighlightsComponent";
import SellResidentialOpenVillasComponent from './SellResidentialOpenVillasComponent';
import SellAgricultureFarmHouseComponent from './SellAgricultureFarmHouseComponent';
import SellResidentialOpenPlotsComponent from './SellResidentialOpenPlotsComponent';
import SellResidentialOpenFlatsComponent from './SellResidentialOpenFlatsComponent';
import SellCommercialBuildings from './SellCommercialBuildings';
import SellCommercialOpenSpaces from './SellCommercialOpenSpaces';
import SellVerifyContactDetailsComponent from './SellVerifyContactDetailsComponent';
import { Map, Marker, InfoWindow, GoogleApiWrapper, Polygon } from 'google-maps-react';
import { Alert } from '../custom-components/CustomComponents';
import { TermsAndCondiationsComponent } from "../custom-components/CustomComponents";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'

import { ThreeDots } from 'react-loader-spinner';
import { injectIntl } from 'react-intl';
import uuid from 'react-native-uuid'

const isBlank = str => (str || '').trim().length === 0;
const id = uuid.v1();

const SellPropertyComponent = (props) => {
  const { formatMessage } = props.intl;
  const navigate = useNavigate();
  useEffect(() => {
    props.setCurrentPage("sell");
   // props.getPropertyTypes("/api/property/types/search/");
    props.getPropertyTypes("/api/propertyTypes");
  }, []);

  const [searchTab, setSearchTab] = useState(0);
  const [subSearchTab, setSubSearchTab] = useState(0);
  const [showMarkPointModal, setMarkPointModal] = useState(false);
  const [address, setAddress] = useState("Hyderabad");
  const [mapCenter, setMapCenter] = useState({ lat: 17.385044, lng: 78.486671 });
  const [marker, setMarker] = useState(null);
  const [showMarker, setShowMarker] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [checked, setChecked] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [map, setMap] = useState(null);
  const [metro, setMetro] = useState(null);
  const [airport, setAirport] = useState(null);
  const [hitechDistance, setHitechDistance] = useState(null);
  const [orrDistance, setOrrDistance] = useState(null);


  const handleTerms = () => setChecked(!checked);

  const getFormObjName = () => {
    let formObj = "agricultureLand";
    switch (searchTab + "" + subSearchTab) {
      case "01": formObj = "agricultureFormHouse"; break;
      case "10": formObj = "residentialPlot"; break;
      case "11": formObj = "residentialFlat"; break;
      case "12": formObj = "residentialVilla"; break;
      case "20": formObj = "commercialSpace"; break;
      case "21": formObj = "commercialBuilding"; break;
    }
    return formObj;
  }

  const getSubTypeId = () => {
    let subType = 1;
    switch (searchTab + "" + subSearchTab) {
      case "01": subType = 2; break;
      case "10": subType = 3; break;
      case "11": subType = 4; break;
      case "12": subType = 5; break;
      case "20": subType = 6; break;
      case "21": subType = 7; break;
    }
    return subType;
  }


  useEffect(() => {
    let isFormValid = true;
    let formObj = getFormObjName();
    for (let key in props[formObj]) {
      let regExp = props[formObj][key].regEx || null;
      if (regExp !== null) {
        if (regExp == "NOT_NULL") {
          if (isBlank(props[formObj][key].value)) {
            isFormValid = false;
          }
        }
        else if (!props[formObj][key].value.match(regExp)) {
          isFormValid = false;
        }
      }
    }
    if (!checked) isFormValid = false;
    setFormValid(isFormValid);
  }, [props, searchTab, subSearchTab, checked]);


  const onMarkerClick = (props, marker) => {
    setMarker(marker);
    setShowMarker(true);
  }

  const getReverseGeocodingData = (lat, lng) => {
    var latlng = new google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        setAddress(results[0].formatted_address);
        updateSellAddress(results[0]);
        handleHighlights({ lat, lng }, searchTab);
      }
    });
  }

  const handlePlaceChange = address => {
    setAddress(address);
  };

  const handleMap = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setMapCenter({ lat, lng });
    getReverseGeocodingData(lat, lng);
    setShowMarker(false);
  }

  const setLat = (e) => {
    setMapCenter({ lat: e.target.value * 1, lng: mapCenter.lng });
    getReverseGeocodingData(e.target.value * 1, mapCenter.lng);
  }
  const setLng = (e) => {
    setMapCenter({ lat: mapCenter.lat, lng: e.target.value * 1 });
    getReverseGeocodingData(mapCenter.lat, e.target.value * 1);
  }

  const updateSellAddress = (address) => {

    const formObj = getFormObjName();
    for (let key in props[formObj]) {
      if (props[formObj][key]["googleMapAddressKey"] !== undefined) {
        address.address_components.forEach(v => {
          v.types.forEach(t => {
            if (t.includes(props[formObj][key]["googleMapAddressKey"])) {
              let payload = {};
              payload.objName = formObj;
              payload.objField = key;
              payload.value = v.long_name;
              props.setGoogleAddress(payload);
            }
          });
        });
      }
    }
  }

  const handleHighlights = (latLng, searchTab) => {
    const service = new google.maps.places.PlacesService(map.map);
    
    props.propertyTypes[searchTab].location_property_highlights.forEach((v, i) => {
      let request = {};
      if (v.type == "airport") {
        request.location = { ...latLng };
        request.keyword = v.description;
        request.radius = 50000;
        request.type = v.type;
      }
      else if(v.type == "sublocality"){
          request.location = { ...latLng };
          request.keyword = v.description;
          request.radius = 50000;
          request.type = v.type;
      }
      else {
        request.location = { ...latLng };
        request.keyword = v.description;
        request.rankBy = google.maps.places.RankBy.DISTANCE;
        request.type = v.type;
      }

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          let d = google.maps.geometry.spherical.computeDistanceBetween(latLng, results[0].geometry.location);
          d = d / 1000;
          d = d.toFixed(2);
          let row = v;
          row.distance = d;
          row.name = results[0].name;
          let payload = {};
          payload.info = row;
          payload.searchTab = searchTab;
          payload.index = i;
          props.setPropertyHighlights(payload);
        }
      });
    });
  }

  const handlePlaceSelect = address => {
    setAddress(address);
    geocodeByAddress(address)
      .then(results => {
        updateSellAddress(results[0]);
        return getLatLng(results[0])
      })
      .then(latLng => {
        setMapCenter({ ...latLng });
        handleHighlights(latLng, searchTab);
      })
      .catch(error => console.error('Error', error));
  };

  const postProperty = () => {
    
    setShowLoader(true);
    document.body.style.overflow = 'hidden';
    setAlertMsg({});
    let req = {};
    const formObj = getFormObjName();
    for (let key in props[formObj]) {
      req[key] = props[formObj][key].value;
    }
    req.latitute = mapCenter.lat;
    req.longtitue = mapCenter.lng;
    req.location_name = address;
    req.prop_sub_type_id = getSubTypeId();
    props.setPostProperty(`/api/property/list/?id=${id}`, req, formObj)
      .then((res) => {
        if (res.status == "200" || res.status == "201") {
          setChecked(false);
          setAlertMsg({ show: true, type: "success", message: "Property posted successfully." });

        } else if (res.status == "400") {
          setAlertMsg({ show: true, type: "error", message: "One or more fields have an error. Please check and try again." });
        } else {
          setAlertMsg({ show: true, type: "error", message: "Server error. Please try again." });
        }
      })
      .catch(error => {
        console.log('Error', error);
      })
      .finally(() => {
        window.scrollTo(0, 0);
        setShowLoader(false);
        document.body.style.overflow = 'auto';
      });
  }

  const handleMarkPointModal = (value) => {
    if (value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setMarkPointModal(value)
  }

  const handleSearchTab = (currentIndex) => {
    setSearchTab(currentIndex);
    setSubSearchTab(0);
    setAlertMsg({});
    handleHighlights(mapCenter, currentIndex);
  };
  const [showTancCModal, setshowTancCModal] = useState(false);
  return (
    <div>
      {showLoader && (<div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: "1050",
          outline: 0,
          backgroundColor: "rgba(0, 0, 0, .5)"
        }}
      > <ThreeDots color="#004274" width="150px" />
      </div>)}
      {!props.hasToken && (<SellVerifyContactDetailsComponent {...props} />)}
      {props.hasToken && (<div>
        <section className="bg-img-sell searchBanner sell">
          <div className="container-fluid">
            <h2 className="text-center text-white">Post your Property</h2>
            <h3 className="text-center text-white">We provide professional and reliable advice to the buyers of the property.</h3>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="search-container">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className={searchTab == 0 ? "active" : ""} style={{ marginRight: "3px" }}>
                      <a onClick={() => handleSearchTab(0)} role="button">
                        <img src={FormLand} />
                        <h4 className="tab-title">Agriculture</h4>
                      </a></li>
                    <li onClick={() => handleSearchTab(1)} role="button" className={searchTab == 1 ? "active" : ""} style={{ marginRight: "3px" }}>
                      <a role="tab" >
                        <img src={HouseIcon} />
                        <h4 className="tab-title">Residential</h4>
                      </a></li>
                    <li onClick={() => handleSearchTab(2)} role="button" className={searchTab == 2 ? "active" : ""}>
                      <a role="tab" >
                        <img src={CommercialIcon} />
                        <h4 className="tab-title">Commercial </h4>
                      </a></li>
                  </ul>

                  <div className="tab-content subSearchActions">

                    {searchTab == 0 && (<div role="tabpanel" className="tab-pane active" id="AgricultureLand">
                      <ul className="nav nav-tabs" role="tablist">
                        <li onClick={() => { setSubSearchTab(0); setAlertMsg({}); }} role="button" className={subSearchTab == 0 ? "active" : ""}><a role="tab">
                          <img src={AgriIcon} /> <span className="tab-title">Agriculture Lands</span></a></li>
                        <li onClick={() => { setSubSearchTab(1); setAlertMsg({}); }} role="button" className={subSearchTab == 1 ? "active" : ""}><a role="tab">
                          <img src={FormhouseIcon} /> <span className="tab-title">{formatMessage({ id: "buy.formHouse" })}</span></a></li>
                      </ul>
                    </div>)}

                    {searchTab == 1 && (<div role="tabpanel" className="tab-pane active" id="residentialHouses">
                      <ul className="nav nav-tabs" role="tablist">
                        <li onClick={() => { setSubSearchTab(0); setAlertMsg({}); }} role="button" className={subSearchTab == 0 ? "active" : ""}><a role="tab">
                          <img src={PlotIcon} /> <span className="tab-title">Plots</span></a></li>
                        <li onClick={() => { setSubSearchTab(1); setAlertMsg({}); }} role="button" className={subSearchTab == 1 ? "active" : ""}><a role="tab">
                          <img src={FlatsIcon} /> <span className="tab-title">Flats</span></a></li>
                        <li onClick={() => { setSubSearchTab(2); setAlertMsg({}); }} role="button" className={subSearchTab == 2 ? "active" : ""}><a role="tab">
                          <img src={VillaIcon} /> <span className="tab-title">Villas</span></a></li>
                      </ul>
                    </div>)}

                    {searchTab == 2 && (<div role="tabpanel" className="tab-pane active" id="commercial">
                      <ul className="nav nav-tabs" role="tablist">
                        <li onClick={() => { setSubSearchTab(0); setAlertMsg({}); }} role="button" className={subSearchTab == 0 ? "active" : ""}><a role="tab" >
                          <img src={SpaceIcon} /> <span className="tab-title">Open Spaces</span></a></li>
                        <li onClick={() => { setSubSearchTab(1); setAlertMsg({}); }} role="button" className={subSearchTab == 1 ? "active" : ""}><a role="tab" >
                          <img src={BuildingsIcon} /> <span className="tab-title">Buildings</span></a></li>
                      </ul>
                    </div>)}

                    <div role="tabpanel" className="tab-pane" id="openPlots">
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation"><a role="tab">
                          <img src={FlatsIcon} /> <span className="tab-title">Gated Community</span></a></li>
                        <li role="presentation"><a role="tab">
                          <img src={IndehouseIcon} /> <span className="tab-title">Individual</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-color-0  no-padding">
          <div className="container-fluid">
            <ul className="breadcrumb no-margin-bottom ">
              <li><a role="button" onClick={() => { navigate("/") }}><i className="zmdi zmdi-arrow-left hidden"></i> Home</a></li>
              <li>Sell your Property</li>
            </ul>
          </div>
        </section>

        <div className="tab-content">

          <div role="tabpanel" className="tab-pane active" id="agriculture">
            <section className="bg-color-0 padding-sm">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    {alertMsg.show && (<div style={{ padding: "15px 0 15px 0" }}>
                      <Alert style={{ fontSize: "14px" }} severity={alertMsg.type}>{alertMsg.message}</Alert>
                    </div>)}

                    {searchTab == 0 && subSearchTab == 0 && (<h3 className="no-margin-top ">Agriculture / Agriculture Land</h3>)}
                    {searchTab == 0 && subSearchTab == 1 && (<h3 className="no-margin-top ">Agriculture / Farm House</h3>)}

                    {searchTab == 1 && subSearchTab == 0 && (<h3 className="no-margin-top ">Residential / Plot</h3>)}
                    {searchTab == 1 && subSearchTab == 1 && (<h3 className="no-margin-top ">Residential / Flat</h3>)}
                    {searchTab == 1 && subSearchTab == 2 && (<h3 className="no-margin-top ">Residential / Villa</h3>)}

                    {searchTab == 2 && subSearchTab == 0 && (<h3 className="no-margin-top ">Commercial / Open Space</h3>)}
                    {searchTab == 2 && subSearchTab == 1 && (<h3 className="no-margin-top ">Commercial / Building</h3>)}
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">Property Details</h3>
                      
                        {/* <div className="qrCode"><img src={QRCode} width="142" height="142" /></div> */}
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="control-label">Location</label>
                                <PlacesAutocomplete
                                  value={address}
                                  onChange={handlePlaceChange}
                                  onSelect={handlePlaceSelect}
                                >
                                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div id="autoComplete">
                                      <input
                                        {...getInputProps({
                                          placeholder: 'Search Places ...',
                                          className: 'location-search-input form-control',
                                        })}
                                      />
                                      <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                          const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                          // inline style for demonstration purpose
                                          const style = suggestion.active
                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                          return (
                                            <div
                                              {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                              })}
                                            >
                                              <div style={{ display: "flex" }}>
                                                <img src={LocationImg} width={20} height={15} style={{ marginTop: "2px" }} />
                                                <span style={{ width: "80%" }}>{suggestion.description}</span>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </PlacesAutocomplete>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">Latitude</label>
                                <input type="number" onChange={setLat} value={mapCenter.lat} className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">Longitude</label>
                                <input type="number" onChange={setLng} value={mapCenter.lng} className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p> <a onClick={() => handleMarkPointModal(true)} className="btn btn-primary btn-block">Mark Point to Map <i className="zmdi zmdi-pin-drop"></i><i className="zmdi zmdi-window-maximize" style={{"float":"right"}}></i></a></p>
                            </div>

                          </div>
                          <div style={{ display: showMarkPointModal ? "block" : "none", top: "10vh" }} className={showMarkPointModal ? "modal fade mapFullview in" : "modal fade mapFullview"} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                            <div className="modal-dialog modal-lg" role="document">
                              <div className="modal-content">

                                <div className="modal-header">
                                  <button onClick={() => handleMarkPointModal(false)} type="button" className="close"><i className="zmdi zmdi-window-minimize"></i></button>
                                  <h4 className="modal-title" id="gridSystemModalLabel">Mark Point to Map </h4>
                                </div>   <div className="modal-body">
                                  <div id="mapBoxProperty">
                                    <Map ref={(map) => setMap(map)} style={{ border: 0, width: "100%", height: "80vh" }}
                                      google={props.google}
                                      onClick={handleMap}
                                      initialCenter={mapCenter}
                                      center={mapCenter}
                                    >
                                      <Marker
                                        position={mapCenter} onClick={onMarkerClick} />
                                    </Map>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="mapBox">
                            <Map ref={(map) => setMap(map)} style={{ border: 0, width: "100%", height: "300px" }}
                              google={props.google}
                              onClick={handleMap}
                              initialCenter={mapCenter}
                              center={mapCenter}
                            >
                              <Marker
                                position={mapCenter} onClick={onMarkerClick} />
                            </Map>
                          </div>

                        </div>
                        {searchTab == 0 && subSearchTab == 0 && (<SellAgricultureLandsComponent {...props} />)}
                        {searchTab == 0 && subSearchTab == 1 && (<SellAgricultureFarmHouseComponent {...props} />)}

                        {searchTab == 1 && subSearchTab == 0 && (<SellResidentialOpenPlotsComponent {...props} />)}
                        {searchTab == 1 && subSearchTab == 1 && (<SellResidentialOpenFlatsComponent {...props} />)}
                        {searchTab == 1 && subSearchTab == 2 && (<SellResidentialOpenVillasComponent {...props} />)}

                        {searchTab == 2 && subSearchTab == 0 && (<SellCommercialOpenSpaces {...props} />)}
                        {searchTab == 2 && subSearchTab == 1 && (<SellCommercialBuildings {...props} />)}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <SellPostData {...props} id={id} />
        <SellHighlightsComponent subSearchTab={subSearchTab} searchTab={searchTab} {...props} />

        <section className="bg-color-0 no-padding" style={{"marginTop":"25px"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
              <div className="checkbox checkbox-primary" style={{"marginTop":"10px"}}>
              
                <input checked={checked} type="checkbox" name="check" id="terms" onChange={handleTerms} />
                <label className="text-regular" >
                  <h3 className="panel-title"  style={{ "marginTop": "-2px"}}>Terms and Conditions</h3>
                </label>
              </div>
                <div>
                  
                  <label className="text-regular" >
                    <span onClick={() => setshowTancCModal(true)}>
                      <div className="tnc" style={{ "marginTop": "-5px","marginLeft": "25px" }}>
                          <p>1.Their user credentials should always be kept confidential.</p>
                          <p>2.They are responsible for keeping their usernames and passwords safe from others.</p>
                          <p>3.They need to contact you immediately if their credentials get stolen, or they believe someone has gained unauthorized access to their accounts.</p>
                          
                      </div>
                      <p class="text-center text-bold">Read More</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-sm">
          <div className="container-fluid">
            <hr />
            <div className="row">
              <div className="col-md-12 text-center">
                <button disabled={!formValid} className="btn btn-primary btn-lg" onClick={postProperty}>Post Property</button>
              </div>
            </div>
          </div>
        </section>
        <TermsAndCondiationsComponent show={showTancCModal} onHide={setshowTancCModal} {...props} />

      </div>)}
    </div>

  )
};


export default GoogleApiWrapper(
  (props) => ({
    apiKey: ('AIzaSyA_w-BrJY32AkYKr3Fc3mPylDtvcQFWIOk'),
    libraries: ['places', 'geometry'],
    language: props.language,
  }
  ))(injectIntl(SellPropertyComponent))