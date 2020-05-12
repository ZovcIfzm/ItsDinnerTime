
import * as React from 'react';

import { 

  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {card_styles} from './Cards.styles'

export function TodaysDinner(likes){
  return(
    <View style={card_styles.dinner}>
      <Text style={card_styles.dinnerText}>
        Today's Dinner {"\n"}
        Chicken Pesto Fettuccine Alfredo {"\n"}
        with Spinach & Bubble Tea {"\n"}
        6:30 - 7:30 
      </Text>
    </View>
  )
}

export function TomorrowsDinner(){
  return(
    <View style={card_styles.dinner}>
      <Text style={card_styles.dinnerText}>
        Tomorrow's Dinner {"\n"}
        Chicken and Mashed Potatoes {"\n"}
        with Green Beans & Bubble Tea {"\n"}
        6:00 - 7:00 
      </Text>
    </View>
  )
}

export function GreenInfo({info}){
  return(
    <View style={card_styles.greenInfoCard}>
      <Text style={card_styles.infoCardText}>
        {info}
      </Text>
    </View>
  )
}

export function RedInfo({info}){
  return(
    <View style={card_styles.redInfoCard}>
      <Text style={card_styles.infoCardText}>
        {info}
      </Text>
    </View>
  )
}

export function BlueInfo({info}){
  return(
    <View style={card_styles.blueInfoCard}>
      <Text style={card_styles.infoCardText}>
        {info}
      </Text>
    </View>
  )
}

export function LightBlueInfo({info}){
  return(
    <View style={card_styles.lightBlueInfoCard}>
      <Text style={card_styles.infoCardText}>
        {info}
      </Text>
    </View>
  )
}

export function NumLikes({info, numLikes}){
  return(
    <View style={card_styles.greenInfoCard}>
      <Text style={card_styles.infoCardText}>
        {info}{numLikes}
      </Text>
    </View>
  )
}