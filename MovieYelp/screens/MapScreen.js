import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'

import Card from '../components/Card';
import styled from 'styled-components';



export default class MapScreen extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView>
                 <TitleBar>
            
            <Avatar source={require('../assets/avatar.jpg')} />
      

          <Title>Welcome back,</Title>
          {/* this.username */}
          <Name>Yuhan</Name>
        
        </TitleBar>

        {/*Start your journey from... */}
            <View>
                {/* TODO:flatlist to fetch and display data */}
                <Subtitle style ={{paddingTop: 10}}>Starting your journey from...</Subtitle>
                <TouchableOpacity  style={styles.infoBox}>
                <Card
                    image={require("../assets/NEU.png")}
                    caption={'NEU Vancouver Campus'}
                    onPress
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.infoBox}>
                <Card
                    image={require("../assets/Scene1.jpeg")}
                    caption={'NEU Vancouver Campus'}
                    onPress
                />
                </TouchableOpacity>
            </View>
            </ScrollView>

        );
    }
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
    
        justifyContent: 'center',
        alignItems: 'center',
      },

      infoBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    

})
