
import React from 'react';
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



const SellHighlightsComponent = (props) => {

  const { searchTab, subSearchTab } = props;

  let hasPropertyKnow = false;
  let hasHighlights = false;
  console.log(props.propertyTypes[searchTab],"sell props")

  if (props.propertyTypes && props.propertyTypes[searchTab]
    && props.propertyTypes[searchTab].property_subtypes
    && props.propertyTypes[searchTab].property_subtypes.length > 0
    && props.propertyTypes[searchTab].property_subtypes[subSearchTab].property_known_for
    && props.propertyTypes[searchTab].property_subtypes[subSearchTab].property_known_for.length > 0) {
    hasPropertyKnow = true;
  }


  if (props.propertyTypes && props.propertyTypes[searchTab]
    && props.propertyTypes[searchTab].location_property_highlights
    && props.propertyTypes[searchTab].location_property_highlights.length > 0) {
    hasHighlights = true;
  }

  return (
    <div>
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
                    {hasHighlights && props.propertyTypes[searchTab].location_property_highlights.map((v, i) => {
                      return (
                        <div key={"h" + i} className="col-md-3">
                          <div className="highlights"><img src={v.mediaurl} alt="img" />
                            {v.distance && (<h5> {v.distance} km from {v.name}</h5>)}
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

      {hasPropertyKnow && (<section className="bg-color-0 padding-sm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading ">
                  <h3 className="panel-title">Property is Well Known for </h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    {hasPropertyKnow &&
                      props.propertyTypes[searchTab].property_subtypes[subSearchTab].property_known_for.map((v, i) => {
                        return (
                          <div key={"nb" + i} className="col-md-3 col-sm-6">
                            <div className="checkbox checkbox-primary checkbox-icon">
                              <input type="checkbox" name="check" id={"check" + v.id} />
                              <label><img src={v.iconurl} alt="Icon" /> {v.description}</label>
                            </div>
                          </div>)
                      })}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)}

    </div>

  )
};

export default SellHighlightsComponent;