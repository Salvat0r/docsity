import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleHoverAction } from '../../actions/';

import Maps from '../Maps/Map';

class Back extends Component {
    render() {
        return (
            <div 
                className={`back ${this.props.activeClass ? "backflip" : ""}`} 
                onMouseLeave={this.props.handleHoverAction} 
                onClick={this.props.handleHoverAction}
            >
                <div className="back-content">
                    <Maps coords={this.props.coords}/>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        activeClass: state.activeClass,
        coords: state.position
    }
}

export default connect(mapStateToProps, { handleHoverAction })(Back);