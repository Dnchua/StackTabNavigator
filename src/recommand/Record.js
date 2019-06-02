import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  DeviceEventEmitter
} from "react-native";
import BorrowList from "./BorrowList";
export default class Recommand extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "推荐列表",
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
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      id: ""
    };
  }
  componentDidMount() {
    let _that=this;
    AsyncStorage.getItem("id",function (err,result){
        if(err){
            alert(err)
            return;
        }
            if(result !== null){
             _that.setState({isLogin:true,id:result});   
            }
    });
    this.changeLogin = DeviceEventEmitter.addListener('logout',this.logout);
    this.login = DeviceEventEmitter.addListener("login", this.login);
  }

  login = (id) => {
    this.setState({
      isLogin: true,
      id: id
    });
  };

  logout = (mes) => {
    this.setState({
        isLogin:false,
        id:""
    });
  }

  componentWillUnmount() {
    // 移除监听
    if (this.changeLogin) { this.changeLogin.remove(); }
    if (this.loginSucess) { this.loginSucess.remove(); }
  }

  render() {
    const { isLogin, id } = this.state;
    return (
      <View style={styles.container}>
        {isLogin ? (
          <BorrowList userId={id} navigate={this.props.navigation.navigate}/>
        ) : (
            <View style={styles.containerB}>
              <Text style={{ color: "black" }}>该功能请登陆后使用</Text>
            </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  containerB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    width: 120,
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
  }
});
