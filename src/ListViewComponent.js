import React, {Component} from 'react';
import {ListView, Text, View, StyleSheet} from 'react-native';

export default class ListViewComponent extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds,
            fetchUrl: this.props.fetchUrl
        };
    }

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(this.state.fetchUrl)
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(response)
				});
			});
	};

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.props.renderRow.bind(this)}
            />
        );
    }
}