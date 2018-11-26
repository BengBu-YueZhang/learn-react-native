import React from 'react'
import { Button } from 'react-native'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('name')}`
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.navigation.setParams({ name: 'Updated!' })
    }, 3000)
  }

  render() {
    const { push, navigate, popToTop } = this.props.navigation
    return (
      <React.Fragment>
        <Button
          title="Go to Users"
          onPress={() =>
            navigate('Users')
          }
        />
      </React.Fragment>
    )
  }
}

export default DetailsScreen
