import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MapImg from "../../assets/images/map.jpg"
import { PropertyCard } from '../custom-components/CustomComponents';
import { ThreeDots } from 'react-loader-spinner';
import { injectIntl } from 'react-intl';

const HomeMostViewedPropertiesComponent = (props) => {
  const navigate = useNavigate();
  const [showMaps, setShowMaps] = useState(false);
  const { formatMessage } = props.intl;

  useEffect(() => {
    props.getHomeProducts("/api/mostViewedProperties");
  }, []);

  return (

    <div>



      <section className="bg-grdnt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h3 className="no-margin-top">{formatMessage({ id: "home.mostViewed" })}</h3>
            </div>
            <div className="col-md-6 text-right">
              <div className="changeCardsStyle">
                <a role="button" onClick={() => setShowMaps(false)} className={!showMaps ? "btn-icon active" : "btn-icon"} id="imgViewBtn" title="Image View">
                  <i className="zmdi zmdi-image-o"></i></a>
                <a role="button" onClick={() => setShowMaps(true)} className={showMaps ? "btn-icon active" : "btn-icon"} id="mapViewBtn" title="Map View">
                  <i className="zmdi zmdi-pin-drop"></i></a> </div>
            </div>
          </div>

          {props.propertyLoader && (<div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          > <ThreeDots color="#004274" height="100" width="100" />
          </div>)}

          {!props.propertyLoader && (<div className="cardsContainer">

            {!showMaps && (<div>
              <div className="row">
                {props.productList && props.productList.map((v, i) => {
                  return (
                    <PropertyCard key={"pc" + i}{...props.productList[i]} intl = {props.intl}/>
                  )
                })}
              </div>
            </div>)}

            {showMaps && (<div>
              <div className="row">
                <div className="col-md-12">
                  <img src={MapImg} width="1700" height="537" className="img-responsive img-thumbnail" />
                </div>
              </div>
            </div>)}

          </div>)}


        </div>
      </section>
    </div>

  );
};

export default injectIntl(HomeMostViewedPropertiesComponent);