import React, { useEffect, useState, useContext } from 'react';
import FormLand from "../../assets/images/icon-formLand.svg";
import HouseIcon from "../../assets/images/icon-house.svg";
import CommercialIcon from "../../assets/images/icon-commercial.svg";
import PowerSearch from "../../assets/images/powerSearch.svg";
import AgriIcon from "../../assets/images/icon-agri.svg";
import FormhouseIcon from "../../assets/images/icon-formhouse.svg";
import PlotIcon from "../../assets/images/plot.svg";
import VillaIcon from "../../assets/images/icon-villa.svg";
import SpaceIcon from "../../assets/images/icon-space.svg";
import BuildingsIcon from "../../assets/images/icon-buildings.svg";
import FlatsIcon from "../../assets/images/icon-flats.svg";
import IndehouseIcon from "../../assets/images/icon-indehouse.svg";
import { useNavigate } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { Context } from "../../Wrapper";

const BuyPropertySearchComponent = (props) => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { formatMessage } = props.intl;
  const [searchTab, setSearchTab] = useState(0);
  const [subSearchTab, setSubSearchTab] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [tabName, setTabName] = useState("Agriculture / Agriculture Lands /");

  useEffect(() => {
    props.setCurrentPage("buy");
  }, []);

  const setHeader = () => {
    let name = formatMessage({ id: "buy.agriculture" }) + " / " + formatMessage({ id: "buy.agricultureLands" }) + " /";
    if (searchTab == 1) {
      name = formatMessage({ id: "buy.residential" }) + " / " + formatMessage({ id: "buy.plots" }) + " /";
    } else if (searchTab == 2) {
      name = formatMessage({ id: "buy.commercial" }) + " / " + formatMessage({ id: "buy.spaces" }) + " /";
    }
    setTabName(name);
  }

  const setSubHeader = () => {
    let name = formatMessage({ id: "buy.agriculture" }) + " / " + formatMessage({ id: "buy.agricultureLands" }) + " /";

    if (searchTab == 0 && subSearchTab == 1) {
      name = formatMessage({ id: "buy.agriculture" }) + " / " + formatMessage({ id: "buy.formHouse" }) + " /";
    } else if (searchTab == 1 && subSearchTab == 0) {
      name = formatMessage({ id: "buy.residential" }) + " / " + formatMessage({ id: "buy.plots" }) + " /";
    } else if (searchTab == 1 && subSearchTab == 1) {
      name = formatMessage({ id: "buy.residential" }) + " / " + formatMessage({ id: "buy.flats" }) + " /";
    } else if (searchTab == 1 && subSearchTab == 2) {
      name = formatMessage({ id: "buy.residential" }) + " / " + formatMessage({ id: "buy.villas" }) + " /";
    } else if (searchTab == 2 && subSearchTab == 0) {
      name = formatMessage({ id: "buy.commercial" }) + " / " + formatMessage({ id: "buy.spaces" }) + " /";
    } else if (searchTab == 2 && subSearchTab == 1) {
      name = formatMessage({ id: "buy.commercial" }) + " / " + formatMessage({ id: "buy.buildings" }) + " /";
    }
    setTabName(name);
  }

  useEffect(() => {
    setHeader();
  }, [searchTab]);


  useEffect(() => {
    const appDefaultLogin = () => {
      props.appLogin().then((res) => {
        props.validateToken("/api/authUser").then((res) => {
        });
      });
    }
    appDefaultLogin();
    return () => {}
  }, [])

  useEffect(() => {
    const appDefaultLogin = () => {
      props.appLogin().then((res) => {
        props.validateToken("/api/authUser").then((res) => {
         // props.getPropertyTypes("/api/property/types/search/");
         // props.getPropertySubTypes("/api/property/subtypes/search/");
        });
      });
    }
    appDefaultLogin();
    setSubHeader();
  }, [context.locale]);

  useEffect(() => {
    setSubHeader();
  }, [subSearchTab]);

  const handleSearch = () => {
    const { propertyTypes, propertySubTypes } = props;    
    let tab = "1";
    let subTab = "1";
    if (searchTab == 0 && subSearchTab == 1) {
      tab = "1";
      subTab = "2";
    } else if (searchTab == 1 && subSearchTab == 0) {
      tab = "2";
      subTab = "3";
    } else if (searchTab == 1 && subSearchTab == 1) {
      tab = "2";
      subTab = "4";
    } else if (searchTab == 1 && subSearchTab == 2) {
      tab = "2";
      subTab = "5";
    } else if (searchTab == 2 && subSearchTab == 0) {
      tab = "3";
      subTab = "6";
    } else if (searchTab == 2 && subSearchTab == 1) {
      tab = "3";
      subTab = "7";
    }
    navigate("/search?tab=" + tab + "&subTab=" + subTab + "&search=" + searchString);
  }

  const [powerButton, setPowerButton] = useState(false);

  return (

    <div>
      <section className="bg-img-1 searchBanner">
        <div className="container-fluid">
          <h2 className="text-center text-white"> {formatMessage({ id: "buy.title" })}</h2>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="search-container">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className={searchTab == 0 ? "active" : ""} style={{ marginRight: "3px" }}>
                    <a onClick={() => { setSearchTab(0); setSubSearchTab(0) }} role="button">
                      <img src={FormLand} />
                      <h4 className="tab-title">{formatMessage({ id: "buy.agriculture" })}</h4>
                    </a></li>
                  <li onClick={() => { setSearchTab(1); setSubSearchTab(0) }} role="button" className={searchTab == 1 ? "active" : ""} style={{ marginRight: "3px" }}>
                    <a role="tab" >
                      <img src={HouseIcon} />
                      <h4 className="tab-title">{formatMessage({ id: "buy.residential" })}</h4>
                    </a></li>
                  <li onClick={() => { setSearchTab(2); setSubSearchTab(0) }} role="button" className={searchTab == 2 ? "active" : ""}>
                    <a role="tab" >
                      <img src={CommercialIcon} />
                      <h4 className="tab-title">{formatMessage({ id: "buy.commercial" })} </h4>
                    </a></li>
                </ul>

                <div className="tab-content subSearchActions">

                  {searchTab == 0 && (<div role="tabpanel" className="tab-pane active" id="AgricultureLand">
                    <ul className="nav nav-tabs" role="tablist">
                      <li onClick={() => setSubSearchTab(0)} role="button" className={subSearchTab == 0 ? "active" : ""}><a role="tab">
                        <img src={AgriIcon} /> <span className="tab-title">{formatMessage({ id: "buy.agricultureLands" })}</span></a></li>
                      <li onClick={() => setSubSearchTab(1)} role="button" className={subSearchTab == 1 ? "active" : ""}><a role="tab">
                        <img src={FormhouseIcon} /> <span className="tab-title">{formatMessage({ id: "buy.formHouse" })}</span></a></li>
                    </ul>
                  </div>)}

                  {searchTab == 1 && (<div role="tabpanel" className="tab-pane active" id="residentialHouses">
                    <ul className="nav nav-tabs" role="tablist">
                      <li onClick={() => setSubSearchTab(0)} role="button" className={subSearchTab == 0 ? "active" : ""}><a role="tab">
                        <img src={PlotIcon} /> <span className="tab-title">{formatMessage({ id: "buy.plots" })}</span></a></li>
                      <li onClick={() => setSubSearchTab(1)} role="button" className={subSearchTab == 1 ? "active" : ""}><a role="tab">
                        <img src={FlatsIcon} /> <span className="tab-title">{formatMessage({ id: "buy.flats" })}</span></a></li>
                      <li onClick={() => setSubSearchTab(2)} role="button" className={subSearchTab == 2 ? "active" : ""}><a role="tab">
                        <img src={VillaIcon} /> <span className="tab-title">{formatMessage({ id: "buy.villas" })}</span></a></li>
                    </ul>
                  </div>)}

                  {searchTab == 2 && (<div role="tabpanel" className="tab-pane active" id="commercial">
                    <ul className="nav nav-tabs" role="tablist">
                      <li onClick={() => setSubSearchTab(0)} role="button" className={subSearchTab == 0 ? "active" : ""}><a role="tab" >
                        <img src={SpaceIcon} /> <span className="tab-title">{formatMessage({ id: "buy.spaces" })}</span></a></li>
                      <li onClick={() => setSubSearchTab(1)} role="button" className={subSearchTab == 1 ? "active" : ""}><a role="tab" >
                        <img src={BuildingsIcon} /> <span className="tab-title">{formatMessage({ id: "buy.buildings" })}</span></a></li>
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


                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="agriculture">
                      <div className="row">
                        <div className="col-md-10">
                          <div className="form-group no-margin">
                            <div className="input-group">
                              <div className="input-group-addon"> {tabName}</div>
                              <input onChange={(e) => setSearchString(e.target.value)} type="text" value={searchString} className="form-control input-lg mainSearchbar" placeholder="Sangareddy" />
                              <a onClick={handleSearch} className="input-group-addon btn btn-primary btn-lg" type="button">
                                <i className="zmdi zmdi-search"></i> {formatMessage({ id: "buy.search" })}</a> </div>
                          </div>
                        </div>
                        <div className="col-md-2 text-right">
                          <a onClick={() => setPowerButton(!powerButton)} className="powersearchLink" role="button">
                            <img src={PowerSearch} alt="Power Search" />{formatMessage({ id: "buy.powerSearch" })}
                          </a></div>
                      </div>
                    </div>
                  </div>


                  <div className={powerButton ? "collapse in" : "collapse"} id="powerSearch">
                    <div className="pSearchContainer">
                      <a className="searchClose" role="button">
                        <i className="zmdi zmdi-close"></i></a>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Property Type</label>
                            <select className="form-control ">
                              <option>Select</option>
                              <option>Recidential 2 BHK </option>
                              <option>Building</option>
                              <option>Flat</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Price</label>
                            <div className="row">
                              <div className="col-md-9">
                                <div className="slidecontainer">
                                  <input type="range" min="1" max="100" className="slider" id="myRange" />
                                  <small><strong>30</strong> Lakhs</small> <small className="pull-right"><strong>3</strong> Crore</small> </div>
                              </div>
                              <div className="col-md-3" style={{ marginTop: "-10px" }}>
                                <input type="text" className="form-control text-primary" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Locations</label>
                            <select className="form-control" multiple>
                              <option>Kukatpally </option>
                              <option>Miyapur</option>
                              <option>Lingampally</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6"><br />
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.62974514848!2d78.32226491194442!3d17.443973884848372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1645170636608!5m2!1sen!2sin" width="100%" height="120"
                            style={{ border: "1px solid #ccc" }} loading="lazy"></iframe>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="panel panel-alpha no-margin-bottom">
                            <div className="panel-heading ">
                              <h3 className="panel-title">Preferances </h3>
                            </div>
                            <div className="panel-body no-padding-bottom">
                              <div className="row" style={{ textAlign: "left" }}>
                                <div className="col-md-4">
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Newly Constructed" />
                                    <label htmlFor="Newly Constructed">Newly Constructed </label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Near to School" />
                                    <label htmlFor="Near to School">Near to School</label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Near to Main City" />
                                    <label htmlFor="Near to Main City">Near to Main City</label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Near to Railway Station" />
                                    <label htmlFor="Near to Railway Station">Near to Railway Station</label>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Near to Bus Stand" />
                                    <label htmlFor="Near to Bus Stand">Near to Bus Stand</label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Near to Airport" />
                                    <label htmlFor="Near to Airport">Near to Airport</label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Independent House" />
                                    <label htmlFor="Independent House">Independent House</label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Gated Community" />
                                    <label htmlFor="Gated Community">Gated Community</label>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="First Owner" />
                                    <label htmlFor="First Owner">First Owner</label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Bank Loan Approval" />
                                    <label htmlFor="Bank Loan Approval">Bank Loan Approval</label>
                                  </div>
                                  <div className="checkbox checkbox-primary">
                                    <input type="checkbox" name="check" id="Delux Quality" />
                                    <label htmlFor="Delux Quality">Delux Quality</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <p className="text-center"><a onClick={() => setPowerButton(!powerButton)} className="btn btn-text" role="button" >Cancel</a>
                        <a onClick={handleSearch} className="btn btn-primary">Go</a> </p>
                    </div>
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

export default injectIntl(BuyPropertySearchComponent);