import React from 'react'
import { Button } from 'react-native'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to User"
        onPress={() =>
          navigate('User', { name: 'Jane' })
        }
      />
    )
  }
}

export default HomeScreen
