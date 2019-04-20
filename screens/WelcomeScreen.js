import React, { Component } from "react";

import { Container, View } from "native-base";

import Feature from "./../components/Feature";

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Feature />
        </View>
      </Container>
    );
  }
}
