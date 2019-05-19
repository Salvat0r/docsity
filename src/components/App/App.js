import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getLocation } from '../../actions/';

import Front from '../Front/Front';
import Back from '../Back/Back';
import Spinner from '../Spinner/Spinner';

import './../style.css';

class App extends Component {
    componentDidMount() {
        this.props.getLocation();
    }

    renderContent() {
        const weather = this.props.baseDati;
        const name = this.props.positionName.results;        
        if (weather.currently && name && this.props.coords) {
            return (
                <div className="flipcard middle">
                    <Front weather={weather} />
                    <Back coords={this.props.coords} />
                </div>
            )
        }
        return (
            <div>
                <Spinner message='Loading...' />
            </div>
        )
    } 

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coords: state.position,
        baseDati: state.baseDati,
        positionName: state.positionName
    }
}

export default connect(mapStateToProps, { getLocation })(App);