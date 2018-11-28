
## 在RN应用中使用图片

### 使用本地图片

1. 使用require引入图片
2. 不要在图片的url中使用变量
3. check@2x.png, check@3x.png, require(check.png), 会自动区分ppi

### 使用原生目录下的图片

### 网络图片

1. 需要使用https链接的图片(有其他方法可以使用http)
2. 需要使用style指定图片的尺寸

```js

<Image
  source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
  style={{width: 400, height: 400}}
/>
```

### base64

同样需要手动指定图片的尺寸

### 相册图片

RN会自动处理图片的尺寸(具体的API, 具体看到的时候在去了解)

### Image的资源是一个对象

Image, source接受一个对象，uri为图片的路径

### 背景图片

```jsx

// 使用<ImageBackground>组件
// 需要制定宽高
<ImageBackground source={...} style={{width: '100%', height: '100%'}}>
  <Text>Inside</Text>
</ImageBackground>
```

