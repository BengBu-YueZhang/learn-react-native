import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

class MoveList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    this._init()
  }

  _init = async () => {
    let result = await fetch('http://api.douban.com/v2/movie/top250')
    let data = await result.json()
    this.setState({
      movies: data.subjects
    })
  }

  render () {
    return (
      <ScrollView>
        {
          this.state.movies.map(movie => {
            return (
              <View key={movie.id}>
                <View>
                  <Image
                    source={{
                      uri: movie.images.medium
                    }}
                    style={{
                      width: 100,
                      height: 200
                    }}
                  />
                </View>
                <View>
                  <Text>{ movie.title }</Text>
                  <Text>{ movie.year }</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}

export default MoveList
