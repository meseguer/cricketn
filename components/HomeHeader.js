import React, { Component } from "react";

import { View, Grid, Col, H1, Thumbnail } from "native-base";

import styled from "styled-components/native";

const HeaderView = styled(View)`
  height: 125;
`;

const TitleCol = styled(Col)`
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const SearchCol = styled(Col)`
  width: 10%;
  justify-content: center;
  align-items: center;
`;

export default class HomeHeader extends Component {
  render() {
    return (
      <HeaderView>
        <Grid>
          <TitleCol>
            <H1 style={{ width: "70%" }}>Welcome back, Ruben</H1>
          </TitleCol>
          <SearchCol>
            <Thumbnail
              small
              style={{ backgroundColor: "#b4c2d3" }}
              source={require("./../assets/images/search.png")}
            />
          </SearchCol>
        </Grid>
      </HeaderView>
    );
  }
}
