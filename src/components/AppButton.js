import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

import colors from '../config/colors';
const PAGE_HEIGHT = Dimensions.get('window').height;
function AppButton({title, onPress, color = 'green', style}) {
  return (
    <TouchableOpacity
      style={[styles.button, style, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '40%',
    height: PAGE_HEIGHT / 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
