import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadScreen from '../screens/ReadScreen';
import WriteScreen from '../screens/WriteScreen';

export const TabNavigator = createBottomTabNavigator({
    Write: {screen: WriteScreen},
    Read: {screen: ReadScreen},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "Write"){
          return(
            <Image
            source={require("../assets/write.png")}
            style={{width:40, height:40}}
          />
          )
          
        }
        else if(routeName === "Read"){
          return(
            <Image
            source={require("../assets/read.png")}
            style={{width:40, height:40}}
          />)
          
        }
      }
    })
  }
  );
  
  const AppContainer =  createAppContainer(TabNavigator);
  