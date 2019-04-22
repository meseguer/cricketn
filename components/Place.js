import React, { Component } from "react";
import { Image } from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

export default class Place extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody>
          <Image
            source={{ uri: this.props.icon }}
            style={{ height: 200, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail source={require("./../assets/images/explore.png")} />
            <Body>
              <Text>{this.props.title}</Text>
              <Text note>"Best restaurant in Palma" - Rick Grimes</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>Positive :)</Text>
            </Button>
          </Left>
          <Right>
            <Text>0.3 KM</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
