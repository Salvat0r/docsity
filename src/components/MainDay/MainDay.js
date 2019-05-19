import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleHoverAction } from '../../actions/';

import mapicon from '../../assets/MapIcon.svg';
/*Usando Create-React-App questo è l'unico modo che conosco per leggere dinamicamente un'immagine statica nel progetto - Vedi riga 27*/
const images = require.context('../../assets', true);

class MainDay extends Component {
    render() {
        this.findIcona = (el) => { 
            return el.id === icon;
        }
        const today = this.props.baseDati.currently;
        const icon = this.props.baseDati.daily.icon;
        const immagine = this.props.icon.find(this.findIcona).href;
        const name = this.props.positionName.results;

        return (
            <div 
                className="today" 
                onMouseEnter={this.props.handleHoverAction} 
                onClick={this.props.handleHoverAction}
            >
                <div className="city">
                    <i className="pin-map"><img src={mapicon} alt="App Meteo Docsity" /></i>{name[0].address_components[3].short_name}
                </div>
                <div className="icon-weather">
                    <img src={images(`.${immagine}`)} alt="Weather Rome" />
                </div>
                <div className="temperature">
                    {today.temperature.toFixed(0)}°
                </div>
                <div className="humidity">
                    Feels like: {today.apparentTemperature.toFixed(0)}°<br />
                    Humidity: {today.humidity*100}%
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        activeClass: state.activeClass,
        coords: state.position,
        baseDati: state.baseDati,
        icon: state.icon,
        positionName: state.positionName
    }
}

export default connect(mapStateToProps, { handleHoverAction })(MainDay);