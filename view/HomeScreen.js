import React from 'react'
import { Button, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount () {

    console.log(this.props.navigation.isFocused())

    // this.props.navigation.addListener(
    //   'didFocus',
    //   payload => {
    //     console.debug('didFocus');
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
    // console.log('Home componentDidMount')
  }

  componentWillUnmount () {
    // console.log('Home componentWillUnmount')
  }

  
  render() {
    const { push, navigate } = this.props.navigation;

    return (
      <View>
        <NavigationEvents
          onWillFocus={payload => console.log('will focus')}
          onDidFocus={payload => console.log('did focus')}
          onWillBlur={payload => console.log('will blur')}
          onDidBlur={payload => console.log('did blur')}
        />
        <Button
          title="Go to Push Details"
          onPress={() =>
            push('Details')
          }
        />
        <Button
          title="Go to Navigate Details"
          onPress={() =>
            navigate('Details')
          }
        />
      </View>
    )
  }
}

export default HomeScreen
