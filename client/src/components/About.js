import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../css/vision-mission.css";

class About extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="vision-mission">
      <div className="container">
      <Fade left cascade>
      <div className="row">
        <div className="col-sm-12 col-md-6">
        <h1>Visi</h1>
        <blockquote>
        <Fade right cascade delay={1500}><div><p>Menjadi distributor business-to-business utama alat musik dan olahraga di Indonesia.</p></div></Fade>
          <footer>Gosyen & Sonus Perfectus</footer>
        </blockquote>
        </div>

        <div className="col-sm-12 col-md-6">
        <h1>Misi</h1>
        <blockquote>
          <Fade right cascade delay={1500}>
          <ul>
            <li>Menjaga kualitas, harga, dan ketersediaan produk sesuai dengan standar perusahaan.</li>
            <li>Menjalin hubungan baik dengan mitra pertokoan di seluruh Indonesia.</li>
            <li>Meningkatkan citra produk dengan promosi melalui media online.</li>
          </ul>
          </Fade>
          <footer>Gosyen & Sonus Perfectus</footer>
        </blockquote>
        </div>
      </div>
      </Fade>
      <Fade right cascade>
      <div className="row">
      <div className="col-sm-12">
        <h1>Nilai-Nilai Perusahaan</h1>
        <blockquote>
          <Fade right cascade delay={1000}>
          <ul>
            <li>Integritas -- menjamin seluruh produk yang kami jual</li>
            <li>Ramah -- berkomunikasi dengan baik dan benar pada seluruh klien kami</li>
            <li>Melayani -- berusaha semaksimal mungkin dalam memenuhi permintaan klien</li>
          </ul>
          </Fade>        
          <footer>Gosyen & Sonus Perfectus</footer>
        </blockquote>
      </div>
      </div>
      </Fade>

      </div>
      </div>
    )
  }
}

export default About;