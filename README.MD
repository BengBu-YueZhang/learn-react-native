## lifecycle

React生命周期方法仍然有效, 但是使用方式以及场景和Web端截然不同

## example1 🌰

> 使用navigate进行跳转时, 前一个路由的仍然安装在堆栈上，componentWillUnmount因此不会被调用。当返回Home时Detail与User发生卸载。

Home == navigate ==> Detail == navigate ==> User == navigate ==> Home

1. Home componentDidMount
2. Detail componentDidMount
3. User componentDidMount
4. Detail componentWillUnmount
   User componentWillUnmount

## example2 🌰

> 使用push进行跳转时, 因为会一直向堆栈中添加路由, 所以在没有返回时, 页面不会卸载。但返回时, 堆栈的最后一个路由将会发生卸载

Home == push ==> Detail == push ==> User == push ==> Home == push ==> Detail

1. Home componentDidMount
2. Detail componentDidMount
3. User componentDidMount
4. Home componentDidMount
5. Detail componentDidMoun

## example3 🌰

Home == navigate ==> Detail == navigate ==> User == navigate ==> Detail

1. Home componentDidMount
2. Detail componentDidMount
3. User componentDidMount
4. User componentWillUnmount

## 生命周期事件

1. willFocus 将要聚焦
2. willBlur 聚焦
3. didFocus 将要失焦
4. didBlur 失焦

### 添加事件监听

#### 使用addListener

这对我来说不起作用, 我目前还不知道原因

#### NavigationEvents

```js

<NavigationEvents
  onWillFocus={payload => console.log('will focus')}
  onDidFocus={payload => console.log('did focus')}
  onWillBlur={payload => console.log('will blur')}
  onDidBlur={payload => console.log('did blur')}
/>
```

#### withNavigationFocus

withNavigationFocus高阶组件，它将isFocusedprop 传递给一个包裹的组件




