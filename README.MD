## full-screen modal

> 全屏的模态框

### headerMode

headerMode设置为'none'时将开启全屏模式

### mode

mode为不同view之间的过渡效果(Android没有影响)

### 嵌套堆栈

> 嵌套堆栈内部的createStackNavigator的配置优于外部的配置

React Navigation会尝试在最近的导航上查找路径, 我们没有必要指定任何堆栈。Navigate从向上流动HomeScreen到MainStack，MainStack不能处理的路线MyModal，所以后来它流动起来RootStack它可以处理这条路线。

![image](https://reactnavigation.org/docs/assets/modal/tree.png)