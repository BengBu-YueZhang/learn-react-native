import React from 'react'
import { Button, View, Text } from 'react-native'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount () {
    console.log(`Home DidMount`)
  }

  componentWillUnmount () {
    console.log(`Home WillUnmount`)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="Go to User"
          onPress={() =>
            navigate('User', { name: 'Jane' })
          }
        />
        <Button
          title="Go to Login 😢"
          onPress={() =>
            navigate('Login')
          }
        />
      </View>
    )
  }
}

export default HomeScreen
