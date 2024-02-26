import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainAppbar from './components/MainAppbar';
import Home from './screens/Home';
import Settings from './screens/Settings';
import ThemeContext from './context/ThemeContext';
import Styles from './Styles'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeContext.Provider value={true}>
      <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="light-content"/>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{header: (props) =>
            <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />           
            }}
          >
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeContext.Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
