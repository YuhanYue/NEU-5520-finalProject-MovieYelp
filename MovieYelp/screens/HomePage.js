/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 import React, { Component } from 'react';
 import {
   Text,
   View,
   StyleSheet,
   ScrollView,
   TouchableOpacity,
 } from 'react-native';
 
 import { PanResponder, Animated } from "react-native";

 
 
 class HomePage extends React.Component {
   static navigationOptions = {
       header: null
   };
   state = {
       pan: new Animated.ValueXY()
   };
 
   //_onPressbtn跳转事件
 
   componentWillMount() {
       // 设置手势的动作
       this._panResponder = PanResponder.create({
           // 将卡片同手势的移动而移动
           onMoveShouldSetPanResponder: () => true,
           onPanResponderMove: Animated.event([
               null,
               { dx: this.state.pan.x, dy: this.state.pan.y }
           ]),
           // 当移动结束后动画自动回到原始位置
           onPanResponderRelease: () => {
               Animated.spring(this.state.pan, {
                   toValue: { x: 0, y: 0 }
               }).start();
           }
       });
   }
   render() {
       return (
         <ScrollView contentContainerStyle={styles.contentContainer}>
<View>
               {/* Animated.View标签是使该View具备可以设置动画的能力 */}
               
                   {/* <Message
                       title="Chengdu - Nanjing"
                       // 如下的jpg可以设置自己喜欢的图片
                       image={require("./image/IMG_3867.jpeg")}
                       author="123"
                       text="piggy zjd"
                   /> */}
                   <TouchableOpacity style={styles.btnStyle}
 >
                     <Text> 👆查看更多 </Text>
 
                   </TouchableOpacity>
                   <Text>  </Text>
                   {/* <Message
                       title="Chengdu - Shenzhen"
                       // 如下的jpg可以设置自己喜欢的图片
                       image={require("./image/test.jpeg")}
                       author="123"
                       text="It's amazing"
                   /> */}
                   <TouchableOpacity style={styles.btnStyle}
 >
                     <Text> 👆查看更多 </Text>
 
                   </TouchableOpacity>
                   <Text>  </Text>
                   {/* <Message
                       title="Chengdu - Beijing"
                       // 如下的jpg可以设置自己喜欢的图片
                       image={require("./image/test.jpeg")}
                       author="123"
                       text="It's amazing"
                   /> */}
                   <TouchableOpacity style={styles.btnStyle}
 >
                     <Text> 👆查看更多 </Text>
 
                   </TouchableOpacity>
                   </View>
           
         </ScrollView>
       );
   }
 }
 
 export default HomePage;
 /*
 export default class HomeScene extends Component {
     render() {
         return (
                 <Cardview cardElevation={60}//官网都给CardView吗
                           maxCardElevation={2}
                           radius={20}
                           backgroundColor={'#99CCFF'}>
                     <View style={{padding:60}}>
                         <View>
                             <Text>CardView for iOS and Android</Text>
                         </View>
                         <View>
                             <Text>This is test</Text>
                         </View>
                     </View>
           </Cardview>
 
           
                 
         );
     }
 };
 */
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   contentContainer:{
       paddingVertical: 20
   },
   btnStyle: {//bottom
     height: 40,
     width:  300,
     borderRadius: 5,
     marginTop: 20,
     backgroundColor: '#FFCCCC',
     //沿主轴方向居中
     justifyContent: 'center',
   },
 });
 
