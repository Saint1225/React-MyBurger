import React, {Component} from 'react';
import Auxi from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render () {
        return (
            <Auxi>
            <SideDrawer 
            closed={this.sideDrawerClosedHandler}
            open={this.state.showSideDrawer}
            // clicked={this.menuCloseHandler}
            ></SideDrawer>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxi>
        )
    }
}

export default Layout;