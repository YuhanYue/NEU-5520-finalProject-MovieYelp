import React from "react";
import styled from "styled-components";
import { Image, Text, StyleSheet, View } from "react-native";

const CardUri = (props) => (
  <Container style={{ elevation: 100 }}>
    <Cover>
      <Image style={styles.coverImage} source={{ uri: props.image }} />
    </Cover>
    <Content>
      <Wrapper>
      <Text style={styles.title} > 🎬{props.caption}</Text>
        <View relatedMoviesWrapper>
        <Subtitle>📍{props.location}</Subtitle>
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
  color: grey;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Wrapper = styled.View`
  flex-direction: column;
  width:100%;
`;

const Container = styled.View`
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
  title:{
    color: "#3c4560",
    textAlign:"left",
    fontSize:15,
    width:170,
    fontWeight:"600",



  },
});
