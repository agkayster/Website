import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../assets/blueflame.jpg";
import "mapbox-gl";
import { Col, Row } from "react-bootstrap";

const Container = styled.div`
  background-color: #191970;
`;

const Icon = styled.span`
  color: grey;
  margin-bottom: 5px;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
`;

const About = styled.h3`
  margin-top: 35px;
  text-decoration: underline;
  font-size: 25px;
  padding-right: 40px;
  color: white;
`;

const Paraabout = styled.p`
  font-size: 18px;
  color: grey;
  padding-right: 20px;
`;

const Navlinks = styled.h3`
  margin-top: 35px;
  text-decoration: underline;
  font-size: 25px;
  color: white;
`;

const Anchor = styled.div``;

const Locate = styled.h3`
  margin-top: 35px;
  text-decoration: underline;
  font-size: 25px;
  color: white;
  font-family: "Raleway", sans-serif;
`;

const Ooffice = styled.h3`
  margin-top: 35px;
  text-decoration: underline;
  font-size: 25px;
  color: white;
  font-family: "Raleway", sans-serif;
`;

const Paragraph = styled.p`
  color: grey;
  font-size: 15px;
  margin-bottom: 5px;
  font-family: "Merriweather", serif;
`;

const Map = styled.iframe``;

const Styles = styled.div`
  .aboutmerge {
    margin-right: 80px;
    font-family: "Raleway", sans-serif;
    @media (min-width: 320px) {
      margin-left: 20px;
    }
  }

  img {
    margin-bottom: 20px;
  }

  .twitter {
    margin-right: 10px;
    color: white;
  }

  .linkedin {
    margin-right: 10px;
    color: white;
  }

  .instagram {
    margin-right: 10px;
    color: white;
  }

  .facebook {
    margin-right: 10px;
    color: white;
  }

  .link {
    color: grey;
  }

  .navmerge {
    margin-right: 40px;

    font-family: "Raleway", sans-serif;
    @media (min-width: 320px) {
      margin-left: 10px;
    }
  }

  .locatemap {
    font-size: 20px;
    color: white;
  }

  .locatemerge {
    margin-left: 40px;
    @media (min-width: 320px) {
      margin-left: 10px;
    }
  }

  .office {
    margin-top: 35px;
    text-decoration: underline;
    font-size: 25px;
    color: white;
    font-family: "Raleway", sans-serif;
  }

  .officemerge {
    margin-left: 180px;

    @media (max-width: 420px) {
      margin-left: 10px;
    }

    @media (max-width: 360px) {
      margin-left: 10px;
    }

    @media (max-width: 320px) {
      margin-left: 10px;
    }
  }

  .mapmarkeralt {
    color: grey;
    margin-right: 5px;
  }

  .mobile {
    color: grey;
    margin-right: 5px;
  }

  .fax {
    color: grey;
    margin-right: 5px;
  }

  .email {
    color: grey;
    margin-right: 5px;
  }
`;

function Footer() {
  return (
    <Styles>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} className="aboutmerge">
            <About>About</About>
            <img src={image} width="100" height="80" alt="BlueFlame" />
            <Paraabout className="display-4">
              With over a decade of immense contribution to the information
              communication and technology sector, BlueFlame has continuously
              remained a benchmark for
              <br />
              excellence in Africa.
            </Paraabout>
            <span>
              <a href="https://www.twitter.com/blueflameengineering">
                <FontAwesomeIcon
                  icon={["fab", "twitter-square"]}
                  className="twitter"
                  size="2x"
                />
              </a>
              <a href="https://www.linkedIn.com/blueflameengineering">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="linkedin"
                  size="2x"
                />
              </a>
              <a href="https://www.instagram.com/blueflameengineering">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className="instagram"
                  size="2x"
                />
              </a>
              <a href="https://www.facebook.com/blueflameengineering">
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  className="facebook"
                  size="2x"
                />
              </a>
            </span>
          </Col>

          <Col xs={12} md={2} className=" navmerge">
            <Navlinks className="display-3">Links</Navlinks>
            <Anchor>
              <a className="link" href="/About">
                Who We Are
              </a>
            </Anchor>
            <Anchor>
              <a className="link" href="/Services">
                What We Do
              </a>
            </Anchor>
            <Anchor>
              <a className="link" href="/Projects">
                Our Projects
              </a>
            </Anchor>
            <Anchor>
              <a className="link" href="/Careers">
                Join Us
              </a>
            </Anchor>
            <Anchor>
              <a className="link" href="/Contact">
                Contact
              </a>
            </Anchor>
            <Anchor>
              <a className="link" href="/Contact">
                Privacy
              </a>
            </Anchor>
            <Anchor>
              <a className="link" href="/Contact">
                Terms of Use
              </a>
            </Anchor>
          </Col>

          <Col xs={12} md={2} className="locatemerge">
            <Locate className="display-3">Locate us</Locate>
            <div>
              <Map
                title="blueflame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6148604839427!2d3.4721313145628034!3d6.443473325876655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44c17434c33%3A0x90756bbc13b61dfc!2sGlendale%20Workspaces!5e0!3m2!1sen!2sng!4v1595318595786!5m2!1sen!2sng"
                frameborder="0"
                width="300"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></Map>
            </div>
            <Paragraph className="bfeoffices">
              <b>Head Office</b>
            </Paragraph>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "map-marker-alt"]}
                  className="mapmarkeralt"
                  size="1x"
                />
                Glendale WorkSpaces, Lekki Phase 1, Lagos.
              </Icon>
            </div>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "mobile"]}
                  className="mobile"
                  size="1x"
                />
                08022224537
              </Icon>
            </div>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "fax"]}
                  className="fax"
                  size="1x"
                />
                01-26700983
              </Icon>
            </div>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "at"]}
                  className="email"
                  size="1x"
                />
                info@blueflameengineering.com
              </Icon>
            </div>
          </Col>

          <Col xs={12} md={2} className="officemerge">
            <Ooffice className="display-3">Other Offices</Ooffice>
            <Paragraph className="bfeoffices">
              <b>BlueFlame Warri</b>
            </Paragraph>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "map-marker-alt"]}
                  className="mapmarkeralt"
                  size="1x"
                />
                4 Isaac John Street, Ikeja, Lagos.
              </Icon>
            </div>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "mobile"]}
                  className="mobile"
                  size="1x"
                />
                08022224537
              </Icon>
            </div>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "fax"]}
                  className="fax"
                  size="1x"
                />
                01-26700983
              </Icon>
            </div>
            <div>
              <Icon>
                <FontAwesomeIcon
                  icon={["fas", "at"]}
                  className="email"
                  size="1x"
                />
                warri@blueflameengineering.com
              </Icon>
            </div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Footer;
