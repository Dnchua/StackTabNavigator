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
export default class InfoCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
              fullName: '为四四',
              tos: false,
              academy:'电子信息工程',
              class_id:'51班',
              sex:'男',
              telephone:'18801000100',
              email:'111@163.com',
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
    // componentWillUnmount() {
    //     // 移除监听
    //     if (this.changeLogin) { this.changeLogin.remove(); }
    //     if (this.loginSucess) { this.loginSucess.remove(); }
    //   }
    render() {
        const { fullName, tos, gender,academy,class_id,sex,telephone,email } = this.state.form
        return (
            // <View style={styles.container}>
                <GiftedForm
                    formName='signupForm'
                    openModal={this.jumpTo.bind(this)}
                    // onValueChange={this.handleValueChange.bind(this)}
                >
                    <GiftedForm.TextInputWidget
                    name='fullName'
                    title='学生姓名'
                    placeholder=''
                    image={require('../../img/color/user.png')}
                    clearButtonMode='while-editing'
                    value={fullName}
                    />
                    <GiftedForm.TextInputWidget
                    name='academy'
                    title='学院'
                    placeholder=''
                    clearButtonMode='while-editing'
                    value={academy}
                    /> 
                    <GiftedForm.TextInputWidget
                    name='class'
                    title='班级'
                    placeholder=''
                    clearButtonMode='while-editing'
                    value={class_id}
                    /> 
                    {/* <GiftedForm.ModalWidget
                    title='性别'
                    displayValue='gender'
                    image={require('../../img/color/gender.png')}
                    > */}
                    {/* <GiftedForm.SeparatorWidget />

                    <GiftedForm.SelectWidget name='gender' title='Gender' multiple={false}>
                        <GiftedForm.OptionWidget image={require('../../img/color/female.png')} title='Female' value='F'/>
                        <GiftedForm.OptionWidget image={require('../../img/color/male.png')} title='Male' value='M'/>
                    </GiftedForm.SelectWidget>
                    </GiftedForm.ModalWidget> */}
                    <GiftedForm.TextInputWidget
                    name='sex'
                    title='性别'
                    placeholder=''
                    clearButtonMode='while-editing'
                    image={require('../../img/color/gender.png')}
                    value={sex}
                    /> 
                    <GiftedForm.TextInputWidget
                    name='telephone'
                    title='手机号码'
                    placeholder=''
                    clearButtonMode='while-editing'
                    image={require('../../img/color/contact_card.png')}
                    value={telephone}
                    />     
                    <GiftedForm.TextInputWidget
                    name='email'
                    title='邮箱'
                    placeholder=''
                    image={require('../../img/color/email.png')}
                    clearButtonMode='while-editing'
                    value={email}
                    />    
                    <GiftedForm.SubmitWidget
                    title='提交个人信息修改'
                    widgetStyles={{
                        submitButton: {
                        backgroundColor: '#4398ff',
                        }
                    }} />  
                    <GiftedForm.SubmitWidget
                    title='修改密码'
                    widgetStyles={{
                        submitButton: {
                        backgroundColor: '#4398ff',
                        }
                    }} />           
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