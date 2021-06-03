import React from 'react';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';
  
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const Header = () => {
    return (
        <View style={style.header}>
        <View style={{paddingBottom: 15}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'right'}}>
            Find your hostel
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>in </Text>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: COLORS.primary}}>
              Thailand
            </Text>
          </View>
        </View>
        <Icon name="person-outline" size={38} color={COLORS.grey} />
      </View>
    )
}

const style = StyleSheet.create({ 
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }
  });

export default Header;
