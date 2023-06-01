import React from 'react';
import { View, Text, Stylesheet } from 'react-native'; 
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';

export const Focus = () => (
  <View style={styles.container}>

  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white
  }
})