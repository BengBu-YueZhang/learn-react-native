import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'List',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <Text>List</Text>
      </SafeAreaView>
    )
  }
}

export default ListScreen
