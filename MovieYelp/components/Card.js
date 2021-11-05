import React, { Component } from 'react'
import { TouchableNativeFeedback, Animated, Dimensions, StatusBar, View, Text} from 'react-native'

import CardView from 'react-native-cardview'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height + 50
class Card extends Component {
  render() {
    return (
      <View>
        <CardView
          cardElevation={10}
          cardMaxElevation={2}
          cornerRadius={5}>
          <Text>
            Elevation 0
          </Text>
        </CardView>
      </View>
    );
  }
}

export default Card;










