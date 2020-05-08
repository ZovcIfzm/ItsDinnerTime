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

import { MonoText } from '../components/StyledText';


import {connect} from 'react-redux';




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
    var month = new Date().getMonth();
    var day = new Date().getDay();
    var hour = new Date().getHours();
    that.setState({
      date: date + month + '/' + day + ':' + hour
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <Header 
        backgroundColor='#F2CC8F'
        leftComponent={{ icon: 'menu', color: '#3D405B' }}
        centerComponent={{ text: this.state.date, style: { color: '#3D405B' } }}
        rightComponent={{ icon: 'home', color: '#3D405B' }}>
          <Text>Home</Text>
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

            <TodaysDinner/>

            <Text style={styles.getStartedText}>
              Have a request? Swipe to the next page to submit your request!
            </Text>
          </View>
          
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Last updated 5:32pm</Text>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function TodaysDinner(){
  return(
    <View>
      <Text style={styles.todaysDinner}>
        Today's Dinner {"\n"}
        Chicken Pesto Fettuccine Alfredo {"\n"}
        with Spinach & Bubble Tea {"\n"}
        6:30 - 7:30 
      </Text>
      <Text>
        {"\n"}
      </Text>
    </View>
  )
}

function DevelopmentModeNotice() {
  if (__DEV__) {

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. 
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}


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
    backgroundColor: '#F4F1DE',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
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
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  header:{
    color: '#F2CC8F'
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);