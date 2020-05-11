import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import {
  Header
} from 'react-native-elements'

import GestureRecognizer from 'react-native-swipe-gestures';

import {connect} from 'react-redux';


import {TodaysDinner, TomorrowsDinner, InfoCard} from '../components/Cards';
import {card_styles} from '../components/Cards.styles';


class RequestsScreen extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {text: ''};  
}  
  render(){
    return (
     <GestureRecognizer style={styles.container} onSwipeRight={this._onSwipeRight}>
       <Header 
          backgroundColor='#E07A5F'
          centerComponent={{ text: "Requests", style: styles.headerText}}
        ></Header>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          
          <Info info="Cook: Stanley Kubrick"/>
          <TodaysDinner/>
          <Info info="Cook: Stanley Kubrick"/>
          <TomorrowsDinner/>
          <RequestInfo/>
          
          <TextInput 
            style={styles.formInput}
            placeholder="Enter Request"
            onChangeText={text => this.setState({text})}
          />

          <TouchableOpacity style={styles.formButton}>
            <Text style={styles.formButtonText}>Submit</Text>
          </TouchableOpacity>
          
          <Info info="Text cook"/>
          
          <Info info="Email cook"/>
          
          <Info info="Enter Dinner Entry"/>

        </ScrollView>
      </GestureRecognizer>
    );
  }
  
  _onSwipeRight = gestureState =>{
    this.props.navigation.navigate('Home')
  }  
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
    </RectButton>
  );
}

function Info({info}){
  return(
    <View style={card_styles.infoCard}>
      <Text style={card_styles.infoCardText}>
        {info}
      </Text>
    </View>
  )
}

function RequestInfo(){
  return(
    <View style={card_styles.requestCard}>
      <Text style={card_styles.infoCardText}>
        What is your request?
      </Text>
    </View>
  )
}



function mapStateToProps(state){
  return{
    counter:state.counter
  }
}

function mapDispatchToProps(dispatch){
  return{
    increaseCounter: () => dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2CC8F',
  },
  contentContainer: {
    paddingTop: 15,
    alignItems: 'center',
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
    alignSelf: 'center',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
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
    width: 200,
    borderRadius: 50,
    backgroundColor: 'rgba(96,100,109, 0.1)',
    alignSelf: 'center'
  },
  formButtonText:{
    textAlign: 'center',
    color: 'rgba(96,100,109, 1)',
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