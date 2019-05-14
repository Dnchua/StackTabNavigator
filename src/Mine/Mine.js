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
import MineScene from './MineScene';
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLogin:false,
        };
    }
    componentDidMount () {
        let _that=this;
        AsyncStorage.getItem("id",function (err,result){
            if(err){
                alert(err)
                return;
            }
                if(result !== null){
                 _that.setState({isLogin:true});   
                }
        });
        this.changeLogin = DeviceEventEmitter.addListener('logout',this.logout);
        this.loginSucess = DeviceEventEmitter.addListener('login',this.login);
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

    componentWillUnmount() {
        // 移除监听
        if (this.changeLogin) { this.changeLogin.remove(); }
        if (this.loginSucess) { this.loginSucess.remove(); }
      }
    render() {
        const {isLogin} = this.state;
        return (
            <View style={styles.container}>
                {isLogin ?   
                <MineScene />              
                :
                <View>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                        () => {
                            this.props.navigation.navigate('Login');
                        }
                    }>
                        <Text style={{color: 'white'}}>学生登陆</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                        () => {
                            this.props.navigation.navigate('Login');
                        }
                    }>
                        <Text style={{color: 'white'}}>教师登陆</Text>
                    </TouchableOpacity>                    
                </View>
                }
            </View>
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