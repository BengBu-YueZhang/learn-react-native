## Animated

Animated支持View, Text, Image, ScrollView组件的动画

## 入门

```js

import React from 'react'
import { Animated } from 'react-native'

class SimpleFade extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000
      }
    ).start()
  }


  render () {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeAnim
        }}
      >
        {
          this.props.children
        }
      </Animated.View>
    )
  }
}

export default SimpleFade

```

## 缓动函数

通过制定Easing设置缓动函数

## 组合动画

1. Animated.delay()在给定延迟后开始动画。
2. Animated.parallel()同时启动多个动画。
3. Animated.sequence()按顺序启动动画，等待每一个动画完成后再开始下一个动画。
4. Animated.stagger()按照给定的延时间隔，顺序并行的启动动画。

## 合成动画值

😢 这段没看懂, 写的太简洁了

## 插值

使用interpolate, 通过输入值确定输出值。interpolate支持字符串映射, 比如 "0deg", "50%"

```js

import React from 'react'
import { Animated, Easing } from 'react-native'

class SimpleInterpolate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000
      }
    ).start()
  }

  render () {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeAnim,
          transform: [{
            translateX: this.state.fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0],
              easing: Easing.linear()
            })
          }]
        }}
      >
        {/* 0 : 150, 0.5 : 75, 1 : 0
        当opacity为0, translateY等于150
        当opacity为0.5, translateY等于75
        当opacity为1, translateY等于0 */}
        {
          this.props.children
        }
      </Animated.View>
    )
  }
}

export default SimpleInterpolate
```

## 跟踪动态值

```js

import React from 'react'
import { Animated } from 'react-native'

class SimpleDynamic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      a: new Animated.Value(0),
      b: new Animated.Value(0)
    }
  }

  componentDidMount () {
    const { a, b } = this.state
    Animated.timing(
      a,
      {
        toValue: 475,
        duration: 1000
      }
    ).start()
    /**
     * b动画的toValue根据a动画计算
     */
    Animated.timing(
      b,
      {
        toValue: this.state.a.interpolate({
          inputRange: [0, 475],
          outputRange: [0, 100]
        }),
        duration: 0
      }
    ).start()
  }

  render () {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: this.state.a,
          top: this.state.b
        }}
      >
        {
          this.props.children
        }
      </Animated.View>
    )
  }
}

export default SimpleDynamic
```

## 跟踪手势

> 见例子代码

## LayoutAnimation

> 见例子代码

## 后记

动画相关的内容, 用到在看吧
