import React, { Component } from "react";

import { Container, View } from "native-base";

import Feature from "./WelcomeScreen";

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Feature />
      </Container>
    );
  }
}
