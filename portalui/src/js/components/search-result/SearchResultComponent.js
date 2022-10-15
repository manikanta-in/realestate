import React, { useEffect, useState } from 'react';
import MapImg from "../../assets/images/map.jpg"
import SearchMostViewedPropertiesComponent from './SearchMostViewedPropertiesComponent';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { PropertyCard } from '../custom-components/CustomComponents';
import { ThreeDots } from 'react-loader-spinner';
import { injectIntl } from 'react-intl';

const SearchResultComponent = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formatMessage } = props.intl;
  const [tab, setTab] = useState();
  const [subTab, setSubTab] = useState();

  useEffect(() => {
    props.setCurrentPage("buy");
    const sp = new URLSearchParams(location.search);
    let req = {
      proptype : sp.get("tab"),
      subtype : sp.get("subTab"),
      location : sp.get("search")
    };
    setTab(req.proptype);
    setSubTab(req.subtype);
    props.getSearchResultProducts("/api/property/search/", req);
  }, []);

 
  const [showMaps, setShowMaps] = useState(false);

  return (

    <div>
      <section className="bg-grdnt-2 no-padding">
        <div className="container-fluid">
          <ul className="breadcrumb no-margin-bottom">
            <li><a role="button" onClick={() => navigate("/buy")}><i className="zmdi zmdi-arrow-left hidden"></i> {formatMessage({ id: "search.buy" })}</a></li>
            <li>{formatMessage({ id: "search.result" })}</li>
          </ul>
          {props.searchResult && props.searchResult.title && !props.searchResultLoader && (<div className="row">
            <div className="col-md-12 areaHighlights">
              <h2 className="no-margin-top">{formatMessage({ id: "search.result" })} <span style={{ textTransform: "capitalize" }}>/{formatMessage({ id: `${props.searchResult.title}` })}</span></h2>
              <div className="row">
                <div className="col-md-3">
                  <h3 className="text-bold no-margin-top">{formatMessage({ id: "search.area" })}</h3>
                  <ul className="list-style-1">
                    {props.searchResult.areaList.map((v, i) => {
                      return (
                        <li key={"ak" + i}><a>{v.areaSize} <small>({v.areaCount})</small></a></li>
                      )
                    })}
                  </ul>
                </div>
                <div className="col-md-3">
                  <h3 className="text-bold no-margin-top">{formatMessage({ id: "search.price" })}</h3>
                  <ul className="list-style-1">
                    {props.searchResult.priceList.map((v, i) => {
                      return (
                        <li key={"pk" + i}><a>{v.price} <small>({v.count})</small></a></li>
                      )
                    })}
                  </ul>
                </div>
                <div className="col-md-3">
                  <h3 className="text-bold no-margin-top">{formatMessage({ id: "search.ORR" })}</h3>
                  <ul className="list-style-1">
                    {props.searchResult.distanceFrom.areaList.map((v, i) => {
                      return (
                        <li key={"dk" + i}><a>{v.value} <small>({v.count})</small></a></li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </section>


      <section className="bg-color-0 padding-sm no-padding-top">
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

          {props.searchResultLoader && (<div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          > <ThreeDots color="#004274" height="100" width="100" />
          </div>)}

          {!props.searchResultLoader && (<div className="cardsContainer">

            {!showMaps && (<div className="showCards">

              {props.searchResult && props.searchResult.properties && props.searchResult.properties.map((v, i) => {
                console.log(props.searchResult.properties[i])
                return (
                  <PropertyCard key={"sr" + i}{...props.searchResult.properties[i]} tab={tab} subTab={subTab} intl={props.intl} />
                )
              })}
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

      <SearchMostViewedPropertiesComponent {...props} />

    </div>

  );
};

export default injectIntl(SearchResultComponent);