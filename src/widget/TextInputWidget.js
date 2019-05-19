import React, { Component } from 'react';  
import {  
  StyleSheet,  
  View,  
  Text,  
  Image,  
  TextInput,  
  PixelRatio,  
  Dimensions  
} from 'react-native'  
  
  
var screenWidth = Dimensions.get('window').width;  
  
  
export default class TextInputWidget extends Component{  
  
    constructor(props) {  
      super(props);  
    }  
  
  _renderRow() {  
    return (  
      <View style={styles.rowContainer}  >  
        <View style={styles.row}>  
          <Text  
            numberOfLines={1}  
            style={styles.textInputTitle} >  
            {this.props.title}  
          </Text>  
          <View style={styles.textImage}>  
            <Image source={require('../img/mine/icon_userreview_defaulttavatar.png')} style={styles.image} />  
          </View>  
          <View style={styles.rightArrow}>  
            <Image source={require('../img/public/cell_arrow.png')}  />  
          </View>  
        </View>  
      </View>  
    );  
  
  }  
  
  render() {  
    return this._renderRow();  
  }  
}  
  
const styles = StyleSheet.create({  
    rowContainer: {  
      backgroundColor: '#FFF',  
      width:screenWidth,  
    },  
    row: {  
      flexDirection: 'row',  
      height: 44,  
      alignItems: 'center',  
      marginRight: 15,  
      marginLeft: 15,  
      //paddingTop:15,  
      borderBottomWidth: 0.5 / PixelRatio.get(),  
      borderColor:'gray',//需要标色  
  
    },  
    textInputTitle: {  
      width: 80,  
      fontSize: 13,  
      //color: '#333',  
      //backgroundColor: 'red',  
    },  
    textImage: {  
      flex: 1,  
      height: 44,// @todo should be changed if underlined  
      justifyContent:'flex-end',  
      flexDirection: 'row',  
  
    },  
    image:{  
      width:38,  
      height:38,  
      backgroundColor:'gray',  
      borderRadius: 19,  
    },  
    rightArrow:{  
      paddingLeft:10,  
      //backgroundColor:'red',  
  
    }  
  
  });  