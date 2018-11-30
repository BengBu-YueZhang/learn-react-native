import React from 'react'
import { Animated, Easing } from 'react-native'

class SimpleEasing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      X: new Animated.Value(0),
      Y: new Animated.Value(0)
    }
  }

  componentDidMount () {
    const { X, Y } = this.state
    Animated.parallel([
      Animated.timing(
        X,
        {
          toValue: 475,
          duration: 1500,
          easing: Easing.linear()
        }
      ),
      Animated.timing(
        Y,
        {
          toValue: 812,
          duration: 1500,
          easing: Easing.bezier(0.5, -0.5, 1, 1)
        }
      )
    ]).start()
  }

  render () {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: this.state.X,
          top: this.state.Y
        }}
      >
        {
          this.props.children
        }
      </Animated.View>
    )
  }
}

export default SimpleEasing