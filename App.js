import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeWindStyleSheet } from "nativewind";
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

// Necessary to apply CSS correctly on the web version
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
            <Stack.Screen name="Basket" component={BasketScreen}
              options={{
                presentation: 'modal', 
                headerShown: false
              }}
            />
            <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false
              }}
            />
            <Stack.Screen name="Delivery" component={DeliveryScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}