import React from "react";
import styled from "styled-components";
import { Image, Text, StyleSheet, View } from "react-native";

const CardUri = (props) => (
  <Container style={{ elevation: 100 }}>
    <Cover>
      <Image style={styles.coverImage} source={{ uri: props.image }} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Wrapper>
        <Caption>{props.caption}</Caption>
        {/* <Subtitle>{props.subtitle}</Subtitle> */}
        <View relatedMoviesWrapper>
          {/* Fetch related movies as a flatList */}
          <Text style={styles.relatedMovies}>
            Related Movies: {props.relatedMovies}
          </Text>
          {/* <Text style={styles.relatedMovies}>Harry Potter</Text> */}
        </View>
      </Wrapper>
    </Content>
  </Container>
);

export default CardUri;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
  margin: 0 auto;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 400;
  left: 30;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Wrapper = styled.View`
  flex-direction: column;
`;

const Container = styled.View`
  text-align: center
  background: white;
  width: 350px;
  height: 280px;
  border-radius: 14px;
  margin: 5px 5px;
  margin-bottom: 20;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const styles = StyleSheet.create({
  movieTitle: {},
  coverImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  relatedMovies: {
    marginTop: 10,
    fontSize: 15,
    color: "#b8bece",
    textAlign: "left",
  },
  relatedMoviesWrapper: {
    flexDirection: "row",
    flex: 1,
  },
});
