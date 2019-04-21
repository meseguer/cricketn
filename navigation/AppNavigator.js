import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: false
    }
  }
);

const WelcomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen
});

const AppNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Welcome: WelcomeNavigator,
  Home: MainNavigator
});

const App = createAppContainer(AppNavigator);

export default App;
