import React, { Component } from "react";

import { Image } from "react-native";
import { View, H1, Text, Button } from "native-base";
import styled from "styled-components/native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { AsyncStorage } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  }
});

const slides = [
  {
    key: "somethun",
    title: "Explore",
    text:
      "Explore your new city. \n Discover places to visit, eat and work from.",
    icon: "ios-images",
    image: require("./../assets/images/explore.png"),
    imageStyle: styles.image,
    backgroundColor: "#59b2ab"
  },
  {
    key: "somethun13",
    title: "Learn",
    text:
      "Settle smoothly. \n We provide you with key info about the local culture and goverment entities.",
    icon: "ios-images",
    image: require("./../assets/images/settle.png"),
    imageStyle: styles.image,
    backgroundColor: "#febe29"
  },
  {
    key: "somethun-dos",
    title: "Goes where you go.",
    text:
      "Whenever, wherever. \n We're meant to b... I mean, you'll get notified of any interesting places :)",
    icon: "ios-images",
    image: require("./../assets/images/alert.png"),
    imageStyle: styles.image,
    backgroundColor: "#22bcb5"
  },
  {
    key: "somethun1",
    title: "Buy me a bag of gummies",
    text: "Any donation you make will help me stay awake at 5PM. \n\n Thanks!",
    icon: "ios-images",
    image: require("./../assets/images/pay.png"),
    imageStyle: styles.image,
    backgroundColor: "#febe29"
  }
];

export default class Feature extends Component {
  static navigationOptions = {
    header: null
  };
  _onDone = async () => {
    await AsyncStorage.setItem("welcomeDone", "true");
    const { navigate } = this.props.navigation;
    navigate("Home");
  };
  render() {
    return <AppIntroSlider slides={slides} onDone={this._onDone} />;
  }
}
