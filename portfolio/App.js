import Register from "./components/Register"
import Home from "./components/Home"
import DurFunction from "./components/DurationExercise";
import RepFunction from "./components/RepetitionExercise";
import Logs from "./components/Logs";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register Page' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Page' }} />
        <Stack.Screen name="Duration" component={DurFunction} options={{ title: 'Duration Exercise Page' }} />
        <Stack.Screen name="Repetition" component={RepFunction} options={{ title: 'Repetition Exercise Page' }} />
        <Stack.Screen name="Logs" component={Logs} options={{ title: 'Exercise Logs Page' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
