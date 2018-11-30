import React from 'react'
import { Animated } from 'react-native'

class SimpleDynamic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      a: new Animated.Value(0),
      b: new Animated.Value(0)
    }
  }

  componentDidMount () {
    const { a, b } = this.state
    Animated.timing(
      a,
      {
        toValue: 475,
        duration: 1000
      }
    ).start()
    /**
     * b动画的toValue根据a动画计算
     */
    Animated.timing(
      b,
      {
        toValue: this.state.a.interpolate({
          inputRange: [0, 475],
          outputRange: [0, 100]
        }),
        duration: 0
      }
    ).start()
  }

  render () {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: this.state.a,
          top: this.state.b
        }}
      >
        {
          this.props.children
        }
      </Animated.View>
    )
  }
}

export default SimpleDynamic