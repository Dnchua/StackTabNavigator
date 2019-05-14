import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import BookList from './bookList';

export default class Home extends Component {


    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                    () => {
                        this.props.navigation.navigate('Details')
                    }
                }>
                    <Text style={{color: 'white'}}>??</Text>
                </TouchableOpacity> */}
                <BookList navigate={this.props.navigation.navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});