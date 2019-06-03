import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ListView,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

var dimensions = require("Dimensions");
//获取屏幕的宽度
var { width } = dimensions.get("window");
import { px2dp, SCREEN_WIDTH } from '../utils';
export default class BorrowList extends Component {

    static defaultProps = {
        url: 'http://192.168.31.178:15515/getBorrowBook?id='
    };

    constructor(props) {
        super(props);
        //1.初始化ListView.DataSource数据源
        this.state = {
            data: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        }
    }

    //渲染完成，请求网络数据
    componentDidMount() {
        const url = this.props.url + this.props.userId;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                //解析json数据
                var json = response['res'];
                //更新状态机
                this.setState({
                    data: this.state.data.cloneWithRows(json),
                });
            })
            .catch((error) => {
                if (error) {
                    //网络错误处理
                    console.log('error', error);
                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.data}
                    //相当于Android中Adapter的getView 渲染每一个Item
                    renderRow={this.getView}/>
            </View>
        )
    }

    /**
     * renderRow中可以使用的参数(rowData, sectionID, rowID, highlightRow)
     * @param rowData
     * @returns {XML}
     */
    getView= (rowData) => {
        //这里返回的就是每个Item
        return (
            <TouchableOpacity activeOpacity={0.5}
                                onPress = { () => {
                this.props.navigate('BookDetails',{rowData:rowData});
            }}          >
                <View style={styles.item}>
                    {/*左边的图片*/}
                    <Image source={{uri: rowData.imageName}} style={styles.image}/>
                    <View style={styles.left}>
                        {/*右边的View*/}
                        <Text style={{marginTop: 15, color: '#333333'}}>{rowData.Book_name}</Text>
                        <Text style={{marginTop: 15, color: '#333333'}}>{rowData.Writer}</Text>
                        <View style={styles.content}>
                            <Text style={{flex: 1, textAlign: 'left'}}>{rowData.Pub_company}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    item: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e9e9e9',
        width: SCREEN_WIDTH,
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
