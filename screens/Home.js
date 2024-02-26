import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from './Styles'

export default function Home() {
    const isDarkMode = useContext(ThemeContext);
    console.log(isDarkMode);
    return (
    <View style={[Styles.container, isDarkmode ? Styles.dark : Styles.light]}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  )
};

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
*/

//export default Home;
