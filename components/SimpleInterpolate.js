import React from 'react'
import { Animated, Easing } from 'react-native'

class SimpleInterpolate extends React.Component {
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
      <Animated.View
        style={{
          opacity: this.state.fadeAnim,
          transform: [{
            translateX: this.state.fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0],
              easing: Easing.linear()
            })
          }]
        }}
      >
        {/* 0 : 150, 0.5 : 75, 1 : 0
        当opacity为0, translateY等于150
        当opacity为0.5, translateY等于75
        当opacity为1, translateY等于0 */}
        {
          this.props.children
        }
      </Animated.View>
    )
  }
}

export default SimpleInterpolate