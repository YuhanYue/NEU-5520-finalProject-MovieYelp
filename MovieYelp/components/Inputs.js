import React, {Component} from 'react'
import {View,
    StyleSheet,
    ScrollView,
}from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements'


class Inputs extends Component{
    state = {isFocused: false}

    onFoucusChange = () =>{
        this.setState({isFocused: true})
    }
    onChange
    render(){
        return(
            <View 
            style = {[styles.container, {borderColor: this.state.isFocused ? '#0779ef':'#eee'}]}>
                <Input
                onChangeText={this.onChanged}
                    placeholder = {this.props.name}
                    onFocus = {this.onFoucusChange}
                    inputContainerStyle = {styles.inputContainer}
                    inputSyle = {styles.inputText}
                    secureTextEnrty = {this.props.pass}
                    leftIcon = {
                        <Icon 
                            name={this.props.icon}
                            size={20}
                            color={this.state.isFocused ? '#0779e4':'grey'}
                            />
                    }
                    // onChangeText = {this.passTextToFather}
                    />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 50,
        borderRadius: 100,
        marginVertical:15,
        borderWidth: 3.5,
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        color:'#0779e4',
        fontWeight: 'bold',
        marginLeft: 5,
    }
});

export default Inputs;
// export {text};