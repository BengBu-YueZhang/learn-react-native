import React from 'react'
import { StyleSheet, View, LayoutAnimation } from 'react-native'

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'pink'
  }
})

class SimpleLayoutAnimation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      width: 100,
      height: 100
    }
  }

  componentDidMount () {
    setTimeout(() => {
      LayoutAnimation.spring();
      this.setState({
        width: this.state.width + 15,
        height: this.state.height + 15
      })
    }, 1000)
  }

  render () {
    return (
      <View style={{
        ...styles.root,
        width: this.state.width,
        height: this.state.height
      }}></View>
    )
  }
}

export default SimpleLayoutAnimation