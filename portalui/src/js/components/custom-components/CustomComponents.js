import React, { useEffect, useState } from 'react';
import DefaultImg from "../../assets/images/default-building.jpg"
import DefaultFace from "../../assets/images/default-face.jpg"
import Chart from 'react-apexcharts'
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import ReactDOM from "react-dom";
import { InfoWindow } from 'google-maps-react';
import MuiAlert from "@material-ui/lab/Alert";
import { Footer } from '../../components/footer';

import tnc from "../../tnc.js"

export const PropertyCard = (props) => {

  const { formatMessage } = props.intl;
  let imageUrl = props.imageUrl || "";
  const handleOnError = (e) => {
    e.target.src = DefaultImg;
  }
  const navigate = useNavigate();

  return (
    <div className="col-md-3">
      <div className="panel propertyCard">
        <a role="button" onClick={() => navigate(`/property/${props.propertyid}?proptype=${props.tab}&propsubtype=${props.subTab}`)}>
          <div className="panel-body propertyCardMedia">
            <div className="propertyBadge">
              <i className="zmdi zmdi-card-membership"></i></div>
            <div className="propertyCardImg">
              <img src={imageUrl} onError={handleOnError} />
            </div>
          </div>
          <div className="panel-heading" style={{ background: "white" }}>
            <h3 className="panel-title" style={{ textTransform: "capitalize" }}>{formatMessage({ id: `${props.propertyType}` })}</h3>
            <h4 className="proDetails">
              {props.details && props.details.map((v, i) => {
                return (
                  <span key={"d" + i}>
                    <span style={{ paddingRight: "3px" }}>{v.value}</span>
                    <small>{v.unit}</small>
                  </span>)
              })}
            </h4>
            <h4 className="proLocation"><i className="zmdi zmdi-pin"></i> {props.location}</h4>
          </div>
        </a>
        <div className="panel-footer">
          <div className="row">
            <div className="col-xs-10">
              <label className="badge icon-badge"><a className="viewed" title="Views"><i className="zmdi zmdi-eye"></i> <small>{props.viewCount}</small></a></label>
              <label className="badge icon-badge"><a className="addtoFev" title="Likes" ><i className="zmdi zmdi-favorite"></i> <small>{props.favCount}</small></a> </label>
              <label className="badge icon-badge"><a className="list" title="Comments"><i className="zmdi zmdi-comment-list"></i> <small>{props.commentCount}</small></a> </label>
            </div>
            <div className="col-sm-2 text-right">
              <label className="badge icon-badge"><a title={props.isCertified ? "Certified" : "Get Certified"}><i className={props.isCertified ? "zmdi zmdi-card-membership" : "zmdi zmdi-badge-check"}></i></a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


export const OwlPropertyCard = (props) => {
  const { formatMessage } = props.intl;

  let imageUrl = props.imageUrl || "";
  const handleOnError = (e) => {
    e.target.src = DefaultImg;
  }


  return (
    <div className="owl-item" >
      <div className="item" >
        <div className="panel propertyCard certified"> <a>
          <div className="panel-body propertyCardMedia">
            <div className="propertyBadge certified"><i className="zmdi zmdi-card-membership"></i></div>
            <div className="propertyCardImg"> <img src={imageUrl} onError={handleOnError} /></div>
          </div>
          <div className="panel-heading" style={{ background: "white" }}>
            <h3 className="panel-title">{formatMessage({ id: `${props.propertyType}` })} </h3>
            <h4 className="proDetails">
              {props.details && props.details.map((v, i) => {
                return (
                  <span key={"d" + i}>
                    <span style={{ paddingRight: "3px" }}>{v.value}</span>
                    <small>{v.unit}</small>
                  </span>)
              })}
            </h4>
            <h4 className="proLocation"><i className="zmdi zmdi-pin"></i> {props.location}</h4>
          </div>
        </a>
          <div className="panel-footer">
            <div className="row">
              <div className="col-xs-10">
                <label className="badge icon-badge"><a className="viewed" title="Views"><i className="zmdi zmdi-eye"></i> <small>{props.viewCount}</small></a></label>
                <label className="badge icon-badge"><a className="addtoFev" title="Likes" ><i className="zmdi zmdi-favorite"></i> <small>{props.favCount}</small></a> </label>
                <label className="badge icon-badge"><a className="list" title="Comments"><i className="zmdi zmdi-comment-list"></i> <small>{props.commentCount}</small></a> </label>
              </div>
              <div className="col-sm-2 text-right">
                <label className="badge icon-badge"><a title={props.isCertified ? "Certified" : "Get Certified"}><i className={props.isCertified ? "zmdi zmdi-card-membership" : "zmdi zmdi-badge-check"}></i></a></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


export const MyPropertyCard = (props) => {

  let imageUrl = props.imageUrl || "";
  const handleOnError = (e) => {
    e.target.src = DefaultImg;
  }
  let options = {
    colors: ['#87CEFA', '#FFA500'],
    chart: {
      id: 'apexchart-' + props.id
    },
    xaxis: {
      categories: props.categories
    }
  };

  let series = props.series;

  return (
    <div className={props.id == 0 ? "col-md-3" : "col-md-3 col-md-offset-1"}>
      <div className="panel propertyCard certified">
        <a>
          <div className="panel-body propertyCardMedia">
            <div className="propertyBadge certified">
              <i className="zmdi zmdi-card-membership"></i></div>
            <div className="propertyCardImg">
              <img src={imageUrl} onError={handleOnError} />
            </div>
          </div>
          <div className="panel-heading" style={{ background: "white" }}>
            <h3 className="panel-title" style={{ textTransform: "capitalize" }}>{props.propertyType}</h3>
            <h4 className="proDetails">
              {props.details && props.details.map((v, i) => {
                return (
                  <span key={"d" + i}>
                    <span style={{ paddingRight: "3px" }}>{v.value}</span>
                    <small>{v.unit}</small>
                  </span>)
              })}
            </h4>
            <h4 className="proLocation"><i className="zmdi zmdi-pin"></i> {props.location}</h4>
          </div>
        </a>
        <div className="panel-footer">
          <div className="row">
            <div className="col-xs-6">
              <label className="badge icon-badge"><a className="viewed" title="Views"><i className="zmdi zmdi-eye"></i> <small>{props.viewCount}</small></a></label>
              <label className="badge icon-badge"><a className="addtoFev" title="Likes" ><i className="zmdi zmdi-favorite"></i> <small>{props.favCount}</small></a> </label>
              <label className="badge icon-badge"><a className="list" title="Comments"><i className="zmdi zmdi-comment-list"></i> <small>{props.commentCount}</small></a> </label>
            </div>
            <div className="col-xs-6 text-right"><div className="postExpire">Posting expires on <span>{props.expiryDate}</span></div></div>
          </div>
        </div>
      </div>
      <Chart options={options} series={series} type="line" width={340} height={240} />
    </div>
  );

}


export const TestimonialComponent = (props) => {
  let imageUrl = props.picture || "";
  const handleOnError = (e) => {
    e.target.src = DefaultFace;
  }


  return (
    <div className="col-md-4 testimonial-div">
      <div className="testimonialsCard">
        <div className="image"> <img src={imageUrl} onError={handleOnError} width="420" height="396" className="img-responsive" /> </div>
        <div className="text">
          <h4> {props.name}</h4>
          <h5> {props.title} </h5>
          <h4><i className='testimonial-statement'>"{props.statement}"</i></h4>
          <p> {props.comment}</p>
        </div>
      </div>
    </div>
  );

}


export const TermsAndCondiationsComponent = (props) => {
  const [showTancCModal, setshowTancCModal] = useState(false);

  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = 'hidden';
      setshowTancCModal(true);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [props.show]);

  const tnc_list = tnc.map(t => <li>{t}</li>)
  const handleClose = () => {
    if (!props.commonLoader) {
      setshowTancCModal(false);
      props.onHide(false);
      resetValues();
    }
  }

  return (
    <div style={{ display: showTancCModal ? "block" : "none" }} className={showTancCModal ? "modal fade mapFullview in rmp-background-opacity" : "modal fade mapFullview"} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ top: "30%", width: "50%", margin: "auto" }}>

          <div className="modal-header mb-3">
            <button type="button" className="close" onClick={handleClose}><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="gridSystemModalLabel">Terms And Conditions</h4>
          </div>
          <br/>
          <ol>
          {tnc_list}
        
          </ol>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div >
  );

}


export const LoginComponent = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [valueValid, setValueValid] = useState(true);
  const [disableGenerate, setDisableGenerate] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [generateLoader, setGenerateLoader] = useState(false);
  const [disableVerify, setDisableVerify] = useState(true);

  const { formatMessage } = props.intl;


  const resetValues = () => {
    setValue("");
    setOtpValue("");
    setValueValid(true);
    setAlertMsg({});
    setDisableGenerate(false);
    setGenerateLoader(false);
    setDisableVerify(true);
  }

  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [props.show]);


  const handleClose = () => {
    if (!props.commonLoader) {
      setShowModal(false);
      props.onHide(false);
      resetValues();
    }
  }

  const verifyCode = () => {
    props.appLogin().then((res) => {
      props.validateToken("/api/authUser").then((res) => {
        setShowModal(false);
        props.onHide(false);
        resetValues();
      });
    });
  }

  const validateValue = (value) => {
    const phoneRegEx = "^[0-9]*$";
    const EmailRegEx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    let phoneValid = true;
    let emailValid = true;
    if (!value.match(phoneRegEx)) {
      phoneValid = false
    }

    if (!value.match(EmailRegEx)) {
      emailValid = false;
    }

    setValueValid(phoneValid || emailValid);
    setValue(value);
  }

  const getValueType = () => {
    return value.includes("@") ? "email" : "mobile_number";
  }

  const generateCode = () => {
    let req = {};
    req.data = {};
    req.data.login_type = getValueType();
    req.data.login_id = value;
    setAlertMsg({});
    setGenerateLoader(true);
    props.generateCode("/api/get-OTP", req)
      .then((res) => {
        if (res.status == 200 && res.data.data) {
          if (res.data.data.status == "success") {
            setDisableGenerate(true);
            setDisableVerify(false);
            setAlertMsg({ show: true, type: "success", message: "Code generated successfully." });
          } else {
            setAlertMsg({ show: true, type: "error", message: "Failed to generate code. Please try again." });
          }
        } else {
          setAlertMsg({ show: true, type: "error", message: "Failed to generate code. Please try again." });
        }
      })
      .catch(() => {
        setAlertMsg({ show: true, type: "error", message: "Server error. Please try again." });
      })
      .finally(() => {
        setGenerateLoader(false);
      });
  }

  const validateCode = () => {
    let req = {};
    req.data = {};
    req.data.login_type = getValueType();
    req.data.login_id = value;
    req.data.otp = otpValue;
    setAlertMsg({});
    props.validateCode("/api/verify-OTP", req)
      .then((res) => {
        console.log("---", res);
        if (res.status == 200 && res.data.data && res.data.data.status != "verified") {
          if (res.data.data.status == "invalid_otp") {
            setAlertMsg({ show: true, type: "error", message: "Invalid Code. Please try again." });
          } else if (res.data.data.status == "otp_expired") {
            setAlertMsg({ show: true, type: "error", message: "Code expired." });
          } else {
            setAlertMsg({ show: true, type: "error", message: "Server error. Please try again." });
          }
        } else if (res.status != 200) {
          setAlertMsg({ show: true, type: "error", message: "Server error. Please try again." });
        }
      })
      .catch(() => {
        setAlertMsg({ show: true, type: "error", message: "Server error. Please try again." });
      })
  }


  return (
    <div style={{ display: showModal ? "block" : "none" }} className={showModal ? "modal fade mapFullview in rmp-background-opacity" : "modal fade mapFullview"} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ top: "30%", width: "50%", margin: "auto" }}>

          <div className="modal-header">
            <button type="button" className="close" onClick={handleClose}><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="gridSystemModalLabel">Enter Email/Phone number </h4>
          </div>
          <div className="modal-body">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      {alertMsg.show && (<div style={{ padding: "5px 0 5px 0" }}>
                        <Alert style={{ fontSize: "14px" }} severity={alertMsg.type}>{alertMsg.message}</Alert>
                      </div>)}

                      <label className="control-label">Email / Phone</label>
                      <div className="row">
                        <div className="col-sm-7">
                          <span className="rmp-tooltip" style={{ width: "100%" }}>
                            <input disabled={disableGenerate} type="text" className={valueValid ? "form-control" : "form-control rmp-bordor-red"} value={value} onChange={(e) => validateValue(e.target.value)} />
                            <span style={{ display: valueValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: "custom.validation.value" })}</span>
                          </span>
                        </div>
                        <div className="col-sm-5">
                          <button disabled={(!valueValid || value == "" || disableGenerate)} onClick={generateCode} className="btn btn-default btn-block">

                            {generateLoader && (<div
                              style={{
                                width: "100%",
                                height: "100",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                              }}
                            > <ThreeDots color="#004274" height="20" width="20" />
                            </div>)}
                            {!generateLoader && (<span>Get verification code</span>)}

                          </button>
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
                          <input value={otpValue} onChange={(e) => setOtpValue(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="col-sm-5">
                          <button disabled={disableVerify || otpValue == ""} className="btn btn-primary btn-block" onClick={validateCode}>

                            {props.commonLoader && (<div
                              style={{
                                width: "100%",
                                height: "100",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                              }}
                            > <ThreeDots color="white" height="20" width="20" />
                            </div>)}

                            {!props.commonLoader && (
                              <span>Verify</span>
                            )}

                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div >
  );

}

export const MessageComponent = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [props.show]);


  const handleClose = () => {
    document.body.style.overflow = 'auto';
    setShowModal(false);
    props.onHide(false);
  }

  return (
    <div style={{ display: showModal ? "block" : "none" }} className={showModal ? "modal fade mapFullview in rmp-background-opacity" : "modal fade mapFullview"} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ top: "5%", width: "50%", margin: "auto" }}>

          <div className="modal-header">
            <button type="button" className="close" onClick={handleClose}><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="gridSystemModalLabel">Messages </h4>
          </div>
          {(props.messageLoader && <div
            style={{
              width: "100%",
              minHeight: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          > <ThreeDots color="#004274" height="100" width="100" />
          </div>)}
          {!props.messageLoader && (<div className="modal-body">
            <ul className="alerts-list" style={{ overflow: "auto", maxHeight: "300px" }} >
              {props.messageDetails && props.messageDetails.map((v, i) => {
                return (
                  <li> <a className={"alert-" + v.type}>
                    <p>{v.message}</p>
                  </a> </li>
                )
              })}
            </ul>
          </div>)}
          <div className="modal-footer" style={{ maxHeight: "200px", overflowY: "scroll" }}>
            {props.hasToken && (<textarea style={{ width: "100%" }} />)}
            <div>
              {props.hasToken && (<button type="button" className="btn btn-primary" >Add Comment</button>)}
              <button type="button" className="btn btn-default" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export const InfoWindowComponent = (props) => {
  const infoWindowRef = React.createRef();
  const contentElement = document.createElement(`div`);
  useEffect(() => {
    ReactDOM.render(React.Children.only(props.children), contentElement);
    infoWindowRef.current.infowindow.setContent(contentElement);
  }, [props.children]);
  return <InfoWindow ref={infoWindowRef} {...props} />;
}

export const GoolgeMapPropertyCard = (props) => {

  const { formatMessage } = props.intl;


  let imageUrl = props.imageUrl || "";
  const handleOnError = (e) => {
    e.target.src = DefaultImg;
  }

  return (
    <div className="col-md-12" id="googleMapCard" onClick={() => props.onClick()}>
      <div className="panel propertyCard">
        <a role="button">
          <div className="panel-body propertyCardMedia">
            <div className="propertyBadge">
              <i className="zmdi zmdi-card-membership"></i></div>
            <div className="propertyCardImg">
              <img src={imageUrl} onError={handleOnError} />
            </div>
          </div>
          <div className="panel-heading" style={{ background: "white" }}>
            <h3 className="panel-title" style={{ textTransform: "capitalize" }}>{formatMessage({ id: `${props.propertyType}` })}</h3>
            <h4 className="proDetails">
              {props.details && props.details.map((v, i) => {
                return (
                  <span key={"d" + i}>
                    <span style={{ paddingRight: "3px" }}>{v.value}</span>
                    <small>{v.unit}</small>
                  </span>)
              })}
            </h4>
            <h4 className="proLocation"><i className="zmdi zmdi-pin"></i> {props.location}</h4>
          </div>
        </a>
        <div className="panel-footer">
          <div className="row">
            <div className="col-xs-10">
              <label className="badge icon-badge"><a className="viewed" title="Views"><i className="zmdi zmdi-eye"></i> <small>{props.viewCount}</small></a></label>
              <label className="badge icon-badge"><a className="addtoFev" title="Likes" ><i className="zmdi zmdi-favorite"></i> <small>{props.favCount}</small></a> </label>
              <label className="badge icon-badge"><a className="list" title="Comments"><i className="zmdi zmdi-comment-list"></i> <small>{props.commentCount}</small></a> </label>
            </div>
            <div className="col-sm-2 text-right">
              <label className="badge icon-badge"><a title={props.isCertified ? "Certified" : "Get Certified"}><i className={props.isCertified ? "zmdi zmdi-card-membership" : "zmdi zmdi-badge-check"}></i></a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export const Alert = (props) => {
  return <MuiAlert elevation={6}
    variant="filled" {...props} />;
}



