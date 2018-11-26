import React from 'react'
import { Button, View, Text } from 'react-native'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const { navigation } = this.props
    return (
      <React.Fragment>
        <View>
          <Text>
            { navigation.getParam('name') }
          </Text>
        </View>
      </React.Fragment>
    )
  }
}

export default DetailsScreen
