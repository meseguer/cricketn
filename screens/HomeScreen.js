import React, { Component } from "react";

import { Container, Content } from "native-base";

import Place from "./../components/Place";
import axios from "axios";

export default class CardShowcaseExample extends Component {
  state = {
    places: [],
    KEY: "AIzaSyCSByTFzTOTbQO5F0s-ClqqSI0v4Q5_9Ok"
  };

  async componentWillMount() {
    const places = await this.getContent();
    const detailedPlaces = await Promise.all(
      places.map(async place => {
        place.picture = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
          place.photos[0].photo_reference
        }&key=${this.state.KEY}`;
        this.state.KEY;
        return place;
      })
    );
    this.setState({ places: detailedPlaces });
  }

  static navigationOptions = {
    title: "Home: Mallorca"
  };

  render() {
    return (
      <Container>
        <Content>
          {this.state.places.map((place, index) => (
            <Place
              key={"place-" + index}
              title={place.name}
              categoryIcon={place.icon}
              icon={place.picture}
            />
          ))}
        </Content>
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
