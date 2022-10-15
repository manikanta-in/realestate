import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import titleVerifServiceImg from "../../assets/images/banner_infograph.png";
import CountUp, { useCountUp } from 'react-countup';
import BuyProperty from "../../assets/images/buy-property.jpg";
import AboutUs from "../../assets/images/aboutus-2.png";
import AboutUs1 from "../../assets/images/aboutus1.png";
import HomeMostViewedPropertiesComponent from './HomeMostViewedPropertiesComponent';
import BuyPropertyComponent from '../buy-property/BuyPropertyComponent';
import HomeTestimonialComponent from './HomeTestimonialComponent';
import { FormattedMessage, injectIntl } from 'react-intl';
import MetaTags from 'react-meta-tags';
import { BuyPropertyContainer } from '../../containers';

import { Footer } from '../../components/footer';

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
      <section className="bg-img-6 cust-height" id="titleVerificationServiceSec" style={{"paddingTop":"20px"}}>
        <div className="container-fluid">
          <div className="cs-row">
            <div className="col-md-7">
              <img src={titleVerifServiceImg} alt="Banner img" style={{ marginTop: "45px" }} className="img-responsive" /></div>
            <div className="col-md-5">
              <div className="banner-text" style={{paddingTop:"0px",paddingBottom:"10px"}}>   <h1 className="text-bold text-primary">Title Verification Service
              </h1>
                <p><b>Title Verification Service</b> at Right My Property is a one-stop solution for property verification! Offering <b>Property Title Verification Services in Telangana</b>, our team of experts is able to verify the authenticity of the documents and get clearances from the revenue, legal, and survey departments. </p>
                <p>Title verification is a process of checking and verifying the property documents for ascertaining the legal ownership of property and determining any defects in the title of the property, issues with revenue records, and field survey reports. Once the verification process is complete we issue a Title Verification Certificate on the property. </p>
                <p><b>Right My Property Title Verification Service</b> is a blessing for both buyers and sellers. Buyers can be assured that they would receive a clear title for their property, and sellers can make the process of selling their property a comfortable one.</p>
                <p>We look forward to providing the best <b>Property Title Verification services in Hyderabad.</b></p>
                <br />
                <p><a href="#" className="btn btn-primary btn-xlg btn-block" >Request</a></p>
              </div>      </div>
          </div>
        </div>
      </section>

      <BuyPropertyContainer child={true}/>
      <section className="post-img padding-md" style={{height:"900px"}}>
        <div className="container-fluid">
          <div className="cs-row">
            <div className="col-md-7">
            </div>

            <div className="col-md-4">
              <div className="post-banner-text">   
                <h1 className="text-bold ">
                  Easy to Post<br/>
                  Receive Quick Response<br/>
                  Verified Buyers<br/>
                  Receive Notifications<br/>
                  Free Posting
                </h1>

                <br />
                <br />


                <p><a className="btn btn-primary btn-xlg btn-block" onClick={() => navigate("/sell")}>Post Now</a></p>
              </div>      </div>
          </div>
        </div>
      </section>
      <section className="bg-grdnt-2 padding-lg"  id="aboutSec">
        <div className="container">
          <div className="cs-row"><div className="col-md-4"><div className="count-card"><h1><CountUp  delay={3} end={3000} duration={3}></CountUp>+</h1>
            <h3>Properties to Buy</h3>

          </div>

          </div>

            <div className="col-md-4"><div className="count-card"><h1><CountUp  delay={3} end={6000} duration={5}></CountUp>+</h1>
              <h3>Properties Sold</h3>

            </div>

            </div>


            <div className="col-md-4"><div className="count-card"><h1><CountUp  delay={3} end={2000} duration={3}></CountUp>+</h1>
              <h3>Properties Verified</h3>

            </div>

            </div>



          </div>
        </div>



        <div className="container">
          <div className="cs-row"><div className="col-md-15">
            <div className="service-card"><h2>Title Verification Service</h2>
              <h4>
                There is always an element of uncertainty when it comes to real estate. At Right My Property, we aim to minimize the risks in buying/selling property by bridging the gap between buyers and sellers with an authorized Title Verification Service. This simple hassle-free process allows buyers and sellers to have a thorough check-up of the property under consideration. All you have to do is connect with us!
              </h4>
              <h4>
              We undertake an elaborate procedure where our team of experts is able to verify the revenue records, check for litigations or property disputes, and conduct a field survey to ascertain the facts regarding the property under consideration. Once cleared from each department, our Title Verification Certificate is issued. Additionally, we also provide photos and videos of the property.
              </h4>
            </div>
          </div>
          <br/>
            <div className="col-md-15">
              <div className="service-card"><h2>Property Buying </h2>
                <h4>
                  <b>
                    Let us guide you to the Right Property
                  </b>
                </h4>
                <h4>
                  With an excellent network of properties for sale, we help you search property listings that include a large inventory of luxurious homes, plots, and lands.
                </h4>
              </div>
            </div>
            <br/>
            <div className="col-md-15">
              <div className="service-card"><h2>Property Selling </h2>
                <h4>
                  <b>It's easy!! All you need to do is list your property.</b>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-img-6 padding-md">
        <div style={{ display: "flex" }}>
          <div role="button" onClick={() => navigate("/buy")} style={{
            fontSize: "46px",
            float: "left",
            backgroundColor: "rgba(0, 0, 0, .5)",
            textAlign: "center",
            flex: 1,
            padding: "1em",
            marginRight: "13%",
            opacity: "0.5",
            color: "white",
            fontWeight: 500
          }}>Want to Buy Property
          </div>
          <div role="button" onClick={() => navigate("/sell")} style={{
            fontSize: "46px",
            float: "right",
            backgroundColor: "rgba(0, 0, 0, .5)",
            textAlign: "center",
            flex: 1,
            padding: "1em",
            marginLeft: "13%",
            opacity: "0.5",
            color: "white",
            fontWeight: 500
          }}>Want to Sell
            Property
            Sign-up now
          </div>
        </div>
        <br /> <br />
        <div className="search-container">
          <div className="col-md-6" style={{ float: "none", margin: "auto" }}>
            <div className="form-group no-margin">
              <div className="input-group">
                <input type="text" className="form-control input-lg" placeholder="Example Search : Residential Plots in Nizampet" />
                <a className="input-group-addon btn btn-primary btn-lg" type="button">
                  <i className="zmdi zmdi-search"></i></a> </div>
            </div>
          </div>
        </div>

      </section> */}
      {/* <br />
      <div style={{ display: "flex" }}>
        <div style={{ width: "31%", flex: 1, padding: "1em" }}>
          <div style={{
            textAlign: "center", fontWeight: "500", background: "#EEECE9"
            , borderRadius: "20%", paddingTop: "20px",
            paddingBottom: "20px",
            borderRadius: "30px",
            borderWidth: "1px",
            borderStyle: "solid",
          }}>
            <div style={{ fontSize: "50px", color: "#004274" }}>3,000+</div>
            <div style={{ fontSize: "20px" }}> Properties to Buy</div>
          </div>
        </div>
        <div style={{ width: "31%", marginLeft: "2%", flex: 1, padding: "1em" }}>
          <div style={{
            textAlign: "center", fontWeight: "500", background: "#EEECE9"
            , borderRadius: "20%", paddingTop: "20px",
            paddingBottom: "20px",
            borderRadius: "30px",
            borderWidth: "1px",
            borderStyle: "solid",
          }}>
            <div style={{ fontSize: "50px", color: "#004274" }}>6,000+</div>
            <div style={{ fontSize: "20px" }}> Properties Sold</div>
          </div>
        </div>
        <div style={{ width: "31%", marginLeft: "2%", flex: 1, padding: "1em" }}>
          <div style={{
            textAlign: "center", fontWeight: "500", background: "#EEECE9"
            , borderRadius: "20%", paddingTop: "20px",
            paddingBottom: "20px",
            borderRadius: "30px",
            borderWidth: "1px",
            borderStyle: "solid"
          }}>
            <div style={{ fontSize: "50px", color: "#004274" }}>2,000+</div>
            <div style={{ fontSize: "20px" }}> Properties Verified</div>
          </div>
        </div>
      </div>

      <br /> <br />
      <div style={{ display: "flex" }}>
        <div style={{ width: "31%", flex: 1, padding: "1em" }}>
          <div style={{
            textAlign: "center", fontWeight: "500", background: "#EEECE9", paddingTop: "20px", minHeight: "15vw"
          }}>
            <div style={{ fontSize: "20px", marginTop: "18%" }}>Why Buy</div>
          </div>
        </div>
        <div style={{ width: "31%", marginLeft: "2%", flex: 1, padding: "1em" }}>
          <div style={{
            textAlign: "center", fontWeight: "500", background: "#EEECE9", paddingTop: "20px", minHeight: "15vw"
          }}>
            <div style={{ fontSize: "20px", marginTop: "18%" }}>Why Sell</div>
          </div>
        </div> <div style={{ width: "31%", marginLeft: "2%", flex: 1, padding: "1em" }}>
          <div style={{
            textAlign: "center", fontWeight: "500", background: "#EEECE9", paddingTop: "20px", minHeight: "15vw"
          }}>
            <div style={{ fontSize: "20px", marginTop: "18%" }}>Why Title Verification Services</div>
          </div>
        </div>

      </div> */}
      <br />
      <HomeTestimonialComponent {...props} />
    </div>

  );
};

export default injectIntl(HomeComponent);