import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    DeviceEventEmitter 
} from 'react-native';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';
import {api} from '../../data/api';
export default class ChangePsw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
              userId:'15020520042',
              oldPassword: '',
              newPassword: '',
              repeatPassword:'',
              tos:false
            },
            sid:''
        }
    }
    componentDidMount () {
        let _that=this;
        AsyncStorage.getItem("id",function (err,result){
            if(err){
                alert(err)
                return;
            }
                if(result !== null){
                 _that.setState({sid:result});   
                }
        });
        // this.changeLogin = DeviceEventEmitter.addListener('logout',this.logout);
        // this.loginSucess = DeviceEventEmitter.addListener('login',this.login);
    }

    // logout = (mes) => {
    //     this.setState({
    //         isLogin:false
    //     });
    // }

    // login = (mes) => {
    //     this.setState({
    //         isLogin:true
    //     });
    // }
    handleValueChange(values) {
        console.log('handleValueChange', values)
        this.setState({ form: values })
      }
      jumpTo(route) {
          console.log(route)
          console.log(this.props.navigation)
          console.log(navigator)
          this.props.navigation.push(route)
      }

      changePsw = () => {
        // ToastAndroid.show('录入书籍数据成功', ToastAndroid.SHORT);
        // return;
        const {form,sid} = this.state;
        // if (psw !== repeatPsw) {
        //     ToastAndroid.show('两次输入的密码不正确', ToastAndroid.SHORT);
        //     return;
        // }
        const url = api.changePsw;
        postData = {
          newPassword:form.newPassword,
          oldPassword:form.oldPassword,
          id:sid
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
            ToastAndroid.show('修改密码成功，请重新登陆', ToastAndroid.SHORT);
            setTimeout(() => {this.props.navigation.goBack();},2000);
            AsyncStorage.clear((err) => {
                if (err){
                  alert(err);
                }else {
                    DeviceEventEmitter.emit('logout','退出登陆');
                }
              });
          }
          if(state === 3) {
            ToastAndroid.show('修改密码成功失败，请询问管理员', ToastAndroid.SHORT);
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
    // componentWillUnmount() {
    //     // 移除监听
    //     if (this.changeLogin) { this.changeLogin.remove(); }
    //     if (this.loginSucess) { this.loginSucess.remove(); }
    //   }
    render() {
        const { userId, tos, gender,oldPassword,newPassword,repeatPassword } = this.state.form
        return (
            // <View style={styles.container}>
                <GiftedForm
                    formName='signupForm'
                    openModal={this.jumpTo.bind(this)}
                    onValueChange={this.handleValueChange.bind(this)}
                >
                    <GiftedForm.TextInputWidget
                    name='userId'
                    title='学号'
                    placeholder=''
                    image={require('../../img/color/user.png')}
                    clearButtonMode='while-editing'
                    value={userId}
                    />
                    <GiftedForm.TextInputWidget
                    name='oldPassword'
                    title='旧密码'
                    placeholder='请输入旧密码'
                    clearButtonMode='while-editing'
                    secureTextEntry={true}
                    image={require('../../img/color/lock.png')}

                    value={oldPassword}
                    /> 
                    <GiftedForm.TextInputWidget
                    name='newPassword'
                    title='新密码'
                    placeholder=''
                    clearButtonMode='while-editing'
                    secureTextEntry={true}
                    image={require('../../img/color/lock.png')}
                    value={newPassword}
                    /> 
                    <GiftedForm.TextInputWidget
                    name='repeatPassword'
                    title='再次输入密码'
                    placeholder=''
                    clearButtonMode='while-editing'
                    secureTextEntry={true}
                    image={require('../../img/color/lock.png')}
                    value={repeatPassword}
                    />  
                    <GiftedForm.SubmitWidget
                    title='确认修改密码'
                    widgetStyles={{
                        submitButton: {
                        backgroundColor: '#4398ff',
                        }
                    }}
                    onSubmit ={() => {this.changePsw()}} />           
                    <GiftedForm.HiddenWidget name='tos' value={tos} />
                </GiftedForm>    
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
        marginBottom: 20
    }
});