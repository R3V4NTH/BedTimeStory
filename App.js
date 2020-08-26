import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import { AppTabNavigator } from './components/AppTabNavigator'

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);