import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import LoadingScreen from "../screens/LoadingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

import MainTabNavigator from "./MainTabNavigator";

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Links: { screen: HomeScreen },
    Settings: { screen: HomeScreen }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: false,
      tabBarLabel: "Home",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-information-circle${focused ? "" : "-outline"}`
              : "md-information-circle"
          }
        />
      )
    }
  }
);

const WelcomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen
});

const AppNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Welcome: WelcomeNavigator,
  Home: MainTabNavigator
});

const App = createAppContainer(AppNavigator);

export default App;
