import React, {Component, PropTypes} from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

export default class Toolbar extends Component {
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

    handlePress(e) {
        if(this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                    <Image style={styles.menuButton} source={require('./assets/menu.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: 'red',
        height: 40,
		justifyContent: 'center',
    },
    menuButton: {
        width: 24,
        height: 24,
        padding: 10,
        margin: 5,
	}
});