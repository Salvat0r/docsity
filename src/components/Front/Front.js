import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainDay from '../MainDay/MainDay';
import Week from '../Week/Week';

import bg from '../../assets/bg.png';

class Front extends Component {
    render(props) {
        const week = this.props.weather.daily.data;
        const backgroundStyle = {
            backgroundImage: `url(${bg})`,
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat'
        }
        return (
            <div className={`front ${this.props.activeClass ? "frontflip" : ""}`} style={backgroundStyle}>
                <div className="front-content">
                    <MainDay />
                    <Week week={week}/>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        activeClass: state.activeClass
    }
}

export default connect(mapStateToProps, null)(Front);