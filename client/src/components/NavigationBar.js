import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "../css/navbar.css";

const NavigationBar = () =>
<Navbar inverse fixedTop collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Gosyen S. P</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;

/* <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">Gosyen S. P</a>

    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services.html">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Portfolio
          </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              <a className="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog
          </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a className="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
              <a className="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
              <a className="dropdown-item" href="blog-post.html">Blog Post</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Other Pages
          </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a className="dropdown-item" href="full-width.html">Full Width Page</a>
              <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
              <a className="dropdown-item" href="faq.html">FAQ</a>
              <a className="dropdown-item" href="404.html">404</a>
              <a className="dropdown-item" href="pricing.html">Pricing Table</a>
            </div>
        </li>
      </ul>
    </div>
  </div>
</nav> */

export default NavigationBar;
