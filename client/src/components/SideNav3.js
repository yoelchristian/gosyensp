import React, { Component } from "react";
import { SideNav, Nav } from 'react-sidenav'

class SideNavigation extends Component {

  render() {
    return (
      <SideNav defaultSelectedPath="1">
            <Nav id="1">Item 1</Nav>
            <Nav id="2">Item 2</Nav>
            <Nav id="3">Item 3</Nav>
        </SideNav>
    )
  }
}

export default SideNavigation;