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
export default class Record extends Component {
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
          <BorrowList userId={id} />
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
  }
});
