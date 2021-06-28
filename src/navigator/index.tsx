import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  createStackNavigator, 
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
 } from '@react-navigation/stack';
// import Home from '@/pages/Home';
import BottomTabs from './BottomTabs'
import Detail from '@/pages/Detail';

export type RootStackParamList = {
  BottomTabs: undefined;
  Detail: {id: number};  //详情页传参
}

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float" //刷新标题栏位置 none float screen
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, //卡片滑动效果，左右
            gestureEnabled: true, // 安卓端手势效果默认关闭，打开
            gestureDirection: 'horizontal', // 手势水平方向，安卓默认上下，改成水平
          }}
        >
          <Stack.Screen 
            options={{
              headerTitleAlign: 'center',
              headerTitle: '首页'
            }} 
            name="BottomTabs" 
            component={BottomTabs} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;