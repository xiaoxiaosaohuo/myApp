import React, { Component } from 'react';

import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native'
import './config/ReactotronConfig';
import DebugConfig from './config/DebugConfig';
import AppContainer from './containers/AppContainer';
import createStore from './redux';


const store = createStore()
class App extends Component {
  render () {
      Reactotron.log('hello rendering world')
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

// 在开发模式下使用Reactotron的overlay
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
