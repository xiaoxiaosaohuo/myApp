/**
 * @desc [Redux dispatch & Navigation 传递组件]
 */
import React from 'react';
import {toJS} from "immutable";
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Router from '../routes';

// redux-aware smart component
function ReduxNavigationContainer (props) {
  const { dispatch, nav } = props;
  console.log(nav.toJS());
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav.toJS()
  });

  return <Router navigation={navigation} />;
}

const mapStateToProps = state => (
  {
    nav: state.get('nav')
  }
);
export default connect(mapStateToProps)(ReduxNavigationContainer);
