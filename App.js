import React, {Component} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import SimpleFade from './components/SimpleFade'
import SimpleEasing from './components/SimpleEasing'
import SimpleInterpolate from './components/SimpleInterpolate'
import SimpleDynamic from './components/SimpleDynamic'
import SimpleEvent from './components/SimpleEvent'
import SimpleLayoutAnimation from './components/SimpleLayoutAnimation'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 'auto',
    paddingTop: 60
  },
  content1: {
    width: 375,
    height: 400,
    backgroundColor: 'powderblue'
  },
  content2: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15
  },
  content3: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow'
  },
  content4: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 15
  }
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView>
          <SimpleFade>
            <View style={styles.content1}></View>
          </SimpleFade>
          <SimpleEasing>
            <View style={styles.content2}></View>
          </SimpleEasing>
          <SimpleInterpolate>
            <View style={styles.content3}></View>
          </SimpleInterpolate>
          <SimpleDynamic>
            <View style={styles.content4}></View>
          </SimpleDynamic>
          <SimpleEvent/>
          <SimpleLayoutAnimation/>
        </ScrollView>
      </View>
    );
  }
}
