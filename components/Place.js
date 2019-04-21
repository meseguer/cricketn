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
      <Card style={{ height: 400 }}>
        <CardItem cardBody>
          <Image
            source={require("./../assets/images/workspace.png")}
            style={{ height: 200, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
      // <Card style={{ flex: 0 }}>
      //   <CardItem>
      //     <Left>
      //       <Thumbnail source={{ uri: this.props.categoryIcon }} />
      //       <Body>
      //         <Text>{this.props.title}</Text>
      //         <Text note>April 15, 2016</Text>
      //       </Body>
      //     </Left>
      //   </CardItem>
      //   <CardItem>
      //     <Body>
      //       <Image
      //         source={{ uri: this.props.icon }}
      //         style={{ height: 200, width: "100%", flex: 1 }}
      //       />
      //       <Text>//Your text here</Text>
      //     </Body>
      //   </CardItem>
      //   <CardItem>
      //     <Left>
      //       <Button transparent textStyle={{ color: "#87838B" }}>
      //         <Icon name="logo-github" />
      //         <Text>1,926 stars</Text>
      //       </Button>
      //     </Left>
      //   </CardItem>
      // </Card>
    );
  }
}
