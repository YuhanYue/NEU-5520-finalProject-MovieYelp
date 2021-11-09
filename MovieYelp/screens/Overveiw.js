import React from 'react';
import styled from 'styled-components';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,
} from 'react-native'
export default class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            locationName: "NEU vancouver",
            locationIntroduction:"Northeastern, founded in 1898, is a global research university built on a tradition of engagement with the world."
        }
    }


    render() {
        return (
            <ScrollView>
                <Title>{this.state.locationName}</Title>
                <ScrollView
                    style={{
                        flexDirection: 'row',
                        height: '40%',
                        marginBottom: 10,
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {/*TODO: use FlatList to display images */}
                    <Image source={require('../assets/NEU.png')}
                        style={styles.image} />
                    <Image source={require('../assets/Scene1.jpeg')}
                        style={styles.image} />
                    <Image source={require('../assets/avatar.jpg')}
                        style={styles.image} />
                </ScrollView>
                <View style = {styles.locationIntroductionSection}>
                <Text>
                  {this.state.locationIntroduction}
                </Text>
                </View>
                <Text>Related Movies:</Text>
                {/* FlatList */}
                <View style={styles.relatedMoviesSection}>
                    <Text>The Mars</Text>
                    <Image></Image>
                </View>

                <View style={styles.relatedMoviesSection}>
                    <Text>IntelliJ</Text>
                    <Image></Image>
                </View>
            </ScrollView>
        );
    }
}


const Title = styled.Text`
  font-size: 25px;
  color: #b8bece;
  font-weight: 500;
  margin-bottom: 20;
  font-weight:bold;
`;


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
        marginBottom: 0
    },
    locationIntroductionSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
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
    relatedMoviesSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },


})
