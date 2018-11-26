import React from 'react'
import { View, Button } from 'react-native'

class SignInScreen extends React.Component {

  Login = () => {
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <View>
        <Button onPress={this.Login} title="登录"/>
      </View>
    )
  }
}

export default SignInScreen
