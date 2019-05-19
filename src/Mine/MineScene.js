/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */


import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl,AsyncStorage,ToastAndroid,DeviceEventEmitter } from 'react-native'

import { Heading2, Heading3, Paragraph } from '../widget/Text'
import { screen, system } from '../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../widget'


class MineScene extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_set_white.png')}
          onPress={() => {

          }}
        />
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_message_white.png')}
          onPress={() => {

          }}
        />
      </View>
    ),
    headerStyle: {
      backgroundColor: color.primary,
      elevation: 0,
      borderBottomWidth: 0,
    },
  })


  constructor(props) {
    super(props)

    this.state = {
      isRefreshing: false,
      id:''
    }
  }

  componentDidMount () {
    let _that=this;
    AsyncStorage.getItem("id",function (err,result){
        if(err){
            alert(err)
            return;
        }
        _that.setState({id:result});
    });
  }

  onHeaderRefresh() {
    this.setState({ isRefreshing: true })

    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 2000)
  }

  logout=()=>{
    AsyncStorage.clear((err) => {
      if (err){
        alert(err);
      }else {
        ToastAndroid.show('登出成功', ToastAndroid.SHORT);
        this.setState({id:''});
      }
    });
    DeviceEventEmitter.emit('logout','退出登陆');
  }

  changePsw = () => {
    this.props.navigate('ChangePsw')
  }

  gotoTeacher = () => {
    this.props.navigate('AdminCenter')
  }

  gotoInfoCenter = () => {
    this.props.navigate('InfoCenter')
  }
  
  renderCells() {
    let cells = []
    let dataList = this.getDataList()
    for (let i = 0; i < dataList.length; i++) {
      let sublist = dataList[i]
      for (let j = 0; j < sublist.length; j++) {
        let data = sublist[j]
        let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
        cells.push(cell)
      }
      cells.push(<SpacingView key={i} />)
    }

    return (
      <View style={{ flex: 1 }}>
        {cells}
      </View>
    )
  }


  
  renderHeader() {
    const {id} = this.state;
    return (
      <View style={styles.header}>
        <Image style={styles.avatar} source={require('../../img/mine/avatar.png')} />
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Heading2 style={{ color: 'white' }}>{id}</Heading2>
            <Image style={{ marginLeft: 4 }} source={require('../../img/mine/beauty_technician_v15.png')} />
          </View>
          <TouchableOpacity onPress={this.gotoInfoCenter}>
            <Paragraph style={{ color: 'white', marginTop: 4 }}>个人信息 ></Paragraph>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: color.paper }}>
        <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: '#3F51B5' }} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => this.onHeaderRefresh()}
              tintColor='gray'
            />
          }>
          {this.renderHeader()}
          <SpacingView />
          {this.renderCells()}
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={this.logout}>
                    <Text style={{color: 'white'}}>退出登陆</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={this.changePsw}>
                    <Text style={{color: 'white'}}>修改密码</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={this.gotoTeacher}>
                    <Text style={{color: 'white'}}>管理员功能</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

      </View>
    )
  }

  getDataList() {
    return (
      [
        [
          { title: '我的钱包', image: require('../../img/mine/icon_mine_wallet.png') },
          { title: '我的借阅', image: require('../../img/mine/icon_mine_balance.png') },
        ],
        [
          { title: '好友都在看什么', image: require('../../img/mine/icon_mine_friends.png') },
          { title: '我的评价', image: require('../../img/mine/icon_mine_comment.png') },
          { title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png') },
        ],
        [
          { title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png') },
          { title: '关于我们', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png') }
        ]
      ]
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
  icon: {
    width: 27,
    height: 27,
  },
  header: {
    backgroundColor: '#3F51B5',
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#51D3C6'
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
}
})


export default MineScene
