import React from 'react';

import styled from 'styled-components';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import SvgIcon from 'react-icons-kit';

import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';

import "../css/sidenav.css";

class SideNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    
  }

  render() {
    const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

    const NavMusik = {
      cello: { category: 'Cello', subcategory: ["Cello Parts - Cello Strings", "Cello Parts - Cello Bow", "Cello Parts - Cello Bridge"] },
      cymbal: { category: 'Cymbal', subcategory: ["Cymbal - Brass Cymbal", "Cymbal Parts - Accesories", "Cymbal Parts - Felt", "Cymbal Parts - H/C Cymbal", "Cymbal Parts - S/B Cymbal", "Cymbal - Brass Alloy Cymbal", "Cymbal - Metal Alloy", "Cymbal Stands - Stand Cymbal Boom", "Cymbal Stands - Stand Cymbal Hi-Hat", "Cymbal Stands - Stand Cymbal Staright"] },
      drum: { category: 'Drum', subcategory: ["Drum Head", "Snare Drum", "Drum Parts - Wire", "Drum Parts - Bass Drum", "Drum Parts - Drum Pad", "Drum Parts - Drum Stick", "Drum Parts - Floor Tom", "Drum Parts - Key Drum", "Drum Parts - Drum Key", "Drum Parts - Small Bass", "Drum Parts - Tension", "Drum Parts - Lug", "Drum Parts - Ratchet", "Drum Parts - Tom Holder", "Drum Set - Bass Drum", "Drum Set - Drum Throne", "Drum Set - Junior", "Drum Set - Senior", "Drum Set Parts - Pedal Beater", "Drum Set Parts - Snare Drum", "Drum Parts - H/C Drum Stick", "Drum Parts - Ring Mute", "Drum Parts - S/B", "Drum Parts - Tas"] },
      guitar: { category: "Guitar", subcategory: ["Guitar - Classic", "Guitar - Jumbo", "Guitar - Junior", "Guitar - Okulele", "Guitar - Sayur", "Guitar - Tanduk", "Guitar Parts - Nylon", "Guitar Parts - Strings", "Guitar Parts - Cable", "Guitar Parts - Capo", "Guitar Parts - Strings", "Guitar Parts - Dryer", "Guitar Parts - Effect", "Guitar Parts - End Pin", "Guitar Parts - Foot Stool", "Guitar Parts - Grip", "Guitar Parts - Holder Pick", "Guitar Parts - Nut Guitar", "Guitar Parts - Pick", "Guitar Parts - Pin", "Guitar Parts - Polish", "Guitar Parts - Sound Hole Block", "Guitar Parts - Winder", "Guitar Stand", "Guitar Parts - Equalizer For Guitar", "Guitar Parts - G/S", "Guitar Parts - H/C", "Guitar Parts - S/B", "Guitar Parts - Semi H/C", "Guitar Parts - String Agnel" ] },
      keyboard: { category: "Keyboard", subcategory: ["Keyboard Parts - Piano", "Keyboard Parts - Sustain Pedal", "Keyboard Parts - Cover Key", "Keyboard Parts - Hard Case", "Keyboard Parts - S/B Keyboard", "Keyboard Parts - Semi Hard Case", "Keyboard Stand"] },
      marching: { category: "Marching", subcategory: ["Marching Band - Marching Bell", "Marching Band - Glockenspiel", "Marching Drum - Bass", "Marching Drum - Quartom", "Marching Drum - Snare", "Marching Drum - Trio Tom", "Marching Drum Parts - Strainer", "Marching Drum Parts - Snare Switch", "Marching Drum Parts - Tension Rod/Screw", "Marching Parts - Baut for Lug", "Marching Parts - Claw", "Marching Parts - Drat for Lug", "Marching Parts - Hardness", "Marching Parts - Ring Hoop", "Marching Band - Bass Beater Handled", "Marching Band - Stick Mayoret", "Marching Band - Sling", "Marching Band - Stick Bellyra", "Marching Band - Tenor Beater handled"] },
      others: { category: "Others", subcategory: ["Others - Jack Akay Mono Metal", "Others - Knop", "Others - Microphone", "Others - Music LED", "Others - Music Stand Book", "Others - Music Stand Organ", "Others - Potensio Mono", "Others - Soket Akay Mono Metal", "Others - Stand Keyboard", "Others - Stand Mic", "Others - Tuning Fork/Garputala", "Others - Mic Filter", "Others - Sponge", "Others - Conductor Baton", "Others - Desktop Microphone"] },
      percussion: { category: "Percussion", subcategory: ["Percussion - Bongo", "Percussion - Conga", "Percussion - Tambourine", "Percussion - Tumbuk Batu", "Percussion - Rebana", "Percussion - Cajon", "Percussion - Marawis Batik", "Percussion - Rototom", "Percussion - Tas Cajon", "Percussion - Barchime", "Percussion - Cabasa", "Percussion - Castanet", "Percussion - Cowbell", "Percussion - Egg Maracas", "Percussion - Latin Shaker", "Percussion - Wood Maracas"] },
      violin: { category: "Violin", subcategory: ["Violin - Biola", "Violin Parts - Chinrest Clamp", "Violin Parts - Chinrest Plastic", "Violin Parts - Chinrest Wood", "Violin Parts - Dryer Biola", "Violin Parts - Pitch Pipe", "Violin Parts - Polish", "Violin Parts - Shoulder Rest", "Violin Parts - Siongka Kotak", "Violin Parts - Steamer Biola", "Violin Parts - Tailgut", "Violin Parts - Tuner", "Violin Parts - Violin Bow", "Violin Parts - Violin Bridge", "Violin Parts - Adjustable Violin Stand", "Violin Parts - Shoulder Rest", "Violin Parts - Violin Strings", "Violin Parts - Violin Mute", "Violin Parts - Pick - Up"] },
      wind: { category: "Wind Instrument", subcategory: ["Wind Instrument - Harmonica Bee", "Wind Instrument - Harmonica Qimei", "Wind Instrument - Harmonica Swan Single", "Wind Instrument - HR Alto Saxophone", "Wind Instrument - HR Clarinet", "Wind Instrument - HR Flute", "Wind Instrument - HR Marching", "Wind Instrument - HR Mellophone", "Wind Instrument - HR Seruling", "Wind Instrument - HR Tenor Trombone", "Wind Instrument - Hr Trumpet", "Wind Parts - Cream for Saxophone", "Wind Parts - Universal Saxophone Stand", "Wind Parts - Harmonica Holder", "Wind Parts - Mouth Piece", "Wind Parts - Pianika Hose", "Wind Instrument - Pianika", "Wind Parts - Reeds Alto", "Wind Parts - Minyak Terumpet"] },
      ampli: { category: "Amplifier", subcategory: ["Ampli - Bass", "Ampli - Guitar", "Ampli - Keyboard"] },
    };

    const NavSports = {
      peluit: { category: "Peluit" },
      basket: { category: "Basket", subcategory: ["Basket - Papan", "Basket - Ring"] },
      bela: { category: "Bela Diri", subcategory: ["Bela Diri - Body Protector", "Bela Diri - Foot Protector", "Bela Diri - Hand Protector"] },
      billyard: { category: "Billyard" },
      bola: { category: "Bola Parts" },
      catur: { category: "Catur" },
      fitness: { category: "Fitness" },
      jogging: { category: "Jogging" },
      renang: { category: "Renang" },
      senam: { category: "Senam" },
      sport: { category: "Sport" },
      tinju: { category: "Tinju", subcategory: ["Tinju - Punching Pad", "Tinju - Samsak", "Tinju - Sarung Tinju"] },
    };

const SeparatorTitleContainer = styled.div`
    font-size: 14px;
    color: #AAA;
    margin: 5px 5px;
    padding: 0px 12px 0px;
`;
const SeparatorTitle = props => {
    return (
        <SeparatorTitleContainer>
            {props.children}
            <hr style={{ border: 0, borderTop: '1px solid #E5E5E5', marginTop: 5, marginBottom: 5 }} />
        </SeparatorTitleContainer>
    );
};

    return (
      
      <div className="sidenav">
      <SideNav
        highlightBgColor="#eee"
        defaultSelected="home"
        highlightColor="#E91E63"
        onItemSelection={ (id, parent) => {this.props.history.push("/" + id)} }
      >

      <Nav id="products/musik">
        <NavIcon><Icon20 icon={ ic_business_center } /></NavIcon><NavText> Produk Musik</NavText>
      </Nav>
      <SeparatorTitle></SeparatorTitle>

      {Object.keys(NavMusik).map(key => {
        
        if (NavMusik[key].subcategory) {
          return (
            <Nav key={key} id={"products/" + key}>
              <NavText> {NavMusik[key].category} </NavText>
              {NavMusik[key].subcategory.map(i => (
                <Nav key={i} id={i.toLowerCase()}>
                  <NavText> {i} </NavText>
                </Nav>
              ))}
            </Nav>
          ); 
        } else {
          return (
            <Nav key={key} id={"products/" + key}>
              <NavText> {NavMusik[key].category} </NavText>
            </Nav>
          );
        }
        
      })}
      
      <SeparatorTitle></SeparatorTitle>
      <Nav id="products/sports">
        <NavIcon><Icon20 icon={ ic_business_center } /></NavIcon><NavText> Produk Sports</NavText>
      </Nav>
      <SeparatorTitle></SeparatorTitle>

      {Object.keys(NavSports).map(key => {
        
        if (NavSports[key].subcategory) {
          return (
            <Nav key={key} id={"products/" + key}>
              <NavText> {NavSports[key].category} </NavText>
              {NavSports[key].subcategory.map(i => (
                <Nav key={i} id={i.toLowerCase()}>
                  <NavText> {i} </NavText>
                </Nav>
              ))}
            </Nav>
          ); 
        } else {
          return (
            <Nav key={key} id={"products/" + key}>
              <NavText> {NavSports[key].category} </NavText>
            </Nav>
          );
        }
          
      })}

      </SideNav>
      </div>
    )
  }
}
    
export default withRouter(SideNavigation);