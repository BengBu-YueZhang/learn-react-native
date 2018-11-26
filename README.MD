## navigation

### navigate

navigate会跳转到新的路由页面, 但是如果您已经在该路由上，那么它将无济于事

### push

push方法则会在每一次调用的时候, 都会向导航堆栈添加一条新路径。


```js

const { navigate, push } = this.props.navigation;
return (
  <Button
    title="Go to Detail 🍎"
    onPress={() =>
      navigate('Detail')
    }
  />
  <Button
    title="Go to Detail 🍐"
    onPress={() =>
      push('Detail')
    }
  />
)
```

### goBack

goBack可以以编程的形式触发返回

### 返回第一页 ☝️

通常我们使用**navigate('Home')**返回首页, **navigate('Home')与push('Home')区别在于是否添加新的堆栈**。也可以通过**popToTop**返回到第一页



