import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReduxNavigation from './ReduxNavigation';
import { StartAppActions } from '../redux/StartApp';
import ReduxPersist from '../config/ReduxPersistConfig';



class AppContainer extends Component {
  constructor (...arg) {
    super(...arg);

    this.state = {};
  }
  componentDidMount () {
    //this.props.startApp();
  }

  render () {
    const { user } = this.props;
    return (
      <View style={styles.applicationView}>
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to auto dispatch actions within our component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    startApp: StartAppActions.startApp
  }, dispatch);
};

const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  }
});


export default connect(null, mapDispatchToProps)(AppContainer)
