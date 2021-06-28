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
- 配置tsconfig.json，配置baseUrl以及path

### 4. 导航器

- 导航器做了细分

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


#### 4.1 堆栈式导航器

- yarn add @react-navigation/stack
```js
import { NavigationContainer } from '@react-navigation/native';
//NavigationContainer 管理整个导航树，并包含导航状态，所有导航器必须放在其中

import { createStackNavigator } from '@react-navigation/stack';
// createStackNavigator 返回包含两个属性的对象的函数 Navigator（导航器） 和 Screen（界面）
// Navigator 的 screenOptions 配置属性  headerTitleAlign 标题位置，headerTitle 标题名字
// Screen 的 options 配置属性
```