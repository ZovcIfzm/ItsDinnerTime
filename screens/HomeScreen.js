import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import {MonoText} from '../components/StyledText';
import {connect} from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';

import {
  TodaysDinner,
  TomorrowsDinner,
  RedInfo,
  GreenInfo,
  NumLikes,
} from '../components/Cards';

import firestore from '@react-native-firebase/firestore';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    that.setState({
      date: month + '/' + date,
    });
  }
  retrieveMeals() {
    const ref = firestore().collection('meals');
  }
  render() {
    return (
      <GestureRecognizer
        style={styles.container}
        onSwipeLeft={this._onSwipeLeft}>
        <LinearGradient
          colors={['#FFFABD', '#F2CC8F', '#E2BC7F']}
          style={styles.container}>
          <Header
            backgroundColor="#E07A5F"
            //leftComponent={{text: this.props.username, style: styles.headerText}}
            centerComponent={{text: 'Home', style: styles.headerText}}
            rightComponent={{text: this.state.date, style: styles.headerText}}
          />
          <ScrollView style={styles.container}>
            <View style={styles.welcomeContainer}>
              <Image
                source={require('../assets/images/bobaCropped.png')}
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              <View style={{flexDirection: 'row', flex: 3}}>
                <TouchableOpacity onPress={() => this.props.increaseLikes()}>
                  <GreenInfo info="Like" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.decreaseLikes()}>
                  <RedInfo info="Dislike" />
                </TouchableOpacity>
                <NumLikes info="Likes: " numLikes={this.props.likes} />
              </View>
              <TodaysDinner />
              <TomorrowsDinner />
              <GreenInfo info="Have a request? Swipe or press 'Requests' below to enter" />
            </View>
          </ScrollView>
          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>Last updated 5:32pm</Text>
          </View>
        </LinearGradient>
      </GestureRecognizer>
    );
  }

  _onSwipeLeft = gestureState => {
    this.props.navigation.navigate('Requests');
  };
}

HomeScreen.navigationOptions = {
  header: null,
};

function mapStateToProps(state) {
  return {
    counter: state.counter,

    likes: state.likes,
    username: state.username,
    password: state.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),

    increaseLikes: () => dispatch({type: 'INC_LIKES'}),
    decreaseLikes: () => dispatch({type: 'DEC_LIKES'}),
    //updateDate: () => dispatch({type: 'UPDATE_DATE'})
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
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
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
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
  header: {
    color: '#F2CC8F',
  },
  headerText: {
    color: '#F4F1DE',
    fontSize: 20,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
