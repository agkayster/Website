import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import cloud from "../assets/cloud.jpg";
import "./About.css";

const About = () => (
  <div>
    <Container>
      <h2 className="blueflame">BlueFlame at a glance.</h2>
      <Row className="about-section">
        <Col xs={12} sm={8} className="main-section">
          <p>
            Phasellus viverra est leo, id feugiat massa facilisis eget.
            Curabitur ultricies libero eget facilisis mollis. In sed tellus est.
            In sagittis erat in lobortis scelerisque. Maecenas turpis ipsum,
            efficitur sed libero ac, tincidunt imperdiet eros. Aliquam rhoncus
            convallis quam, id interdum tellus. Nulla scelerisque id eros nec
            ornare. Nam ullamcorper urna a arcu feugiat facilisis.
          </p>
        </Col>
        <Col xs={12} sm={4} className="sidebar-section">
          <Image src={cloud} />
          <p>
            Phasellus viverra est leo, id feugiat massa facilisis eget.
            Curabitur ultricies libero eget facilisis mollis. In sed tellus est.
            In sagittis erat in lobortis scelerisque. Maecenas turpis ipsum,
            efficitur sed libero ac, tincidunt imperdiet eros. Aliquam rhoncus
            convallis quam, id interdum tellus. Nulla scelerisque id eros nec
            ornare. Nam ullamcorper urna a arcu feugiat facilisis.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
