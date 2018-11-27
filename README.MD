## Navigation options resolution

navigation只会查看其直接子节点的配置, 例如设置每组堆栈的tabBarLabel

```js

const StackA = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  }
)

const StackB = createStackNavigator(
  {
    List: {
      screen: ListScreen
    },
    User: {
      screen: UserScreen
    }
  }
)

StackA.navigationOptions = {
  tabBarLabel: '!',
};

StackB.navigationOptions = {
  tabBarLabel: 'Settings!',
};

const AppNavigator = createBottomTabNavigator(
  {
    A: StackA,
    B: StackB
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

```

### navigationOptions 与 defaultNavigationOptions

```js

// defaultNavigationOptions是navigator内部的默认选项
// navigationOptions是直接作用与navigator的选项

const HomeStack = createStackNavigator({ A }, {
  defaultNavigationOptions: {
    title: 'Welcome'
  }
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home!',
};
```

### 在包含TabNavigator选项设置标题

```js

const StackA = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  }
)

// 我们无法直接在HomeScreen设置标题
// AppNavigator只会选择直接子节点的配置
// createBottomTabNavigator是无法支持title的设置的
// headerTitle的设置在StackA上
StackA.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]

  return {
    headerTitle: routeName
  };
};

const StackB = createStackNavigator(
  {
    List: {
      screen: ListScreen
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    A: StackA,
    B: StackB
  },
  {
    initialRouteName: 'A'
  }
)
```

另外的方法, 直接针对Home, Details使用createStackNavigator创建堆栈, 外部的堆栈设置header为none

```js

const StackHome = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  }
)

const StackDetails = createStackNavigator(
  {
    Details: {
      screen: DetailsScreen
    }
  }
)

const StackA = createBottomTabNavigator(
  {
    Home: StackHome,
    Details: StackDetails
  },
)


const StackB = createStackNavigator(
  {
    List: {
      screen: ListScreen
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    A: StackA,
    B: StackB
  },
  {
    initialRouteName: 'A',
    defaultNavigationOptions: {
      header: null
    }
  }
)
```

### 隐藏特定屏幕的选项卡
