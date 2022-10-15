
import React, { useEffect, useState } from 'react';

import { LoginComponent } from "../custom-components/CustomComponents";
import { TermsAndCondiationsComponent } from "../custom-components/CustomComponents";


const SellVerifyContactDetailsComponent = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showTancCModal, setshowTancCModal] = useState(false);
  const [phoneValid, setPhoneValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [otp, setOtp] = useState(null);

  const setPhone = (value) => {
    setPhoneValue(value);
    const regEx = "^[0-9]*$";
    if (!value.match(regEx)) {
      setPhoneValid(false);
    } else {
      setPhoneValid(true);
    }
  }

  const setEmail = (value) => {
    setEmailValue(value);
    const regEx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!value.match(regEx)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }

  const getOtp = () => {
    const data = {
      login_type: 'mobile_number',
      login_id: phoneValue
    }
    if (emailValue) {
      data.email_type = 'email_type';
      data.email_id = emailValue;
    }
    props.getOTP("user/get-otp", { data });
  }

  const verifyOTP = () => {
    const { otp } = props;
    const otpValue = otp.otp;
    const data = {
      login_type: 'mobile_number',
      login_id: phoneValue,
      otp: otpValue
    }
    if (emailValue) {
      data.email_type = 'email_type';
      data.email_id = emailValue;
    }
    props.verifyOTP("user/verify-otp", { data });
  }

  return (
    <div>
      <section className="bgColor0 padding-sm ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Registration</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> */}
              <br />
              <div className="row">
                <div className="col-md-5">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Contact Details</h3>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label className="control-label">Enter your Phone Number</label>
                                <div className="row">
                                  <div className="col-sm-7">
                                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                                      <input type="text" maxLength={10} className={phoneValid ? "form-control" : "form-control rmp-bordor-red"} value={phoneValue} onChange={(e) => setPhone(e.target.value)} />
                                      <span style={{ display: phoneValid ? "none" : "block" }} className="rmp-tooltiptext">Enter valid phone number</span>
                                    </span>
                                  </div>
                                  <div className="col-sm-5"> <button className="btn btn-default btn-block" onClick={() => getOtp()}>Get OTP</button> </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {props.otp &&
                            <div className="row" id="otp_verif_div">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label className="control-label">Enter OTP</label>
                                  <div className="row">
                                    <div className="col-sm-7">
                                      <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-sm-5"> <a className="btn btn-primary btn-block" onClick={() => verifyOTP()}>Verify</a> </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label className="control-label">Enter your Email (Optional)</label>
                                <div className="row">
                                  <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                  </div>
                                  {/* <div classN ame="col-sm-5"> <a className="btn btn-primary btn-block">Verify</a> </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label className="control-label">Enter your Name (Optional)</label>
                                <div className="row">
                                  <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                  </div>
                                  {/* <div className="col-sm-5"> <a className="btn btn-primary btn-block">Verify</a> </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-5 col-md-offset-2">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Verify Email Address</h3>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label className="control-label">Email address</label>
                                <div className="row">
                                  <div className="col-sm-7">
                                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                                      <input type="text" className={emailValid ? "form-control" : "form-control rmp-bordor-red"} value={emailValue} onChange={(e) => setEmail(e.target.value)} />
                                      <span style={{ display: emailValid ? "none" : "block" }} className="rmp-tooltiptext">Enter valid Email value</span>
                                    </span>
                                  </div>
                                  <div className="col-sm-5">
                                    <a className="btn btn-default btn-block">Get verification code</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label className="control-label">Enter CODE</label>
                                <div className="row">
                                  <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                  </div>
                                  <div className="col-sm-5">
                                    <a className="btn btn-primary btn-block">Verify</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-12">
                
                  <div className="checkbox checkbox-primary">
              
                    <input type="checkbox" name="Terms" id="Terms"  />
                    <label className="text-regular" >
                      <h3 className="panel-title"  style={{ "marginTop": "-2px"}}>Terms and Conditions</h3>
                    </label>
                  </div>
                  
                  <br/>
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
          </div>
        </div>
        <br />

        <div style={{ width: "25%", margin: "0 auto" }}>
          <button style={{ width: "300px", margin: "0 auto" }} className="btn btn-primary btn-block">I Agree to Terms and Conditions</button>
        </div>
        {/* <div style={{ width: "25%", margin: "0 auto" }}>
          <button style={{ width: "200px", margin: "0 auto" }} className="btn btn-primary btn-block">SIGN UP</button>
        </div> */}
      </section>
      <hr />
      <TermsAndCondiationsComponent show={showTancCModal} onHide={setshowTancCModal} {...props} />
      {/* <LoginComponent show={showModal} onHide={setShowModal} {...props} />
      <div style={{ width: "25%", margin: "0 auto" }}>
        <button style={{ width: "200px", margin: "0 auto" }} onClick={() => setShowModal(true)} className="btn btn-primary btn-block">Login</button>
      </div> */}
      <br />

    </div>


  )
};

export default SellVerifyContactDetailsComponent;