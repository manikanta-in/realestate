import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { injectIntl } from 'react-intl';
import $ from 'jquery';
window.jQuery = $;
require('../../assets/plugins/pgwslider/pgwslider.min.js');
require('../../assets/plugins/slick/slick.js');


import VillaOne from "../../assets/images/gallery/villa-1.jpg";
import KitchenOne from "../../assets/images/kitchen-1.jpg";
import MasterBedroom from "../../assets/images/masterBedroom.jpg";
import GuestBedroom from "../../assets/images/guestBedroom.jpg";
import KidsRoom from "../../assets/images/kidsBedroom.jpg";
import HouseLocation from "../../assets/images/houseLocation.jpg";
import MapIcon from "../../assets/images/map.jpg";

import MetroImg from "../../assets/images/metro.svg";
import PlaneImg from "../../assets/images/plane.svg";
import BuildingsImg from "../../assets/images/buildings.svg";
import RoadImg from "../../assets/images/road.svg";

import IconSchool from "../../assets/images/icon-school.svg";
import IconUniversity from "../../assets/images/icon-university.svg";
import ShoppingMall from "../../assets/images/icon-shoppingmall.svg";
import Metro from "../../assets/images/icon-metro.svg";
import Busstand from "../../assets/images/icon-busstand.svg";
import Temple from "../../assets/images/icon-temple.svg";
import Church from "../../assets/images/icon-church.svg";
import { ThreeDots } from 'react-loader-spinner';
import { MessageComponent } from "../custom-components/CustomComponents";
import { LoginComponent } from "../custom-components/CustomComponents";
import { Map, Marker, Polygon, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { GoolgeMapPropertyCard, InfoWindowComponent } from '../custom-components/CustomComponents';

const imgList = [];

const PropertyDetailsComponent = (props) => {
  const navigate = useNavigate();
  const { propertyid } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [marker, setMarker] = useState(null);
  const [showMarker, setShowMarker] = useState(false);
  const [currentProperty, setSCurrentProperty] = useState({});
  const sp = new URLSearchParams(location.search);
  const proptype  =  sp.get("proptype");
  const propsubtype  =  sp.get("propsubtype");


  const property1 = {
    imageUrl: "https://picsum.photos/200/300?random=2",
    propertyType: "flat",
    details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
    location: "Kondapur",
    viewCount: 2120,
    favCount: 451,
    commentCount: 62,
    expiryDate: "14th April",
    categories: ["01-01-2022", "15-01-2022", "29-01-2022", "07-02-2022", "24-02-2022", "28-02-2022", "09-03-2022", "11-03-2022", "13-03-2022"],
    series: [{
      name: 'Views',
      data: [5, 10, 12, 14, 16, 20, 25, 35, 78]
    },
    {
      name: 'Fav',
      data: [6, 8, 10, 11, 17, 29, 45, 60, 98]
    }]
  };

  // useEffect(() => {
  //   props.getPropertyDetails(`/api/property/detail/?id=${propertyid}&proptype=${proptype}&propsubtype=${propsubtype}`);
  // }, [propertyid]);

  useEffect(() => {
    imgList["IconSchool"] = IconSchool;
    imgList["IconUniversity"] = IconUniversity;
    imgList["ShoppingMall"] = Metro;
    imgList["Metro"] = Metro;
    imgList["Busstand"] = Busstand;
    imgList["Temple"] = Temple;
    imgList["Church"] = Church;

    props.setCurrentPage("buy");
    props.getPropertyDetails(`/api/property/detail/?id=${propertyid}&proptype=${proptype}&propsubtype=${propsubtype}`);
  }, [propertyid]);



  useEffect(() => {
    if (!props.propertyDetailsLoader && props.propertyDetails != null && props.propertyDetails.length > 0) {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        focusOnSelect: true
      });
    }

  }, [props.propertyDetailsLoader]);

  const fetchMessages = () => {
    props.getPropertyDetailsMsg("/api/getPropertyDetailsMessages");
    setShowModal(true);
  }

  const addFav = () => {
    if (!props.hasToken) {
      setShowLoginModal(true);
    } else {
      let favCount = props.favCount;
      let hasFav = props.hasFav;
      if (hasFav) {
        favCount = favCount - 1;
        hasFav = false;
      } else {
        favCount = favCount + 1;
        hasFav = true;
      }
      props.setFavCount(favCount);
      props.setFavFlag(hasFav);
    }

  }

  const onMarkerClick = (props, marker, property) => {
    setSCurrentProperty(property);
    setMarker(marker);
    setShowMarker(true);
  }

  const handleInfoClick = () => {
    navigate("/property/" + currentProperty.propertyid);
  }

  return (
    <div>
      <section className="bg-color-0 padding-sm no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <ul className="breadcrumb no-margin-bottom">
                <li><a >Home</a></li>
                <li>Property Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      <LoginComponent show={showLoginModal} onHide={setShowLoginModal} {...props} />
      <MessageComponent show={showModal} onHide={setShowModal} {...props} />

      <section className="bg-color-1 no-padding-top">
        <div className="container-fluid">


          {props.propertyDetailsLoader && (<div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          > <ThreeDots color="#004274" height="100" width="100" />
          </div>)}


          {!props.propertyDetailsLoader && props.propertyDetails && (<div className="row">
            <div className="col-md-12">



              <div className="productGallery">
                <div className="imgOptions">

                  <a className="viewed"><i className="zmdi zmdi-eye"></i> 1641</a>
                  <a className="addtoFev"><i role="button" className="zmdi zmdi-favorite" style={{ color: props.hasFav ? "red" : "white" }} onClick={addFav}></i> {props.favCount}</a>
                  <a className="list"><i role="button" className="zmdi zmdi-comment-text-alt" onClick={fetchMessages}></i> 32</a>
                  <a className="addtoFev"><i className="zmdi zmdi-share"></i> </a>

                </div>
                <div className="slick-main">
                  <div className="slider slider-for">
                    {props.propertyDetails && props.propertyDetails.map((v, i) => {
                      return (
                        <div key={"pdc" + i}>
                          <img src={v.imageUrl} style={{ height: "400px", width: "100%" }} />
                          <span className="imgOptionsSlick">{v.title}</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="slider slider-nav">
                    {props.propertyDetails && props.propertyDetails.map((v, i) => {
                      return (
                        <div key={"pdc" + i}>
                          <img src={v.imageUrl} style={{ width: "100%", height: "70px" }} />
                          <span className="imgOptionsSlick">{v.title}</span>
                        </div>
                      )
                    })}
                  </div>

                </div>

              </div>

            </div>
          </div>)}


        </div>
      </section>


      {!props.propertyDetailsLoader && props.position && (

        <div id="mapBoxProperty" style={{ padding: "0 50px" }}>
          <Map style={{ border: 0, width: "100%", height: "500px" }}
            google={props.google}
            initialCenter={props.position}
            center={props.position}
          >
            <Marker position={props.position} />

            {props.nearByProperties && props.nearByProperties.map((pos, i) => {
              return (<Marker icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8.5,
                fillColor: "#00008B",
                fillOpacity: 1,
                strokeWeight: 0.4
              }} position={pos.position}
                onClick={(map, marker) => onMarkerClick(map, marker, pos)}
              />)
            })}

            <InfoWindowComponent
              marker={marker}
              visible={showMarker}>
              <GoolgeMapPropertyCard key={"pc1"}{...currentProperty} intl={props.intl} onClick={handleInfoClick} />
            </InfoWindowComponent>

            <Polygon fillColor='#77b5fe' strokeColor="#547bd0" strokeWeight="2.0" path={props.nearByPositions} />
          </Map>
        </div>

      )}


      <section className="bg-color-0 padding-sm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center margin-top-md"> <a className="btn btn-primary btn-lg">Request Seller Details</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-1 padding-sm no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading ">
                  <h3 className="panel-title">Highlights</h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-3 ">
                      <div className="highlights">
                        <img src={MetroImg} alt="img" />
                        <h5>3 km from Metro Station</h5>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="highlights"><img src={PlaneImg} alt="img" />
                        <h5>5 km from International Airport</h5></div>
                    </div>
                    <div className="col-md-3">
                      <div className="highlights"><img src={BuildingsImg} alt="img" />
                        <h5>10 km from Hitech City</h5></div>
                    </div>
                    <div className="col-md-3">
                      <div className="highlights"><img src={RoadImg} alt="img" />
                        <h5>15  km from ORR</h5></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-0 padding-sm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading ">
                  <h3 className="panel-title">Property is Well Known for </h3>
                </div>

                <div className="panel-body">
                  <div className="row">

                    {props.nearBy && props.nearBy.map((v, i) => {
                      return (
                        <div key={"nb" + i} className="col-md-2 col-sm-6">
                          <div className="checkbox-primary checkbox-icon">
                            <label><img src={imgList[v.iconName]} alt="Icon" /> {v.title}</label>
                          </div>
                        </div>)
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
};

export default GoogleApiWrapper(
  (props) => ({
    apiKey: ('AIzaSyA_w-BrJY32AkYKr3Fc3mPylDtvcQFWIOk'),
    language: props.language,
  }
  ))(injectIntl(PropertyDetailsComponent))

