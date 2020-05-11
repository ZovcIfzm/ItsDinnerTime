import {StyleSheet} from 'react-native'

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
  requestCard:{
    backgroundColor: '#E07A5F',
    borderRadius: 10,
    paddingBottom: 7,
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
    width: 300,
  },
  infoCard:{
    backgroundColor: '#81B29A',
    borderRadius: 10,
    paddingBottom: 7,
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
    width: 300,
  },
  infoCardText:{
    fontSize: 17,
    color: '#F4F1DE',
    lineHeight: 24,
    textAlign: 'center',
  }
})