import AppleStore from "../../assets/images/appleStore.svg";
import GoogleStore from "../../assets/images/googleStore.svg";
import AwardImg from "../../assets/images/award-1.png";

const Footer = (props) => {

  return (
    <div>
      <footer className="megaFooter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <ul className="footerLinks">
                <li><a >About Us </a></li>
                <li><a >Contact</a></li>
                <li><a >Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-6">
              <ul className="footerLinks">
                <li><a >Buy</a></li>
                <li><a >Sell</a></li>
                <li><a >Title Verification Service</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-6">
              <h5 className="text-bold no-margin-top">Property on the Go</h5>
              <p>
                <a ><img src={AppleStore} alt="Apple" /></a>
                <a ><img src={GoogleStore} alt="Apple" /></a>
              </p>
            </div>
            <div className="col-md-3 col-xs-6">
              <h5 className="no-margin-top">Follow Us</h5>
              <a className="social-icon"><i className="zmdi zmdi-whatsapp"></i></a>
              <a className="social-icon"><i className="zmdi zmdi-facebook"></i></a>
              <a className="social-icon"><i className="zmdi zmdi-twitter"></i></a>
              <a className="social-icon"><i className="zmdi zmdi-youtube-play"></i></a>
              <a className="social-icon"><i className="zmdi zmdi-linkedin"></i></a>
            </div>

            <div className="row">
              <div className="col-md-9 col-xs-6">
                <h5 className="no-margin-top">Certifications &#38; Awards</h5>
                <img src={AwardImg} width="100" /></div>
              <div className="col-md-3 col-xs-4">
                <h5 className="no-margin-top">Address</h5>
                <p> SRJ CORNERSTONE LIMITED,<br />
                  100 Straight Rd,<br />
                  C03 9DH </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrightbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12"> © Copyright {new Date().getFullYear()} Right My Property </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;