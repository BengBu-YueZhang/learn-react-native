import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <Text>Other</Text>
      </SafeAreaView>
    )
  }
}

export default OtherScreen
