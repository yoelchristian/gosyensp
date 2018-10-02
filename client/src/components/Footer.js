import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <footer id="myFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <li>Home</li>
                        <li>Sign up</li>
                        <li>Downloads</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li>Company Information</li>
                        <li>Contact us</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li>FAQ</li>
                        <li>Help desk</li>
                        <li>Forums</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <iframe id="map-container" style={{border: 0}} frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUwPS3aoCai4Rh7_wYaGmL9E&key=AIzaSyCxJTdCItj6VFzkvZK2JTDV-SR0QVa3-0Y" >
            </iframe>
        </div>
        <div className="social-networks">
            <a className="twitter"><i className="fa fa-twitter"></i></a>
            
            <a className="facebook"><i className="fa fa-facebook"></i></a>
            <a className="google"><i className="fa fa-google-plus"></i></a>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Gosyen Sonus Perfectus </p>
        </div>
    </footer>
    )
  }
}

export default Footer;