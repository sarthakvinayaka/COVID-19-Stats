import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Home from './Components/Home';
import Demographics from './Components/Demographics';
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    Home: { screen: Home }, 
    Demographics:{ screen: Demographics },
    //First entry by default be our first screen if we do not define initialRouteName
  
  },
  {
    initialRouteParams: 'Home',
  }
);
export default createAppContainer(App);