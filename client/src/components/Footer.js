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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <iframe id="map-container" style={{border: 0}} frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUwPS3aoCai4Rh7_wYaGmL9E&key=AIzaSyCxJTdCItj6VFzkvZK2JTDV-SR0QVa3-0Y" >
            </iframe>
        </div>
        <div className="social-networks">
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Gosyen Sonus Perfectus </p>
        </div>
    </footer>
    )
  }
}

export default Footer;