import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <Text>Home</Text>
        <Button
          title="go detail"
          onPress={() => navigate('Details')} 
        />
      </SafeAreaView>
    )
  }
}

export default HomeScreen
