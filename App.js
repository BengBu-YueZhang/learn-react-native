import React, {Component} from 'react'
import { View, StyleSheet, Image, ScrollView, ImageBackground, Text } from 'react-native'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 'auto',
    paddingTop: 60
  }
})

export default class App extends Component {
  render() {
    const image = require('./assets/image.gif')
    return (
      <View style={styles.root}>
        <ScrollView>
          <View>
            {/* 本地图片 */}
            <Image
              source={image}
              style={{
                width: 400,
                height: 800
              }}
            />
            {/* 在线图片 */}
            <Image
              source={{
                uri: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201811/982575fd3b2e14f4476f22849008154c.jpg'
              }}
              style={{
                width: 200,
                height: 400
              }}
            />
          </View>
          {/* base64 */}
          <Image
            style={{
              width: 51,
              height: 51,
              resizeMode: 'contain',
            }}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
          <ImageBackground source={image} style={{width: '100%', height: 500}}>
            <Text>Hello</Text>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
