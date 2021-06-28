### 1. 创建app

- npx react-native init radioApp --template react-native-template-typescript
- npx react-native run-ios
- npx react-native init radioApp --version X.XX.X


### 2. 引入多环境

- 插件网站： https://js.coach
- react-native-config / pod install /  import Config from "react-native-config";
- 根目录加.env文件，配置环境变量


### 3. 绝对路径

- 根目录创建src文件夹，并创建文件夹中文件
- babel-plugin-module-resolver
- yarn add --dev babel-plugin-module-resolver
- 配置babel.config.js， 配置模块名，根目录，目录对应写法

### 4. 导航器

- 官网： https://reactnavigation.org
- yarn add @react-navigation/native
- 原始项目 bare project，安装依赖
- yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```js
react-native-reanimated 动画库
react-native-gesture-handler 手势库
react-native-screens 用安卓和ios原生代码实现容器，提高导航性能
react-native-safe-area-context 异形屏的安全区域
react-native-community/masked-view 堆栈导航器依赖的库
```
- react-native-gesture-handler 手势库的安卓加配置
- 然后ios链接库，android加配置代码
