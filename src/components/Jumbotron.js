import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import desktop from "../assets/desktop.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${desktop}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 100vh;
    width: 110%;
    position: relative;
    z-index: -2;
    margin-bottom: 0px;

    @media (min-width: 320px) {
      width: 104.5%;
    }
  }

  .overlay {
    background-color: black;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .allow {
    padding-left: 5px;
    text-align: left;
    padding-top: 200px;
    font-size: 50px;
    color: white;
    z-index: -1;

    &:hover {
      color: white;
    }
  }

  p {
    padding-left: 5px;
    text-align: left;
    font-size: 30px;
    color: white;

    @media (min-width: 375px) {
      font-size: 25px;
    }
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 className="allow">Come on in.</h1>
        <p>Let's offer you our Solutions and Services</p>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
