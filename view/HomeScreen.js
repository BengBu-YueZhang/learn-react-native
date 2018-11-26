import React from 'react'
import { Button } from 'react-native'

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Hello',
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: 'fuck',
      headerRight: (
        <Button 
          onPress={() => { navigation.navigate('Details') }}
          title="go Detail" />
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Details"
        onPress={() =>
          navigate('Details', { name: 'Jane' })
        }
      />
    )
  }
}

export default HomeScreen
