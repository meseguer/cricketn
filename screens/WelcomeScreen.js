import React, { Component } from "react";

import { Container, View } from "native-base";

import axios from "axios";
// import WelcomeSVG from "./../assets/images/welcome.svg";

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
          {/* <WelcomeSVG /> */}
        </View>
      </Container>
    );
  }

  getContent() {
    return axios
      .get("https://a6qd1c6fzl.execute-api.us-east-1.amazonaws.com/dev/hello")
      .then(res => {
        return res.data.places;
      });
  }
}
