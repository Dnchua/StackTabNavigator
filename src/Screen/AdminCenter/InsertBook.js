/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  AsyncStorage,
  DeviceEventEmitter
} from "react-native";
import {api} from '../../data/api';
var dimensions = require("Dimensions");
//获取屏幕的宽度
var { width } = dimensions.get("window");
export default class InsertBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      author: "",
      price: "",
      publish:"",
      bookCount:""
    };
  }

  getBookname = (bookName) => {
    this.setState({bookName});
  }

  getAuthor = (author) => {
    this.setState({author});
  }

  getPrice = (price) => {
    this.setState({price});
  }

  getPublish = (publish) => {
    this.setState({publish});
  }

  getBookCount = (bookCount) => {
    this.setState({bookCount});
  }

  insertBook = () => {
    // ToastAndroid.show('录入书籍数据成功', ToastAndroid.SHORT);
    // return;
    const {bookName,author,price,publish,bookCount} = this.state;
    // if (psw !== repeatPsw) {
    //     ToastAndroid.show('两次输入的密码不正确', ToastAndroid.SHORT);
    //     return;
    // }
    const url = api.addBook;
    postData = {
      bookName:bookName,
      author:author,
      price:price,
      publish:publish,
      bookCount:bookCount
    };
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var opts = {
      method: "POST", //请求方法
      body: JSON.stringify(postData), //请求体
      headers: myHeaders
    };
    fetch(url,opts)
    .then((response) => response.json())
    .then((response) => {
      const state = response['state'];
      if(state === 1) {
        ToastAndroid.show('图书录入数据成功，2秒后返回上一层菜单', ToastAndroid.SHORT);
        setTimeout(() => {this.props.navigation.goBack();},2000);
      }
      if(state === 3) {
        ToastAndroid.show('图书录入数据失败，请询问管理员', ToastAndroid.SHORT);
      }
    })
    .catch((error) => {
        if (error) {
            //网络错误处理
            console.log('error', error);
            ToastAndroid.show('网络错误', ToastAndroid.SHORT);
        }
    })
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "图书录入",
    //设置滑动返回的距离
    gestureResponseDistance: { horizontal: 300 },

    //是否开启手势滑动返回，android 默认关闭 ios打开
    // gesturesEnabled: true,

    //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
    headerBackTitle: null,
    //导航栏的样式
    headerStyle: styles.headerStyle,
    //导航栏文字的样式
    headerTitleStyle: styles.headerTitleStyle,
    //返回按钮的颜色
    headerTintColor: "white",

    //隐藏顶部导航栏
    // header: null,

    //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
    headerRight: <View />

    //设置导航栏左边的视图
    // headerLeft: (<View/>),
  });

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={"请输入书籍名称"}
          //输入框下划线
          underlineColorAndroid={"transparent"}
          onChangeText={this.getBookname}
        />
        {/*密码*/}
        <TextInput
          style={styles.textInput}
          placeholder={"请输入作者"}
          underlineColorAndroid={"transparent"}
          onChangeText={this.getAuthor}
        />
        {/*重复密码*/}
        <TextInput
          style={styles.textInput}
          placeholder={"请输入价格"}
          underlineColorAndroid={"transparent"}
          onChangeText={this.getPrice}
        />
        {/*身份证后六位*/}
        <TextInput
          style={styles.textInput}
          placeholder={"请输入出版社名称"}
          underlineColorAndroid={"transparent"}
          onChangeText={this.getPublish}
        />
        {/*身份证后六位*/}
        <TextInput
          style={styles.textInput}
          placeholder={"请输入书籍采购总量"}
          underlineColorAndroid={"transparent"}
          onChangeText={this.getBookCount}
        />
        {/*注册*/}
        <TouchableOpacity style={styles.btnStyle} onPress={this.insertBook}>
          <Text style={styles.loginText}>录入图书</Text>
        </TouchableOpacity>
        {/*无法登录  新用户*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'space-around',
    //设置次轴的对齐方式
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    width: 240,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4398ff"
  },
  headerStyle: {
    backgroundColor: "#3F51B5"
  },
  headerTitleStyle: {
    color: "white",
    //设置标题的大小
    fontSize: 18,
    //居中显示
    alignSelf: "center"
  },
  textInput: {
    height: 40,
    width: width,
    marginBottom: 5,
    backgroundColor: "white",
    textAlign: "center"
  },
  btnStyle: {
    height: 40,
    width: width - 32,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#4398ff",
    justifyContent: "center"
  },
  canNot: {
    width: width - 32,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    //设置主轴为两端对齐
    justifyContent: "space-between"
  },
  loginText: {
    textAlign: "center",
    color: "white",
    textAlignVertical: "center"
  }
});
