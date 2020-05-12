import {StyleSheet} from 'react-native'

  //https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f
export const card_styles = StyleSheet.create({
  dinner:{
    backgroundColor: '#3D405B',
    borderRadius: 10,
    paddingBottom: 7,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 13,
    elevation: 20,
    margin: 10,
    width: 350,
  },
  dinnerText:{
    fontSize: 17,
    color: '#F4F1DE',
    lineHeight: 24,
    textAlign: 'center',
  },
  greenInfoCard:{
    backgroundColor: '#81B29A',
    borderRadius: 10,
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
    margin: 5,
    padding: 10,
  },
  redInfoCard:{
    backgroundColor: '#E07A5F',
    borderRadius: 10,
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
    margin: 5,
    padding: 10,
  },
  lightBlueInfoCard:{
    width: 350,
    backgroundColor: '#1F487E',
    borderRadius: 10,
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
    margin: 5,
    padding: 10,
  },
  blueInfoCard:{
    backgroundColor: '#3D405B',
    borderRadius: 10,
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
    margin: 5,
    padding: 10,
  },
  infoCardText:{
    fontSize: 17,
    color: '#F4F1DE',
    lineHeight: 24,
    textAlign: 'center',
  }
})