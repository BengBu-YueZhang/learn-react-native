## header bar

### 配置标题

> 使用静态属性navigationOptions

```js

static navigationOptions = {
  title: 'Home'
}
```

### navigationOptions中使用param

> navigationOptions由于是static属性, 在其内部是无法使用, 可以使用navigationOptions静态函数替代

```js

// navigation对象
// screenProps组件的props
// navigationOptions默认值ß
static navigationOptions = ({ navigation, screenProps, navigationOptions }) => {
  return {
    title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  }
}
```

### setParams

> setParams可以用来修改params

```js

navigation.setParams({ name: 'Updated!' })
```

### style

1. headerStyle 标题头的样式
2. headerTintColor 后退按钮以及标题的颜色
3. headerTitleStyle 标题的字体

### navigationOptions共享

defaultNavigationOptions可以用来设置navigationOptions全局共享配置。defaultNavigationOptions的优先级低于页面的navigationOptions

### 自定义组件替换标题

