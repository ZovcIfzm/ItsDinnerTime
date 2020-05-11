
import * as React from 'react';

import { 

  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {card_styles} from './Cards.styles'

export function TodaysDinner(){
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

export function InfoCard(){
  return(
    <View style={card_styles.infoCard}>
      <Text style={card_styles.infoCardText}>
        Have a request? Swipe or press "requests" below to enter
      </Text>
    </View>
  )
}
