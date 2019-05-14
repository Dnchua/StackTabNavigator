import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default class BookDetails extends Component {
    constructor(props) {
        super(props);
    }   

    render() {
        const rowData = this.props.navigation.state.params.rowData;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    {/*左边的图片*/}
                    <Image source={{uri: rowData.imageName}} style={styles.image}/>
                    <View style={styles.left}>
                        {/*右边的View*/}
                        <Text style={{marginTop: 15, color: '#333333'}}>书名： {rowData.Book_name}</Text>
                        <Text style={{marginTop: 15, color: '#333333'}}>作者： {rowData.Writer}</Text>
                        <View style={styles.content}>
                            <Text style={{flex: 1, textAlign: 'left'}}>出版社：{rowData.Pub_company}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.introduction}>
                    <Text>{rowData.Brief}</Text>
                </View>
                <View style={styles.bookRank}>
                    <TouchableOpacity>
                        <Text>书评</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    introduction: {
        marginTop: 15,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    bookRank: {
        height:25,
        marginTop: 30,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
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
        marginTop: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    content: {
        marginTop: 15,
        marginRight: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});