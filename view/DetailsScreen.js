import React from 'react'
import { Button } from 'react-native'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
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
    // console.log('Detail componentDidMount')
  }

  componentWillUnmount () {
    // console.log('Detail componentWillUnmount')
  }

  render() {
    const { push, navigate } = this.props.navigation
    
    return (
      <React.Fragment>
        <Button
          title="Go to Push User 😄"
          onPress={() =>
            push('User')
          }
        />
        <Button
          title="Go to Navigate User 😄"
          onPress={() =>
            navigate('User')
          }
        />
      </React.Fragment>
    )
  }
}

export default DetailsScreen
