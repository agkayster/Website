import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import image from "../assets/blueflame.jpg";
import "jquery";

const Styles = styled.div`
  .navbar {
    background-color: transparent;
    border-style: hidden;
    @media (max-width: 425px) {
      padding: 0.5rem 2rem 1rem 1rem;
      background-color: grey;
    }
  }

  .navbar.scrolled {
    background-color: #10caca !important;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  .dropdown:hover > .dropdown-menu {
    display: block;
  }
`;

const NavBar = () => {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect fixed="top" expand="lg">
          <Navbar.Brand href="/">
            <img src={image} width="100" height="80" alt="BlueFlame" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown
                renderMenuOnMount={true}
                title="Who We Are"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="/About">
                  BlueFlame at a glance
                </NavDropdown.Item>
                <NavDropdown.Item href="/Management">
                  Management
                </NavDropdown.Item>
                <NavDropdown.Item href="/Board">
                  Board of Directors
                </NavDropdown.Item>
                <NavDropdown.Item href="/Structure">
                  Our Structure
                </NavDropdown.Item>
                <NavDropdown.Item href="/Partners">Partners</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title="What We Do"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/Services">
                  Services brief
                </NavDropdown.Item>
                <NavDropdown.Item href="/EDMS">
                  Document Management Solution
                </NavDropdown.Item>
                <NavDropdown.Item href="/Software">
                  Software Solution
                </NavDropdown.Item>
                <NavDropdown.Item href="/Cloud">
                  Cloud Services
                </NavDropdown.Item>
                <NavDropdown.Item href="/Infrastructure">
                  IT Infrastructure
                </NavDropdown.Item>
                <NavDropdown.Item href="/Training">
                  Software Development Training
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title="Our Projects"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/SoftwareProjects">
                  Software Projects
                </NavDropdown.Item>
                <NavDropdown.Item href="/HardwareProjects">
                  Hardware Projects
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link href="/Careers">Join Us</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </>
  );
};

export default NavBar;
