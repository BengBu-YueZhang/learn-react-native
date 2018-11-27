import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const { push, navigate, popToTop } = this.props.navigation
    return (
      <SafeAreaView>
        <Text>Details</Text>
      </SafeAreaView>
    )
  }
}

export default DetailsScreen
