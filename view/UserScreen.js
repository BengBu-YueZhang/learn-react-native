import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <Text>User</Text>
      </SafeAreaView>
    )
  }
}

export default UserScreen
