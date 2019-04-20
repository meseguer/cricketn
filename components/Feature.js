import React, { Component } from "react";

import { Image } from "react-native";
import { View, H1, Text, Button } from "native-base";

export default class Feature extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Image
          style={{ width: 250, height: 250 }}
          source={require("./../assets/images/welcome.png")}
        />
        <H1>Header One</H1>
        <Text>
          Cricketn is a information-feed system for Digital Nomads designed to
          help you smooth the transition to your new city.
        </Text>
        <Button primary style={{ backgroundColor: "black" }}>
          <Text> Primary </Text>
        </Button>
      </View>
    );
  }
}
