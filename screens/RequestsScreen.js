import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


import GestureRecognizer from 'react-native-swipe-gestures';

import {connect} from 'react-redux';

const fieldValue = '';


class RequestsScreen extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {text: ''};  
}  
  render(){
    return (
     <GestureRecognizer style={styles.container} onSwipeRight={this._onSwipeRight}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          
          <CookInfo></CookInfo>
          
          <Text style={styles.formLabel}>What is your request?</Text>
          <TextInput 
            style={styles.formInput}
            placeholder="your request"
            onChangeText={text => this.setState({text})}
          />

          <TouchableOpacity style={styles.formButton}>
            <Text style={styles.formButtonText}>Submit</Text>
          </TouchableOpacity>
          
          
          <OptionButton
            icon="md-school"
            label="Option 1"
          />

          <OptionButton
            icon="md-compass"
            label="Option 2"
            
          />

          <OptionButton
            icon="ios-chatboxes"
            label="Option 3"
          
            isLastOption
          />
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

function CookInfo(){
  return(
    <View style={styles.todaysDinner}>
      <Text style={styles.todaysDinnerLabel}> Today's Cook </Text>
      <Text style={styles.todaysDinnerText}> Gordan Ramsey </Text>
      <Text style={styles.todaysDinnerLabel}> Today's Dinner </Text>
      <Text style={styles.todaysDinnerText}> Chicken Pesto Fettuccine Alfredo </Text>
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
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
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
  todaysDinner:{
    borderColor: '#E07A5F',
    borderWidth: 1,
    borderRadius: 25,
    padding: 7,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  todaysDinnerLabel:{
    fontSize: 20,
    color: 'rgba(116,120,129, 1)',
  },
  todaysDinnerText:{
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(RequestsScreen);