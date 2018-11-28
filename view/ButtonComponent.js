import React from 'react'
import { View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

class TestComponent extends React.Component {
  render () {
    return (
      <View>
        <Button
          title="go Detail"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

export default withNavigation(TestComponent)
