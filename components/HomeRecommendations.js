import React from "react";

import { FlatList } from "react-native";
import { Text } from "native-base";

import Place from "./../components/Place";

import axios from "axios";

export default class HomeRecommendations extends React.Component {
  state = {
    places: [],
    KEY: "AIzaSyCSByTFzTOTbQO5F0s-ClqqSI0v4Q5_9Ok"
  };

  _renderItem = ({ item }) => (
    <Place title={item.name} categoryIcon={item.icon} icon={item.picture} />
  );
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <FlatList
        data={this.state.places}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

  getContent() {
    return axios
      .get("https://a6qd1c6fzl.execute-api.us-east-1.amazonaws.com/dev/hello")
      .then(res => {
        return res.data.places;
      });
  }

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
}
