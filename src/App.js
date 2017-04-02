import React, {Component} from 'react';
import Drawer from 'react-native-drawer';

import ControlPanel from './ControlPanel';
import Main from './Main';

export default class App extends Component {
    state = {
        drawerOpen: false
    };
    closeDrawer = () => {
        this.drawer.close()
    };
    openDrawer = () => {
        this.drawer.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                type="overlay"
                tapToClose={true}
                content={<ControlPanel closeDrawer={this.closeDrawer}/>}
                onOpen={() => {
                    this.setState({drawerOpen: true})
                }}
                onClose={() => {
                    this.setState({drawerOpen: false})
                }}
                styles={drawerStyles}
                tweenDuration={100}
                tweenHandler={(ratio) => {
					return {
						drawer: { shadowRadius: Math.min(ratio*5*5, 5) },
						main: { opacity:(2-ratio)/2 },
					}
				}}
                panThreshold={0.08}
                openDrawerOffset={0.2}
                panOpenMask={0.2}
                panCloseMask={0.2}
            >
                <Main/>
            </Drawer>
        );
    }
}

const drawerStyles = {
	drawer: {
		shadowColor: "#000000",
		shadowOpacity: 0.8,
		shadowRadius: 0,
	}
}