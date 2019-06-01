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
export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
              userId:'',
              passport: '',
              newPassword: '',
              repeatPassword:'',
              tos:false
            }
        }
    }
    componentDidMount () {
        // let _that=this;
        // AsyncStorage.getItem("id",function (err,result){
        //     if(err){
        //         alert(err)
        //         return;
        //     }
        //         if(result !== null){
        //          _that.setState({isLogin:true});   
        //         }
        // });
        // this.changeLogin = DeviceEventEmitter.addListener('logout',this.logout);
        // this.loginSucess = DeviceEventEmitter.addListener('login',this.login);
    }

    logout = (mes) => {
        this.setState({
            isLogin:false
        });
    }

    login = (mes) => {
        this.setState({
            isLogin:true
        });
    }
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
      forgotPassword = () => {
        ToastAndroid.show('找回密码成功，请前往登陆', ToastAndroid.SHORT);
        setTimeout(() => {this.props.navigation.goBack();},2000);
      }
    // componentWillUnmount() {
    //     // 移除监听
    //     if (this.changeLogin) { this.changeLogin.remove(); }
    //     if (this.loginSucess) { this.loginSucess.remove(); }
    //   }
    render() {
        const { userId, tos, gender,passport,newPassword,repeatPassword } = this.state.form
        return (
            // <View style={styles.container}>
                <GiftedForm
                    formName='signupForm'
                    openModal={this.jumpTo.bind(this)}
                    // onValueChange={this.handleValueChange.bind(this)}
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
                    name='passport'
                    title='身份证后六位'
                    placeholder='******'
                    clearButtonMode='while-editing'
                    secureTextEntry={true}
                    image={require('../../img/color/lock.png')}
                    value={passport}
                    /> 
                    <GiftedForm.TextInputWidget
                    name='newPassword'
                    title='新密码'
                    placeholder='******'
                    clearButtonMode='while-editing'
                    secureTextEntry={true}
                    image={require('../../img/color/lock.png')}
                    value={newPassword}
                    /> 
                    <GiftedForm.TextInputWidget
                    name='repeatPassword'
                    title='再次输入密码'
                    placeholder='******'
                    clearButtonMode='while-editing'
                    secureTextEntry={true}
                    image={require('../../img/color/lock.png')}
                    value={repeatPassword}
                    />  
                    <GiftedForm.SubmitWidget
                    title='找回密码'
                    widgetStyles={{
                        submitButton: {
                        backgroundColor: '#4398ff',
                        }
                    }} 
                    onSubmit = {() => {
                        this.forgotPassword();
                    }}
                    />           
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