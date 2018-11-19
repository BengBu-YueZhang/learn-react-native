import React from 'react'
import { Button } from 'react-native'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Home"
        onPress={() =>
          navigate('Home', { name: 'Jane' })
        }
      />
    )
  }
}

export default DetailsScreen
