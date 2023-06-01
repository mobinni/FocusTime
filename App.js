import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'andriod' ? StatusBar.currentHeight : 35,
    paddingLeft: 10,
    backgroundColor: colors.darkBlue
  }
  // text: {
  //   color: colors.white
  // }
});