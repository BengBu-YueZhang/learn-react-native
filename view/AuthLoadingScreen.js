// 在本组件内进行身份验证
import React from 'react'
import { View, Text } from 'react-native'

function FakeAuth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false)
    }, 3000)
  })
}

class AuthLoadingScreen extends React.Component {

  componentDidMount () {
    this.auth()
  }

  auth = async () => {
    const result = await FakeAuth()
    this.props.navigation.navigate(result ? 'Home' : 'Login')
  }
  
  render () {
    return (
      <View>
        <Text>身份验证中👀……(身份验证加载屏)</Text>
      </View>
    )
  }
}

export default AuthLoadingScreen
