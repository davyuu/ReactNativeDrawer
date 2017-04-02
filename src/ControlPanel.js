import React, {Component, PropTypes} from 'react';
import {StyleSheet, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ListViewComponent from "./ListViewComponent";

export default class ControlPanel extends Component {
	renderRow(user, sectionId, rowId, highlightRow) {
		return (
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}: {user.username}</Text>
            </View>
		)
	}

	render() {
		let fetchUrl = 'https://jsonplaceholder.typicode.com/users';
		return (
            <View style={styles.container}>
                <ListViewComponent fetchUrl={fetchUrl} renderRow={this.renderRow.bind(this)}/>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    controlText: {
        color: 'black'
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10
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