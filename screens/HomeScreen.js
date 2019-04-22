import React from "react";

import { Container, View, Text } from "native-base";

import HomeHeader from "./../components/HomeHeader";
import HomeRecommendations from "./../components/HomeRecommendations";

import axios from "axios";

export default class CardShowcaseExample extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <Container>
        <HomeRecommendations />
      </Container>
    );
  }
}
