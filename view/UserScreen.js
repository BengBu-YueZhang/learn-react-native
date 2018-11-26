import React from 'react'
import { Button } from 'react-native'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };

  componentDidMount () {
    // this.props.navigation.addListener(
    //   'willFocus',
    //   payload => {
    //     console.debug('willFocus');
    //   }
    // )

    // this.props.navigation.addListener(
    //   'didFocus',
    //   payload => {
    //     console.debug('didFocus');
    //   }
    // )

    // this.props.navigation.addListener(
    //   'willBlur',
    //   payload => {
    //     console.debug('willBlur');
    //   }
    // )

    // this.props.navigation.addListener(
    //   'didBlur',
    //   payload => {
    //     console.debug('didBlur');
    //   }
    // )
    // console.log('User componentDidMount')
  }

  componentWillUnmount () {
    // console.log('User componentWillUnmount')
  }

  render() {
    const { push, navigate } = this.props.navigation

    return (
      <React.Fragment>
        <Button
          title="Go to Push Home 😄"
          onPress={() =>
            push('Home')
          }
        />
        <Button
          title="Go to Navigate Home 😄"
          onPress={() =>
            navigate('Home')
          }
        />
        <Button
          title="Go to Navigate Detail 😄"
          onPress={() =>
            navigate('Details')
          }
        />
      </React.Fragment>
    )
  }
}

export default DetailsScreen
