import React from 'react'
import { Button } from 'react-native'

class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Home 😊"
        onPress={() =>
          navigate('Home', { name: 'Jane' })
        }
      />
    )
  }
}

export default UserScreen
