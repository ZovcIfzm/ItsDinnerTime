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

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    var that = this;

    const ref = firestore().collection('meals');
    var preData = [];
    ref.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        console.log('doc: ', documentSnapshot.data());
        preData = [...preData, documentSnapshot.data()];
      });
      that.setState({
        data: preData,
      });
      console.log('final');
      console.log(this.state.data);
      console.log('after final');
    });
  }
  retrieveMeals = () => {
    var that = this;
  };
  render() {
    return (
      <LinearGradient
        colors={['#FFFABD', '#F2CC8F', '#E2BC7F']}
        style={styles.container}>
        <Header
          backgroundColor="#E07A5F"
          //leftComponent={{text: this.props.username, style: styles.headerText}}
          centerComponent={{text: 'Home', style: styles.headerText}}
          rightComponent={{text: this.state.date, style: styles.headerText}}
        />
        <ScrollView
          data={this.state.data}
          keyExtractor={item => item.id}
          style={styles.container}>
          {this.state.data.map((item, key) => (
            <View key={key}>
              <GreenInfo info={'date: ' + item.date} />
              <GreenInfo info={'meal: ' + item.meal} />
              <GreenInfo info={'time: ' + item.time} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Last updated 5:32pm</Text>
        </View>
      </LinearGradient>
    );
  }
}

MealList.navigationOptions = {
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
)(MealList);
