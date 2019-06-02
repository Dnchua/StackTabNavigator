/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * TO LIST:
 *      1 管理员的功能和界面  完成管理员登陆功能20min,管理员界面有图
 *      2 个人信息编辑  完成个人信息编辑
 *      3 用户的注册    完成用户注册功能40min
 *      4 图书库存和分类的显示    bug:只能搜索一次/修改思路传递搜索结果给渲染列表
 *      5 修改密码，找回密码，书评和评分  完成修改密码和找回密码页面
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';

import Home from './src/Home/index';
import Record from './src/Record/Record';
import Mine from './src/Mine/Mine';
import Details from './src/Details';
import Login from './src/Mine/Login';
import BookDetails from './src/Search/bookDetails';
import Search from './src/Search';
import BookDe from './src/Screen/BookDetail/index';
import OnlineReader from './src/Screen/OnlineReader';
import TeacherLogin from './src/Screen/TeacherLogin/index';
import Signup from './src/Screen/Signup/index';
import AdminCenter from './src/Screen/AdminCenter/index';
import InsertBook from './src/Screen/AdminCenter/InsertBook';
import InfoCenter from './src/Screen/InfoCenter/index';
import ForgotPassword from './src/Screen/InfoCenter/ForgotPassword';
import ChangePsw from './src/Screen/InfoCenter/ChangePsw';
import Recommand from './src/recommand/Record';
import BookRating from './src/Screen/BookRating/index';
import PDFExample from './src/components/Pdfe';
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
const Tab = TabNavigator({
    //每一个页面的配置
    Home: {
        screen: Home,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '首页',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#3F51B5'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },
    Talk: {
        screen: Search,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '搜索图书',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#3F51B5'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '搜索图书',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./src/img/search.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Record: {
        screen: Record,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '借阅记录',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#3F51B5'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '借阅记录',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_shop_car.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#3F51B5'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#3F51B5',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});
/*
 * 初始化StackNavigator
 */
export default Navi = StackNavigator({
    Tab: {
        screen: Tab,
    },
    Details: {
        screen: Details,
    },
    Login: {
        screen: Login,
    },
    BookDetails: {
        screen: BookDetails,
    },
    appBookDetail: {
        screen: BookDe
    },
    appOnlineReader: {
        screen: OnlineReader
    },
    TeacherLogin : {
        screen: TeacherLogin
    },
    Signup : {
        screen: Signup
    },
    AdminCenter: {
        screen:AdminCenter
    },
    InsertBook: {
        screen:InsertBook
    },
    InfoCenter :{
        screen:InfoCenter
    },
    ForgotPassword :{
        screen:ForgotPassword
    },
    ChangePsw :{
        screen:ChangePsw
    },
    Recommand :{
        screen:Recommand
    },
    BookRating :{
        screen:BookRating
    },
    PDFExample :{
        screen:PDFExample
    }
});