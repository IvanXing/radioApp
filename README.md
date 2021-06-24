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