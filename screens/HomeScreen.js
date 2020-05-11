import * as React from 'react';
import { 
  Image, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import {
  Header
} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import { MonoText } from '../components/StyledText';
import {connect} from 'react-redux';

import {TodaysDinner, TomorrowsDinner, InfoCard} from '../components/Cards';

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: ''
    };
  }
  componentDidMount(){
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    that.setState({
      date: month + '/' + date
    });
  }
  render(){
    return (
      <GestureRecognizer 
      style={styles.container}
      onSwipeLeft={this._onSwipeLeft}>
        <Header 
          backgroundColor='#E07A5F'
          centerComponent={{ text: "Home", style: styles.headerText}}
          rightComponent={{ text: this.state.date, style: styles.headerText }}
        >
        </Header>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                  require('../assets/images/bobaCropped.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <TodaysDinner></TodaysDinner>
            <TomorrowsDinner/>
            <InfoCard/>

          </View>
          
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Last updated 5:32pm</Text>
        </View>
      </GestureRecognizer>
    );
  }
  
  _onSwipeLeft = gestureState =>{
    this.props.navigation.navigate('Requests')
  }  
}

HomeScreen.navigationOptions = {
  header: null,
};

function mapStateToProps(state){
  return{
    counter:state.counter,
    //date:state.date
  }
}

function mapDispatchToProps(dispatch){
  return{
    increaseCounter: () => dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    //updateDate: () => dispatch({type: 'UPDATE_DATE'})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2CC8F',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#F4F1DE',
    paddingVertical: 5,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  header:{
    color: '#F2CC8F'
  },
  headerText:{
    color: '#F4F1DE',
    fontSize: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);