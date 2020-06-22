import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';

import {Header} from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import {
  TodaysDinner,
  TomorrowsDinner,
  GreenInfo,
  BlueInfo,
  LightBlueInfo,
  RedInfo,
  NumLikes,
} from '../components/Cards';
import {card_styles} from '../components/Cards.styles';

import firestore from '@react-native-firebase/firestore';

class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      meal: '',
      time: '',
    };
  }

  addMeal = () => {
    console.log('Variables:');
    console.log(this.state.date);
    console.log(this.state.meal);
    console.log(this.state.time);
    const ref = firestore().collection('meals');
    ref
      .add({
        date: this.state.date,
        meal: this.state.meal,
        time: this.state.time,
      })
      .then(() => {
        console.log('Sent!');
      });
    console.log('Added Meal:');
  };

  render() {
    return (
      <LinearGradient
        colors={['#FFFABD', '#F2CC8F', '#E2BC7F']}
        style={styles.container}>
        <Header
          backgroundColor="#E07A5F"
          centerComponent={{text: 'Requests', style: styles.headerText}}
        />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <RedInfo info="Enter new post" />

          <TextInput
            style={styles.formInput}
            placeholder="Enter Date"
            onChangeText={value => this.setState({date: value})}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Enter Meal"
            onChangeText={value => this.setState({meal: value})}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Enter Time"
            onChangeText={value => this.setState({time: value})}
          />
          <TouchableOpacity style={styles.formButton} onPress={this.addMeal}>
            <Text style={styles.formButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    likes: state.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),

    increaseLikes: () => dispatch({type: 'INC_LIKES'}),
    decreaseLikes: () => dispatch({type: 'DEC_LIKES'}),
  };
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
  formInput: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  formButton: {
    paddingHorizontal: 50,
    width: 300,
    borderRadius: 50,
    backgroundColor: '#1F487E',
    alignSelf: 'center',
    padding: 5,
    marginBottom: 10,
  },
  formButtonText: {
    textAlign: 'center',
    color: '#F4F1DE',
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
)(PostScreen);
