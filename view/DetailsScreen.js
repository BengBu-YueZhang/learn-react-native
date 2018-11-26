import React from 'react'
import { Button } from 'react-native'

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'back',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
        />
      ),

    };
  };
  render() {
    const { push, navigate, popToTop } = this.props.navigation
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

export default DetailsScreen
