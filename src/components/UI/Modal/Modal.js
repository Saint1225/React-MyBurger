import React, {Component} from 'react';
import classes from './Modal.module.css';
import Bcakdrop from '../Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxiliary/Auxiliary';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(){
        console.log('[Modal] will update');
    }
    
    render(){
        
        return (
            <Auxi>
                <Bcakdrop
                show={this.props.show}
                click={this.props.clicked}
                ></Bcakdrop>
                <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1':'0'
                }}
                >
                        {this.props.children}
                </div>
            </Auxi>   
        )
    }
}

export default Modal;