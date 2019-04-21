import React, { Component } from "react";

import { Image } from "react-native";
import { View, H1, Text, Button } from "native-base";
import styled from "styled-components/native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

// const styles = StyleSheet.create({
//   mainContent: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "space-around"
//   },
//   image: {
//     width: 320,
//     height: 320
//   },
//   text: {
//     // color: "rgba(255, 255, 255, 0.8)",
//     backgroundColor: "transparent",
//     textAlign: "center",
//     paddingHorizontal: 16
//   },
//   title: {
//     fontSize: 22,
//     // color: "white",
//     backgroundColor: "transparent",
//     textAlign: "center",
//     marginBottom: 16
//   }
// });

// const slides = [
//   {
//     key: "somethun",
//     title: "Quick setup, good defaults",
//     text:
//       "React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!",
//     icon: "ios-images",
//     colors: ["#63E2FF", "#B066FE"],
//     picture: require("./../assets/images/welcome.png")
//   },
//   {
//     key: "somethun1",
//     title: "Super customizable",
//     text:
//       "The component is also super customizable, so you can adapt it to cover your needs and wants.",
//     icon: "ios-options",
//     colors: ["#A3A1FF", "#3A3897"],
//     picture: require("./../assets/images/learn.png")
//   },
//   {
//     key: "somethun2",
//     title: "No need to buy me beer",
//     text: "Usage is all free",
//     icon: "ios-beer",
//     colors: ["#29ABE2", "#4F00BC"],
//     picture: require("./../assets/images/find.png")
//   }
// ];

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
  state = {
    showRealApp: false
  };
  static navigationOptions = {
    header: null
  };
  _onDone = () => {
    console.log("Navigate away");
    const { navigate } = this.props.navigation;
    navigate("Home");
    // this.setState({ showRealApp: true });
  };
  render() {
    return <AppIntroSlider slides={slides} onDone={this._onDone} />;
    if (this.state.showRealApp) {
      return <App />;
    } else {
    }
  }
}
