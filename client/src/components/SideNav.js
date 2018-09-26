import React from 'react';
import styled from 'styled-components';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import SvgIcon from 'react-icons-kit';

import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';

class SideNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    
  }

  render() {
    const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

    const NavMain = {
      dashboard: { title: 'Dashboard', icon: ic_aspect_ratio },
      products: { title: 'Products', icon: ic_business_center },
      orders: { title: 'Orders', icon: ic_format_list_bulleted }
    };

    const testClick = props => {
      console.log("asd");
      <Redirect to="/asdasdasd" />
    }

    const BaseContainer = props =>
        <div
          style={{
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: 'Roboto',
            width: 240,
            ...props.style
          }}
        >
          { props.children }
        </div>;

    return (
      <SideNav
        highlightBgColor="#eee"
        defaultSelected="home"
        highlightColor="#E91E63"
        onItemSelection={ (id, parent) => {this.props.history.push("/" + id)} }
      >
      
        <Nav id="">
          <NavIcon><Icon20 icon={ ic_home } /></NavIcon><NavText> Home </NavText>
        </Nav>
        <Nav id="about">
          <NavIcon><Icon20 icon={ ic_business } /></NavIcon><NavText> Profil Perusahaan </NavText>
        </Nav>
        <Nav id="products">
          <NavIcon><Icon20 icon={ ic_business_center } /></NavIcon><NavText> Produk Kami</NavText>
        </Nav>

        {Object.keys(NavMain).map(key => {
          return (
            <Nav key={key} id={key}>
              <NavIcon><Icon20 icon={NavMain[key].icon} /></NavIcon>
              <NavText> {NavMain[key].title} </NavText>
            </Nav>
          );
        })}

      </SideNav>
    )
  }
}
    
export default withRouter(SideNavigation);