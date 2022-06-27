import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import GuessMyNumber from './GuessMyNumber';
import GamesScreen from './GamesScreen';
import GuessYourNumber from './GuessYourNumber';
import JanKenPon from './JanKenPon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline'; 
            } else if (route.name === 'Games') {
              iconName = focused ? 'rocket' : 'rocket-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Games" component={GamesScreen} />
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
        <Stack.Screen name="Guess My Number" component={GuessMyNumber} />
        <Stack.Screen name="Guess Your Number" component={GuessYourNumber} />
        <Stack.Screen name="Jan Ken Pon" component={JanKenPon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
