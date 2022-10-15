import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";


import Logo from "../../assets/images/right_my_property_logo.png";
import DefaultFace from "../../assets/images/default-face.jpg";
import { injectIntl } from "react-intl";
import { Context } from "../../Wrapper";

const Header = (props) => {
  const { currentPage } = props;
  const context = useContext(Context);
  const navigate = useNavigate();
  const { formatMessage } = props.intl;
  window.scrollTo(0, 0);

  const [showDropdown, setDropdown] = useState(false);
  const [showMobileDropdown, setMobileDropdown] = useState(false);

  const handleOnError = (e) => {
    e.target.src = DefaultFace;
  }


  const handleDropdown = () => {
    setDropdown(!showDropdown);
  }

  const handleMobileDropdown = () => {
    setMobileDropdown(!showMobileDropdown);
  }




  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" onClick={handleMobileDropdown}> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>

          <a role="button" onClick={() => navigate("/")} className="navbar-brand">
            {/* <img src={Logo} alt="logo" /> */}
          </a> </div>

        <div className="navbar-collapse collapse in" id="bs-example-navbar-collapse-1" style={{ display: showMobileDropdown ? "block" : "none" }}>
          <ul className="nav navbar-nav navbar-right">
            <li style={{ padding: "13px 30px" }}><select value={context.locale} onChange={context.selectLanguage}>
              <option value='en'>English</option>
              <option value='te'>Telugu</option>
              <option value='hi'>Hindi</option>
            </select>
            </li>
            <li onClick={() => navigate("/")} className={currentPage == "home" ? "active" : ""}><a role="button">{formatMessage({ id: "header.home" })}</a></li>
            <li><a role="button" href='#titleVerificationServiceSec'>{formatMessage({ id: "header.verify" })}</a></li>
            <li onClick={() => navigate("/buy")} className={currentPage == "buy" ? "active" : ""}><a role="button">{formatMessage({ id: "header.buy" })}</a></li>
            <li onClick={() => navigate("/sell")} className={currentPage == "sell" ? "active" : ""}><a role="button">{formatMessage({ id: "header.sell" })}</a></li>
            <li><a role="button" href='#aboutSec'>{formatMessage({ id: "header.about" })}</a></li>

            {props.hasToken && (<li className="nav-icon"><a role="button"><i className="glyphicon glyphicon-bell hidden"></i><i className="zmdi zmdi-eye"></i> <span className="badge">4</span></a></li>)}
            {props.hasToken && (<li className="nav-icon"><a role="button"><i className="zmdi zmdi-notifications"></i> <span className="badge">3</span></a></li>)}
            {props.hasToken && (<li className="nav-icon"><a role="button"><i className="glyphicon glyphicon-heart"></i></a></li>)}

            {props.hasToken && (<li className="dropdown user-profile"> <a onClick={handleDropdown} role="button" style={{ backgroundColor: showDropdown ? "#080808" : "transparent" }}>
              <img src={props.profilePic} onError={handleOnError} width="100" height="100" />{props.name} <span className="caret"></span></a>
              <ul className="dropdown-menu" style={{ display: showDropdown ? "block" : "none" }}>
                <li><a role="button">{formatMessage({ id: "header.profile" })}</a></li>
                <li onClick={() => navigate("/account")}><a role="button">{formatMessage({ id: "header.properties" })}</a></li>
                <li><a role="button">{formatMessage({ id: "header.settings" })}</a></li>
                <li role="separator" className="divider"></li>
                <li><a role="button">{formatMessage({ id: "header.logout" })}</a></li>
              </ul>
            </li>)}
            {!props.hasToken && (<li>
              <a onClick={() => navigate("/sell")} role="button">{formatMessage({ id: "header.login" })}</a>
            </li>)}
            {!props.hasToken && (<li>
              <img src={DefaultFace} width="50" height="50" />
            </li>)}
          </ul>
        </div>

      </div>
    </nav >
  );
};

export default injectIntl(Header);