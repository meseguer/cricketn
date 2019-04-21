import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";

// import MainTabNavigator from './MainTabNavigator';

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));

const MainNavigator = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Home: { screen: HomeScreen }
    // Profile: { screen: ProfileScreen }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: false //{ visible: false }
    }
  }
);

const AuthenticationNavigator = createStackNavigator({
  Welcome: WelcomeScreen
});

const AppNavigator = createSwitchNavigator({
  /*
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  Welcome: AuthenticationNavigator,
  Home: HomeScreen
});

const App = createAppContainer(AppNavigator);

export default App;
