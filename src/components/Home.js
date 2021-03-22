import React from "react";
import styled from "styled-components";
import image from "../assets/city1.jpg";
import clips from "../assets/clips.jpg";
import docmgt from "../assets/docmgt.jpg";
import cloud from "../assets/cloud.jpg";
import training from "../assets/training_Cropped.jpg";
import datarec from "../assets/datarec.jpg";
import { Button, Card, Row, Col } from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";

// import { device } from "./device";

const Container = styled.div`
  max-width: 100%;
  width: auto !important;
  overflow-x: hidden !important;
`;

const ImageOne = styled.div`
  background: url(${image}) no-repeat fixed bottom;
  background-size: cover;
  margin-left: -15px;
  margin-right: -15px;
  color: #ccc;
  height: 105vh;
  position: relative;
  z-index: 0;
`;

const Overlay = styled.div`
  background-color: black;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const Cover = styled.div`
  overflow-y: scroll !important;
  scroll-behavior: smooth !important;
`;

const Title = styled.h1`
  display: flex;
  color: white;
  font-size: 100px;
  text-align: center;
  padding-top: 15%;
  position: absolute;
  z-index: 1;

  @media (max-width: 420px) {
    padding-top: 55%;
    font-size: 22px;
    margin-left: 55px;
  }

  @media (max-width: 375px) {
    padding-top: 55%;
    font-size: 20px;
    margin-left: 45px;
  }

  @media (max-width: 360px) {
    padding-top: 55%;
    font-size: 20px;
    margin-left: 45px;
  }

  @media (max-width: 320px) {
    padding-top: 55%;
    font-size: 18px;
    margin-left: 32px;
  }
`;

const Paragraph = styled.p`
  font-size: 30px;
  color: white;
  padding-top: 35%;
  text-align: center;
  position: absolute;
  z-index: 1;

  @media (max-width: 420px) {
    padding-top: 70%;
    font-size: 24px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 360px) {
    padding-top: 70%;
    font-size: 24px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 320px) {
    padding-top: 70%;
    font-size: 22px;
    text-align: center;
    margin-right: 60px;
    margin-left: 60px;
  }
`;

const More = styled.p`
  position: absolute;
  z-index: 1;
  padding-top: 40%;
  padding-left: 70%;

  @media (max-width: 420px) {
    padding-top: 110%;
  }

  @media (max-width: 360px) {
    padding-top: 110%;
  }

  @media (max-width: 320px) {
    margin-top: 180px;
    font-size: 18px;
    margin-right: 85px;
    padding-left: 41%;
  }
`;

const Learn = styled.a`
  color: white;
  text-align: center;
`;

const Arrow = styled.span`
  margin-left: 5px;
  @media (max-width: 320px) {
  }
`;

const ImageTwo = styled.div`
  background: url(${clips}) no-repeat fixed bottom;
  background-size: cover;
  margin-left: -15px;
  margin-right: -15px;
  color: #ccc;
  height: 55vh;
  position: relative;
  z-index: 0;
`;

const Title5 = styled.h5`
  margin-top: 75px;
  font-size: 40px;
  color: black;
  z-index: 1;
  font-family: "Merriweather", serif;

  @media (max-width: 420px) {
    font-size: 15px;
    margin-top: -5px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
    margin-top: -5px;
  }

  @media (max-width: 360px) {
    font-size: 15px;
    margin-top: -5px;
  }

  @media (max-width: 320px) {
    font-size: 15px;
    margin-top: inherit;
  }
`;

const Paragraph2 = styled.p`
  font-size: 20px;
  color: black;
  z-index: 1;

  @media (max-width: 420px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
  }

  @media (max-width: 360px) {
    font-size: 15px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
    padding-bottom: 0px;
  }
`;

const Projectview = styled.div`
  background-color: blue;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  margin-left: -15px;
  margin-right: -15px;

  @media (max-width: 360px) {
    width: 435px;
  }

  @media (max-width: 320px) {
    margin-top: inherit;
    width: 335px;
  }
`;

const Title3 = styled.h3`
  margin-top: 35px;
  font-size: 30px;
  margin-left: 380px;
  color: white;
  text-align: center;
  align-items: center;

  @media (max-width: 420px) {
    margin-top: -5px;
    text-align: center;
    margin-left: 265px;
    margin-right: 100px;
  }

  @media (max-width: 360px) {
    margin-top: -5px;
    text-align: center;
    margin-left: 180px;
    margin-right: -40px;
  }

  @media (max-width: 320px) {
    margin-top: -5px;
    text-align: center;
    margin-left: 220px;
    margin-right: -20px;
  }
`;

const Styles = styled.div`
  .intro {
    margin-left: 30px;

    @media (max-width: 420px) {
      margin-top: 30px;
    }

    @media (max-width: 375px) {
      margin-top: 25px;
      margin-left: 20px;
      margin-right: 15px;
    }

    @media (max-width: 360px) {
      margin-top: 30px;
    }

    @media (max-width: 320px) {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 15px;
    }
  }

  .colintro1 {
    @media (max-width: 320px) {
      margin-top: 5px;
    }
  }

  .colintro2 {
    @media (max-width: 420px) {
      margin-top: 10px;
    }

    @media (max-width: 375px) {
      margin-top: 10px;
    }
  }

  .colintro3 {
    @media (max-width: 420px) {
      margin-top: 10px;
    }

    @media (max-width: 375px) {
      margin-top: 10px;
    }

    @media (max-width: 360px) {
      margin-top: 10px;
    }

    @media (max-width: 320px) {
      margin-top: 10px;
    }
  }

  // Card styling //

  .imagesettings {
    height: 200px;
    width: 280px;

    @media (max-width: 420px) {
      width: 278px;
      margin-right: 15px;
    }

    @media (max-width: 375px) {
      width: 278px;
      margin-right: 15px;
    }

    @media (max-width: 320px) {
      width: 278px;
      margin-right: 15px;
    }
  }

  .card-settings1 {
    margin-top: 20px;
    margin-left: 25px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  .card-settings2 {
    margin-top: 20px;
    margin-right: 40px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  .card-settings3 {
    margin-top: 20px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  .card-settings4 {
    margin-top: 20px;
    margin-left: -15px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  // Project Container //
  .button-project {
    margin-top: 35px;
    border-radius: 2px;
    margin-left: 120px;

    @media (max-width: 420px) {
      margin-left: -280px;
      margin-right: -80px;
      margin-top: 110px;
      width: 150px;
    }

    @media (max-width: 375px) {
      margin-left: -295px;
      margin-right: -80px;
      margin-top: 110px;
      width: 150px;
    }

    @media (max-width: 360px) {
      margin-left: -220px;
      margin-right: -80px;
      margin-top: 110px;
      width: 150px;
    }

    @media (max-width: 320px) {
      margin-left: -220px;
      padding-left: -150px;
      margin-top: 110px;
      width: 150px;
    }
  }

  .projectmerge {
    margin-left: -180px;
    margin-right: -10px;

    @media (max-width: 420px) {
      margin-right: 10px;
    }

    @media (max-width: 375px) {
      margin-left: -180px;
      margin-right: -40px;
    }

    @media (max-width: 360px) {
      margin-right: 80px;
    }

    @media (max-width: 320px) {
      margin-left: -210px;
      margin-right: -10px;
    }
  }

  // Project Container ends //
`;

const Home = () => (
  <div>
    <NavBar />
    <Container fluid>
      <Jumbotron />
      <Styles>
        <ImageOne>
          <Overlay></Overlay>
          <Cover>
            <Title>Our Quality and Satisfaction Policy</Title>
            <Paragraph>
              "BlueFlame Engineering has been a household name in delivering
              quality ICT solutions that always exceeds the clients
              expectations."
            </Paragraph>
            <More>
              <Learn href="/About">
                Learn more<Arrow>→</Arrow>
              </Learn>
            </More>
          </Cover>
        </ImageOne>

        <ImageTwo>
          <Row className="intro">
            <Col xs={12} md={4} className="colintro1">
              <Title5>
                <b>What We Do</b>
              </Title5>
              <Paragraph2 className="display-4">
                <b>
                  BlueFlame has structured itself into various focused units in
                  order to deliver improved solutions and services to it's
                  customers.
                </b>
              </Paragraph2>
            </Col>

            <Col xs={12} md={4} className="colintro2">
              <Title5>
                <b>IT Infrastructure and Hardware Services</b>
              </Title5>
              <Paragraph2 className="display-4">
                <b>
                  BlueFlame has structured itself into various focused units in
                  order to deliver improved solutions and services to it's
                  customers.
                </b>
              </Paragraph2>
            </Col>

            <Col xs={12} md={4} className="colintro3">
              <Title5>
                <b>Software Services</b>
              </Title5>
              <Paragraph2 className="display-4">
                <b>
                  BlueFlame has structured itself into various focused units in
                  order to deliver improved solutions and services to it's
                  customers.
                </b>
              </Paragraph2>
            </Col>
          </Row>
        </ImageTwo>

        <Row>
          <Col xs={12} md={3}>
            <Card border="light" className="card-settings1">
              <Card.Img
                className="imagesettings"
                src={`${training}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Training</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3}>
            <Card border="light" className="card-settings2">
              <Card.Img
                className="imagesettings"
                src={`${cloud}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Cloud Services and Solutions</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3}>
            <Card border="light" className="card-settings3">
              <Card.Img
                className="imagesettings"
                src={`${docmgt}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Electronic Document Management Solution</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3}>
            <Card border="light" className="card-settings4">
              <Card.Img
                className="imagesettings"
                src={`${datarec}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Data Recovery</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Projectview>
          <div className="d-flex flex-row p-2 projectmerge">
            <div className="d-inline-flex flex-column p-2">
              <Title3>
                <b>Interested in seeing more of our projects?</b>
              </Title3>
            </div>

            <div className="d-inline-flex flex-column p-2">
              <Button className="button-project" href="/Projects" size="lg">
                See More
              </Button>
            </div>
          </div>
        </Projectview>
      </Styles>
    </Container>
  </div>
);

export default Home;

// {/* <div className="image-three">
//   <div className="overlay"></div>
//   <div className="container d-flex flex-row p-2">
//     <div className="d-inline-flex flex-column p-2">
//       <h3 className="display-3 column3">
//         <b>Electronic Document Management Solution</b>
//       </h3>
//       <p className="display-4 column4">
//         <b>
//           BlueFlame has structured itself into various focused units in order to
//           deliver improved solutions and services to it's customers.
//         </b>
//       </p>
//     </div>

//     <div className="d-inline-flex flex-column p-2">
//       <h3 className="display-3 column3">
//         <b>Cloud Services/Solutions</b>
//       </h3>
//       <p className="display-4 column4">
//         <b>
//           BlueFlame has structured itself into various focused units in order to
//           deliver improved solutions and services to it's customers.
//         </b>
//       </p>
//     </div>

//     <div className="d-inline-flex flex-column p-2">
//       <h3 className="display-3 column3">
//         <b>Software Development Training</b>
//       </h3>
//       <p className="display-4 column4">
//         <b>
//           BlueFlame has structured itself into various focused units in order to
//           deliver improved solutions and services to it's customers.
//         </b>
//       </p>
//     </div>
//   </div>
// </div>; */}
