import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BuyProperty from "../../assets/images/buy-property.jpg";
import AboutUs from "../../assets/images/aboutus-2.png";
import AboutUs1 from "../../assets/images/aboutus1.png";
import HomeMostViewedPropertiesComponent from './HomeMostViewedPropertiesComponent';
import HomeTestimonialComponent from './HomeTestimonialComponent';
import { FormattedMessage, injectIntl } from 'react-intl';
import MetaTags from 'react-meta-tags';

const HomeComponent = (props) => {
  const navigate = useNavigate();
  const { formatMessage } = props.intl;

  useEffect(() => {
    props.setCurrentPage("home");
  }, []);


  return (
    <div>
      <MetaTags>
        {props.metaData && props.metaData.map((v, i) => {
          return (
            <meta key={"meta" + i} id={"metaid" + i} name={v.page} content={v.keywords} />
          )
        })}
      </MetaTags>


      <section className="bg-img-6 padding-md">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h6>{formatMessage({ id: "home.title1" })}</h6>
              <h3>{formatMessage({ id: "home.title2" })}</h3>
              <p>{formatMessage({ id: "home.title3" })}</p>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="panel panel-index">
                <div className="panel-body">
                  <p className="text-center"> <img src={BuyProperty} width="1024" height="800" alt="buy" className="img-responsive" /></p>
                  <h2 className="text-bold">{formatMessage({ id: "home.buy" })}</h2>
                  <ul className="list-style-2">
                    <li>{formatMessage({ id: "home.lands" })}</li>
                    <li>{formatMessage({ id: "home.residential" })} </li>
                    <li>{formatMessage({ id: "home.plots" })}</li>
                    <li>{formatMessage({ id: "home.commercials" })}</li>
                    <li>{formatMessage({ id: "home.quality" })}</li>
                    <li>{formatMessage({ id: "home.verify" })}</li>
                  </ul>
                </div>
                <div className="panel-footer text-right"><a onClick={() => navigate("/buy")} className="btn btn-text no-padding-left">{formatMessage({ id: "home.start" })} <i className="zmdi zmdi-arrow-right"></i></a></div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-index">
                <div className="panel-body">
                  <p className="text-center"> <img src={AboutUs} width="923" height="583" alt="Sell" className="img-responsive" /></p>
                  <h2 className="text-bold">{formatMessage({ id: "home.sell" })}</h2>
                  <ul className="list-style-2">
                    <li>{formatMessage({ id: "home.posting" })}</li>
                    <li>{formatMessage({ id: "home.response" })}</li>
                    <li>{formatMessage({ id: "home.buyers" })}</li>
                    <li>{formatMessage({ id: "home.notifications" })}</li>
                    <li>{formatMessage({ id: "home.postin" })}</li>
                  </ul>
                </div>
                <div className="panel-footer text-right"><a onClick={() => navigate("/sell")} className="btn btn-text no-padding-left"><span>{formatMessage({ id: "home.now" })}</span> <i className="zmdi zmdi-arrow-right"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-0 padding-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-6"><img src={AboutUs1} width="1636" height="937" alt="Img" className="img-responsive" /></div>
            <div className="col-md-5 col-md-offset-1">
              <h2>{formatMessage({ id: "home.titleVerify" })}</h2>
              <p><FormattedMessage id="home.tvs1" /></p>
              <p> <FormattedMessage id="home.tvs2" /></p>
              <a className="btn btn-text no-padding-left">{formatMessage({ id: "home.knowMore" })} <i className="zmdi zmdi-arrow-right"></i></a> </div>
          </div>
        </div>
      </section>


      <HomeMostViewedPropertiesComponent {...props} />
      <HomeTestimonialComponent {...props} />
    </div>

  );
};

export default injectIntl(HomeComponent);