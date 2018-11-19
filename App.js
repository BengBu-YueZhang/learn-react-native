import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'
import MoveList from './view/MoveList'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 'auto',
    paddingTop: 60
  }
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <MoveList/>
      </View>
    );
  }
}
