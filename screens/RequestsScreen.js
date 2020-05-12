import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import {
  Header
} from 'react-native-elements'

import GestureRecognizer from 'react-native-swipe-gestures';

import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';


import {TodaysDinner, TomorrowsDinner, GreenInfo, BlueInfo, LightBlueInfo, RedInfo, NumLikes} from '../components/Cards';
import {card_styles} from '../components/Cards.styles';


class RequestsScreen extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {text: ''};  
}  
  render(){
    return (
     <GestureRecognizer style={styles.container} onSwipeRight={this._onSwipeRight}>
       
       <LinearGradient colors={['#FFFABD', '#F2CC8F','#E2BC7F']} 
        style={styles.container}>
        <Header 
            backgroundColor='#E07A5F'
            centerComponent={{ text: "Requests", style: styles.headerText}}
          ></Header>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            
            <LightBlueInfo info="Cook: Stanley Kubrick"/>
            
            <View style={{flexDirection: 'row', flex: 3}}>
              <GreenInfo info="Text cook"/>
              <GreenInfo info="Email cook"/>
            </View>
            <View style={{flexDirection: 'row', flex: 3}}>
              <TouchableOpacity onPress={() => this.props.increaseLikes()}>
                <GreenInfo info="Like"/>
              </TouchableOpacity >
              <TouchableOpacity onPress={() => this.props.decreaseLikes()}>
                <RedInfo info="Dislike"/>
              </TouchableOpacity>
              <NumLikes info="Likes: " numLikes={this.props.likes}/>
            </View>
            
            <TodaysDinner/>
            <TomorrowsDinner/>
            <RedInfo info="Please enter your request below"/>
            
            <TextInput 
              style={styles.formInput}
              placeholder="Enter Request"
              onChangeText={text => this.setState({text})}
            />

            <TouchableOpacity style={styles.formButton}>
              <Text style={styles.formButtonText}>Submit</Text>
            </TouchableOpacity>
            
            <LightBlueInfo info="Enter Dinner Entry"/>

          </ScrollView>
        </LinearGradient>
      </GestureRecognizer>
    );
  }
  
  _onSwipeRight = gestureState =>{
    this.props.navigation.navigate('Home')
  }  
}

function mapStateToProps(state){
  return{
    counter:state.counter,
    likes: state.likes
  }
}

function mapDispatchToProps(dispatch){
  return{
    increaseCounter: () => dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    
    increaseLikes: () => dispatch({type:'INC_LIKES'}),
    decreaseLikes: () => dispatch({type: 'DEC_LIKES'}),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  formLabel: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  formInput:{
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  formButton:{
    paddingHorizontal: 50,
    width: 300,
    borderRadius: 50,
    backgroundColor: '#1F487E',
    alignSelf: 'center',
    padding: 5,
    marginBottom: 10,
  },
  formButtonText:{
    textAlign: 'center',
    color: '#F4F1DE'
  },
  
  header:{
    color: '#F2CC8F'
  },
  headerText:{
    color: '#F4F1DE',
    fontSize: 20,
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(RequestsScreen);