import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';

import {Header} from 'react-native-elements';

import GestureRecognizer from 'react-native-swipe-gestures';

import {connect} from 'react-redux';

import {BlueInfo} from '../components/Cards';
import {card_styles} from '../components/Cards.styles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
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
          <BlueInfo info="Enter Username and Password" />

          <TextInput
            style={styles.formInput}
            placeholder="Enter Username"
            onChangeText={text => this.setState({username: text})}
          />

          <TextInput
            style={styles.formInput}
            placeholder="Enter Password"
            onChangeText={text => this.setState({password: text})}
          />

          <TouchableOpacity
            style={styles.formButton}
            onPress={() => this.submitCred()}>
            <Text style={styles.formButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }

  _onSwipeRight = gestureState => {
    this.props.navigation.navigate('Home');
  };

  submitCred = () => {
    this.props.submitCredUser(this.props.username),
      this.props.submitCredPass(this.props.password);
  };
}

function Info({info}) {
  return (
    <View style={card_styles.infoCard}>
      <Text style={card_styles.infoCardText}>{info}</Text>
    </View>
  );
}

function RequestInfo() {
  return (
    <View style={card_styles.requestCard}>
      <Text style={card_styles.infoCardText}>What is your request?</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    username: state.username,
    password: state.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitCredUser: username =>
      dispatch({type: 'SUBMIT_CRED_USER', payload: username}),
    submitCredPass: password =>
      dispatch({type: 'SUBMIT_CRED_PASS', payload: password}),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 15,
    flex: 1,
    justifyContent: 'center',
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
    padding: 0,
    margin: 0,
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  formButton: {
    marginTop: 10,
    paddingHorizontal: 50,
    width: 200,
    borderRadius: 50,
    backgroundColor: 'rgba(96,100,109, 0.1)',
    alignSelf: 'center',
  },
  formButtonText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'rgba(96,100,109, 1)',
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
)(LoginScreen);
