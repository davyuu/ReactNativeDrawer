import React, {Component, PropTypes} from 'react';
import {StyleSheet, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Toolbar from "./Toolbar";
import ListViewComponent from "./ListViewComponent";

export default class Main extends Component {
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

	renderRow(post, sectionId, rowId, highlightRow) {
		return (
            <View style={styles.row}>
                <Text style={styles.rowText}>{post.id}: {post.body}</Text>
            </View>
		)
	}

	render() {
        let fetchUrl = 'https://jsonplaceholder.typicode.com/posts';
        return (
            <View style={styles.container}>
                <Toolbar onPress={this.context.drawer.open}/>
                <ListViewComponent fetchUrl={fetchUrl} renderRow={this.renderRow.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 5
    },
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#f4f4f4',
		marginBottom: 3
	},
	rowText: {
		flex: 1
	}
});