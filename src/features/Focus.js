import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';

export const Focus = () => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
     <TextInput label="What would you like to focus on?" />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 25,
    justifyContent: 'top',
  },
  text: {
    color: colors.white,
  }
})