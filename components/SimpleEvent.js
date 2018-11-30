import React from 'react'
import { Animated, ScrollView, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    position: 'relative'
  },
  block: {
    width: 100,
    height: 100,
    margin: 20,
    backgroundColor: 'green'
  }
})

class SimpleEvent extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000
      }
    ).start()
  }

  render () {
    return (
      <React.Fragment>
        <Animated.View
          style={{
            transform: [{
              translateX: this.state.fadeAnim.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 100]
              })
            }]
          }}
          scrollEventThrottle={1}
        >
          <View style={styles.block}></View>
        </Animated.View>
        <Animated.ScrollView
          style={styles.root}
          scrollEventThrottle={1}
          onScroll={
            Animated.event(
              [
                { 
                  nativeEvent: {
                    contentOffset: {
                      x: this.state.fadeAnim
                    }
                  }
                }
              ]
            )
          }
          horizontal={true}>
          <View style={styles.block}></View>
          <View style={styles.block}></View>
          <View style={styles.block}></View>
          <View style={styles.block}></View>
          <View style={styles.block}></View>
        </Animated.ScrollView>
      </React.Fragment>
    )
  }
}

export default SimpleEvent
