import React from 'react'
import { Button } from 'react-native'
import TestComponent from './ButtonComponent'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <React.Fragment>
        <TestComponent/>
        <Button
          title="Go to Details"
          onPress={() =>
            navigate('Details', { name: 'Jane' })
          }
        />
      </React.Fragment>
    )
  }
}

export default HomeScreen
