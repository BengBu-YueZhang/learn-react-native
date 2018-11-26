import React from 'react'
import { Button } from 'react-native'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details'
  };
  render() {
    const { push, navigate, popToTop } = this.props.navigation
    return (
      <React.Fragment>
        <Button
          title="Go to Home 😊"
          onPress={() =>
            push('Home')
          }
        />
        <Button
          title="Go to Home 😄"
          onPress={() =>
            navigate('Home')
          }
        />
        <Button
          title="Go to popToTop 😄"
          onPress={() =>
            popToTop()
          }
        />
      </React.Fragment>
    )
  }
}

export default DetailsScreen
