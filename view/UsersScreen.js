import React from 'react'
import { Button, View, Text } from 'react-native'

class FuckAngular extends React.Component {
  render () {
    return (
      <View>
        <Text>Fuck</Text>
      </View>
    )
  }
}

class UsersScreen extends React.Component {
  static navigationOptions = {
    title: 'Users',
    headerTitle: <FuckAngular/>
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Home"
        onPress={() =>
          navigate('Home')
        }
      />
    )
  }
}

export default UsersScreen
