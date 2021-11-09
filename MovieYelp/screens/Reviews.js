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
export default class Reviews extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
<View>
    <Text>
        This is a review
    </Text>
</View>
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
