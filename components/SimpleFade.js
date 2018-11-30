import React from 'react'
import { Animated } from 'react-native'

class SimpleFade extends React.Component {
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
        duration: 2000,
        useNativeDriver: true
      }
    ).start()
  }


  render () {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeAnim
        }}
      >
        {
          this.props.children
        }
      </Animated.View>
    )
  }
}

export default SimpleFade
