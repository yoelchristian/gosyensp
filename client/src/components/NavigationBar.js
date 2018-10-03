import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../css/navbar.css";

class NavigationBar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    
  }
  render() {
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

    return (
      <Navbar fixedTop collapseOnSelect className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a className="brand-text" href="/"><span className="brand-text"><img className="logo-brand" src={require("../images/logo1.png")} />Gosyen S. P</span></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer exact to="/about">
              <NavItem >
                <span className="glyphicon glyphicon-object-align-bottom"></span> Tentang Kami 
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer exact to="/">
              <NavItem >
                <span className="glyphicon glyphicon-home"></span> Home 
              </NavItem>
            </LinkContainer>
          </Nav>
          
          <Nav pullRight className="hidden-lg hidden-md">

            <NavDropdown title="Musik" id="basic-nav-dropdown">
            {Object.keys(NavMusik).map(key => {
          
              if (NavMusik[key].subcategory) {
                return (
                  <NavDropdown title={NavMusik[key].category} id={key}>
                    {NavMusik[key].subcategory.map(i => (
                      <LinkContainer to={"/products/" + key + "/" + i }>
                        <MenuItem> {i} </MenuItem>
                      </LinkContainer>
                    ))}
                  </NavDropdown>
                ); 
              } else {
                return (
                <LinkContainer to={"/products/" + key}>
                  <MenuItem> {NavMusik[key].category} </MenuItem>
                </LinkContainer>                );
              }
            })}
            </NavDropdown>

            <NavDropdown title="Olahraga" id="basic-nav-dropdown2">
            {Object.keys(NavSports).map(key => {
          
              if (NavSports[key].subcategory) {
                return (
                  <NavDropdown title={NavSports[key].category} id={key}>
                    {NavSports[key].subcategory.map(i => (
                      <LinkContainer to={"/products/" + key + "/" + i }>
                        <MenuItem> {i} </MenuItem>
                      </LinkContainer>
                    ))}
                  </NavDropdown>
                ); 
              } else {
                return (
                  <LinkContainer to={"/products/" + key}>
                    <MenuItem> {NavSports[key].category} </MenuItem>
                  </LinkContainer>
                );
              }
            })}
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;
