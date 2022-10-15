import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { PropertyCard } from '../custom-components/CustomComponents';
import { ThreeDots } from 'react-loader-spinner';
import { injectIntl } from 'react-intl';

const MostViewedPropertiesComponent = (props) => {
  const navigate = useNavigate();
  const [showMaps, setShowMaps] = useState(false);
  const { formatMessage } = props.intl;

  useEffect(() => {
    props.getBuyProducts("/api/mostViewedPropertiesInBuy");
  }, []);

  return (

    <div>
      <section className="bg-color-0 no-padding-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-bold no-margin-top hidden">Most Viewed Properties</h2>
            </div>
            <div className="col-md-6 text-right">
              <div className="changeCardsStyle">
                <a role="button" onClick={() => setShowMaps(false)} className={!showMaps ? "btn-icon active" : "btn-icon"} id="imgViewBtn" title="Image View">
                  <i className="zmdi zmdi-image-o"></i></a>
                <a role="button" onClick={() => setShowMaps(true)} className={showMaps ? "btn-icon active" : "btn-icon"} id="mapViewBtn" title="Map View">
                  <i className="zmdi zmdi-pin-drop"></i></a> </div>
            </div>
          </div>

          {props.buyPropertiesLoader && (<div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          > <ThreeDots color="#004274" height="100" width="100" />
          </div>)}

          {!props.buyPropertiesLoader && (<div className="cardsContainer">
            {!showMaps && (<div>
              <div className="row">
                {props.buyProperties && props.buyProperties.map((v, i) => {
                  return (
                    <PropertyCard key={"pc" + i}{...props.buyProperties[i]} intl = {props.intl}/>
                  )
                })}
              </div>
            </div>)}
            {showMaps && (<div>
              <div className="row">
                <div className="col-md-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30257.68222356487!2d79.08021250029881!3d18.564556297534136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1643277812816!5m2!1sen!2sin"
                    width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                </div>
              </div>
            </div>)}

          </div>)}
        </div>
      </section>
    </div>

  );
};

export default injectIntl(MostViewedPropertiesComponent);