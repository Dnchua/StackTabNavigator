import React from 'react';
import { Image, View, Text, StyleSheet, TouchableHighlight,ListView } from 'react-native';

import moment from 'moment';

import { px2dp, SCREEN_WIDTH } from '../utils';

export default class ResultItem extends React.PureComponent {

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.row}>
          <Text style={styles.title}>{this.props.Book_name}</Text>
          <Text style={styles.desc} numberOfLines={2}>{this.props.Brief}</Text>
        </View>
      </TouchableHighlight>
      // <TouchableHighlight activeOpacity={0.5} onPress = {this.props.onPress}>
      //     <View style={styles.row}>
      //         {/*左边的图片*/}
      //         <Image source={{uri: this.props.imageName}} style={styles.image}/>
      //         <View style={styles.left}>
      //             {/*右边的View*/}
      //             <Text numberOfLines={1} style={{marginTop: 15, color: '#333333'}}>{this.props.Book_name}</Text>
      //             <Text numberOfLines={1} style={{marginTop: 15, color: '#333333'}}>{this.props.Writer}</Text>
      //             <View style={styles.content}>
      //                 <Text  numberOfLines={1} style={{flex: 1, textAlign: 'left'}}>{this.props.Pub_company}</Text>
      //             </View>
      //         </View>
      //     </View>
      // </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    height: px2dp(250),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e9e9e9',
    width: SCREEN_WIDTH,
  },

  title: {
    fontSize: 18,
    color: '#000',
  },

  desc: {
    fontSize: 16,
  },
  item: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
},
image: {
    width: 90,
    height: 90,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
},
left: {
    flex: 1,
    marginLeft: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
},
//让 Text 水平方向充满容器
content: {
    marginTop: 15,
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
}
});
