## header button

static navigationOptions为静态函数时, 可以自定义按钮的自定义行为

### headerBackTitle && headerTruncatedBackTitle

headerBackTitle && headerTruncatedBackTitle必须在原始的view中定义

#### headerBackTitle

IOS后退按钮的回退字符串

#### headerTruncatedBackTitle

当headerBackTitle的字符串不适合屏幕时, headerTruncatedBackTitle会替代headerBackTitle

### headerLeft

headerLeft可以接受React组件可以用来覆盖默认的回退按钮